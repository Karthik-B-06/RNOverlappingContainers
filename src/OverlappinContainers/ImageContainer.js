import React from 'react';
import { Animated, StyleSheet } from 'react-native';

const ImageContainer = ({
  scrollY,
  imageSource,
  imageHeight,
}) => {
  return (
    <Animated.Image
      source={{ uri: imageSource }}
      style={[
        styles.topImage,
        {
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [0, imageHeight],
                outputRange: [1.2, 1],
                extrapolate: 'clamp'
              })
            }
          ]
        }
      ]} />
  )
}

const styles = StyleSheet.create({
  topImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: 450,
    backgroundColor: '#f6f6f6'
  },
})

export default ImageContainer;