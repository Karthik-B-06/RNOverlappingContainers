import React from 'react';
import { Rect } from 'react-native-svg';
import ContentLoader from 'rn-content-loader';
import { deviceWidth } from '../helpers/constants';

export const LoadingAtom = (props) => {
  return (
    <ContentLoader
      height={120}
      width={(deviceWidth - 80) / 2}
      speed={4}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <Rect x="0" y="0" rx="12" ry="12" width={(deviceWidth - 80) / 2} height="100" />
    </ContentLoader>
  )
}