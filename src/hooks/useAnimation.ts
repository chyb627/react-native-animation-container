import { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimation = () => {
  const opacityAnimation = useRef(new Animated.Value(1)).current;
  const translateYAnimation = useRef(new Animated.Value(-50)).current;
  const translateXAnimation = useRef(new Animated.Value(-50)).current;

  const styleOpacityAnim = {
    opacity: opacityAnimation,
  };

  const styleTranslateYAnim = {
    transform: [
      {
        translateY: translateYAnimation,
      },
    ],
  };
  const styleTranslateXAnim = {
    transform: [
      {
        translateX: translateXAnimation,
      },
    ],
  };

  const autoPlayFadeIn = useCallback(() => {
    Animated.loop(
      Animated.timing(opacityAnimation, {
        toValue: 0.2,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, [opacityAnimation]);

  const autoPlaySpring = useCallback(() => {
    translateYAnimation.setValue(-5);
    Animated.loop(
      Animated.spring(translateYAnimation, {
        toValue: 5,
        useNativeDriver: true,
      }),
    ).start();
  }, [translateYAnimation]);

  const autoPlayTiming = useCallback(() => {
    translateXAnimation.setValue(-5);
    Animated.loop(
      Animated.timing(translateXAnimation, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, [translateXAnimation]);

  useEffect(() => {
    autoPlayFadeIn();
    autoPlaySpring();
    autoPlayTiming();

    // return () => translateXAnimation.removeAllListeners();
  }, [autoPlayFadeIn, autoPlaySpring, autoPlayTiming]);

  return {
    styleOpacityAnim,
    styleTranslateXAnim,
    styleTranslateYAnim,
  };
};
