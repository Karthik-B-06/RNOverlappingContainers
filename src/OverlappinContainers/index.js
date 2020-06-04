import React, { useState } from 'react';
import { Animated, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { deviceHeight } from '../helpers/constants';
import BottomContainer from './BottomContainer';
import ImageContainer from './ImageContainer';
import { LoadingAtom } from './LoadingAtom';

const OverlappingContainers = (props) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const imageSource = 'https://images.unsplash.com/photo-1591187194794-1860cc81437c';
  const placeHolderContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <View style={[styles.container]}>
      <StatusBar barStyle='light-content' />
      <SafeAreaView>
        <ImageContainer
          scrollY={scrollY}
          imageSource={imageSource}
          imageHeight={450}
        />
        <BottomContainer
          scrollY={scrollY}
          imageHeight={450}
        >
          <View style={{
            marginTop: 40,
            marginLeft: 20,
            marginRight: 20,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
            {
              placeHolderContent.map((item, index) => <LoadingAtom key={item} />)
            }
          </View>
        </BottomContainer>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    height: deviceHeight,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default OverlappingContainers;