import React, { useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import CloudOne from '@I/activity/treasure-hunt/cloud-1.png';
import CloudTwo from '@I/activity/treasure-hunt/cloud-2.png';
import CloudThree from '@I/activity/treasure-hunt/cloud-3.png';
import CloudFour from '@I/activity/treasure-hunt/cloud-4.png';
import * as S from './styles';

function Clouds({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.Clouds>
      <S.Cloud src={CloudOne} alt="" top={50} left={isMobile ? -50 : -5} width={isMobile ? 350 : 750} duration={18} />
      <S.Cloud src={CloudTwo} alt="" top={50} right={isMobile ? -30 : 15} width={isMobile ? 250 : 550} duration={17} />
      <S.Cloud src={CloudThree} alt="" top={100} left={isMobile ? -30 : 10} width={isMobile ? 300 : 600} duration={20} />
      <S.Cloud src={CloudFour} alt="" top={100} right={isMobile ? -10 : 18} width={isMobile ? 300 : 600} duration={18} />
    </S.Clouds>
  );
}
export default withTheme(Clouds);

Clouds.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
