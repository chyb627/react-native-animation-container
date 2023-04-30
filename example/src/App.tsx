import * as React from 'react';

import { StyleSheet, View, Text, Dimensions } from 'react-native';
import {
  AnimationButton,
  FadeInAnimation,
  FadeOutAnimation,
  HorizontalAnimation,
  VerticalAnimation,
} from 'react-native-animation-container';
import Spacer from './Spacer';

export default function App() {
  return (
    <View style={styles.container}>
      <FadeOutAnimation>
        <Text>FadeOutAnimation</Text>
      </FadeOutAnimation>

      <Spacer space={12} />

      <FadeInAnimation>
        <Text>FadeInAnimation</Text>
      </FadeInAnimation>

      <Spacer space={12} />

      <HorizontalAnimation>
        <Text>HorizontalAnimation</Text>
      </HorizontalAnimation>

      <Spacer space={12} />

      <HorizontalAnimation startValue={10} endValue={0}>
        <Text>HorizontalAnimation</Text>
      </HorizontalAnimation>

      <Spacer space={12} />

      <VerticalAnimation>
        <Text>VerticalAnimation</Text>
      </VerticalAnimation>

      <Spacer space={20} />

      <VerticalAnimation startValue={10} endValue={0}>
        <Text>VerticalAnimation</Text>
      </VerticalAnimation>

      <Spacer space={20} />

      <AnimationButton
        onPress={() => {
          console.log('clicked AnimationButton');
        }}
      >
        <View style={styles.animationButton}>
          <Text style={styles.animationButtonText}>Animation Button</Text>
        </View>
      </AnimationButton>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationButton: {
    width: width * 0.8,
    height: width * 0.15,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationButtonText: {
    color: 'white',
  },
});
