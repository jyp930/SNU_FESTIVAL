import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import { Transition, animated } from 'react-spring/renderprops';
import * as S from './styles';

const styles = {
  cell: {
    willChange: 'transform, width, height, opacity',
  },
};

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      heightOuter: 0,
      open: false,
      lastOpen: false,
    };
  }

  componentDidUpdate() {
    this.clicked = false;
  }

  toggle = key => this.setState(
    state => ({
      lastOpen: state.open,
      open: state.open === key ? false : key,
    }),
    () => { this.clicked = true; },
  )

  resize = (width, height, props) => this.setState({
    [width]: props.client.width,
    [height]: props.client.height,
  })

  resizeOuter = props => this.resize('widthOuter', 'heightOuter', props)

  resizeInner = props => this.resize('width', 'height', props)

  update = ({
    key, x, y, width, height,
  }) => {
    const { open, heightOuter } = this.state;
    const isTargetOpened = open === key;
    return {
      opacity: open && !isTargetOpened ? 0 : 1,
      x: isTargetOpened ? this.outerRef.scrollLeft : x,
      y: isTargetOpened ? this.outerRef.scrollTop : y,
      width: isTargetOpened ? window.screen.width : (open ? 0 : width),
      height: isTargetOpened ? heightOuter : height,
    };
  }

  render() {
    const {
      children,
      columns,
      margin,
      config,
      data,
      keys,
      heights,
      closeDelay,
      lockScroll,
      ...rest
    } = this.props;
    const { lastOpen, open, width } = this.state;
    const columnHeights = new Array(columns).fill(0);

    const displayData = data.map((child) => {
      const index = columnHeights.indexOf(Math.min(...columnHeights));
      const cellWidth = width / columns - margin / (1 - 1 / (columns + 1));
      const left = cellWidth * index;
      const offset = (index + 1) * margin;
      const top = columnHeights[index] + margin;
      const height = typeof heights === 'function' ? heights(child) : heights;
      columnHeights[index] += height + margin;
      return {
        x: margin ? left + offset : left,
        y: top,
        width: cellWidth,
        height,
        key: keys(child),
        object: child,
      };
    });
    let overflow;
    if (lockScroll) {
      if (open) {
        overflow = 'hidden';
      } else { overflow = 'auto'; }
    } else { overflow = 'auto'; }

    return (
      <Measure
        client
        innerRef={r => { this.outerRef = r; }}
        onResize={this.resizeOuter}
      >
        {({ measureRef }) => (
          <S.OuterStyle
            ref={measureRef}
            overflow={overflow}
            {...rest}
          >
            <Measure
              client
              innerRef={r => { this.innerRef = r; }}
              onResize={this.resizeInner}
            >
              {({ measureRef }) => (
                <S.InnerStyle
                  ref={measureRef}
                >
                  <Transition
                    native
                    items={displayData}
                    keys={d => d.key}
                    from={{ opacity: 0 }}
                    leave={{ opacity: 0 }}
                    enter={this.update}
                    update={this.update}
                    config={{
                      ...config,
                      delay: this.clicked && !open ? closeDelay : 0,
                    }}
                  >
                    {(c, i) => ({
                      opacity, width: width2, height: height2,
                    }) => (
                      <animated.div
                        style={{
                          ...styles.cell,
                          opacity,
                          width: width2,
                          margin: 'auto',
                          height: height2,
                          zIndex:
                            lastOpen === c.key || open === c.key ? 1000 : i,
                        }}
                      >
                        {children(c.object, open === c.key, () => this.toggle(c.key))}
                      </animated.div>
                    )}
                  </Transition>
                </S.InnerStyle>
              )}
            </Measure>
          </S.OuterStyle>
        )}
      </Measure>
    );
  }
} export default Grid;

Grid.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.func.isRequired,
  columns: PropTypes.number,
  margin: PropTypes.number,
  heights: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  lockScroll: PropTypes.bool,
  closeDelay: PropTypes.number,
  config: PropTypes.objectOf(PropTypes.any),
};

Grid.defaultProps = {
  columns: 3,
  margin: 0,
  heights: 400,
  lockScroll: false,
  closeDelay: 0,
  config: {},
};
