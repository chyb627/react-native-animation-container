import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimation = () => {
  const opacityAnimation = useRef(new Animated.Value(1)).current;
  const translateXAnimation = useRef(new Animated.Value(-50)).current;
  const translateYAnimation = useRef(new Animated.Value(-50)).current;

  const styleOpacityAnim = {
    opacity: opacityAnimation,
  };

  const styleTranslateXAnim = {
    transform: [
      {
        translateX: translateXAnimation,
      },
    ],
  };

  const styleTranslateYAnim = {
    transform: [
      {
        translateY: translateYAnimation,
      },
    ],
  };

  const playFadeIn = useCallback(() => {
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [opacityAnimation]);

  const autoPlayFadeIn = useCallback(() => {
    Animated.loop(
      Animated.timing(opacityAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [opacityAnimation]);

  return {
    opacityAnimation,
    translateXAnimation,
    translateYAnimation,
    styleOpacityAnim,
    styleTranslateXAnim,
    styleTranslateYAnim,
    playFadeIn,
    autoPlayFadeIn,
  };
};
