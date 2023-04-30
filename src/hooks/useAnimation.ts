import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimation = () => {
  const padeOutAnimation = useRef(new Animated.Value(1)).current;
  const padeInAnimation = useRef(new Animated.Value(0)).current;
  const translateXAnimation = useRef(new Animated.Value(-50)).current;
  const translateYAnimation = useRef(new Animated.Value(-50)).current;

  const stylePadeOutAnim = {
    opacity: padeOutAnimation,
  };

  const stylePadeInAnim = {
    opacity: padeInAnimation,
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

  const playFadeOut = useCallback(() => {
    Animated.timing(padeOutAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [padeOutAnimation]);

  const autoPlayFadeOut = useCallback(() => {
    Animated.loop(
      Animated.timing(padeOutAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [padeOutAnimation]);

  const playFadeIn = useCallback(() => {
    Animated.timing(padeInAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [padeInAnimation]);

  const autoPlayFadeIn = useCallback(() => {
    Animated.loop(
      Animated.timing(padeInAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [padeInAnimation]);

  return {
    padeOutAnimation,
    padeInAnimation,
    translateXAnimation,
    translateYAnimation,
    stylePadeOutAnim,
    stylePadeInAnim,
    styleTranslateXAnim,
    styleTranslateYAnim,
    playFadeOut,
    autoPlayFadeOut,
    playFadeIn,
    autoPlayFadeIn,
  };
};
