import React from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring/renderprops';
import * as S from './styles';

export class Fade extends React.PureComponent {
  render() {
    const {
      children,
      show,
      from = { opacity: 0 },
      enter = { opacity: 1 },
      leave = { opacity: 0 },
      ...rest
    } = this.props;

    const { type, props } = children;
    const Component = animated[type] || animated(type);
    const result = styles => {
      const newProps = {
        ...props,
        style: {
          willChange: 'opacity, transform',
          ...props.style,
          ...styles,
        },
      };
      return <Component {...newProps} />;
    };

    return (
      <Transition
        native
        items={show}
        {...rest}
        from={from}
        enter={enter}
        leave={leave}
      >
        {show => show && result}
      </Transition>
    );
  }
}
//
// function Fade({
//   children, show, from, enter, leave, ...rest
// }) {
//   const { type, props } = children;
//   const Component = animated[type] || animated(type);
//   const result = styles => {
//     const newProps = {
//       ...props,
//       style: {
//         willChange: 'opacity, transform',
//         ...props.style,
//         ...styles,
//       },
//     };
//     return <Component {...newProps} />;
//   };
//
//   return (
//     <Transition
//       native
//       items={show}
//       {...rest}
//       from={from}
//       enter={enter}
//       leave={leave}
//       children={show => show && result}
//     />
//   );
// }
export default Fade;

Fade.propTypes = {
  show: PropTypes.objectOf(PropTypes.any).isRequired,
};

Fade.dafaultProps = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
};
