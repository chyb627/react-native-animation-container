import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const FadeOutAnimation: React.FC<{
  children: React.ReactNode | string;
}> = ({ children }) => {
  const opacityAnimation = useRef(new Animated.Value(1)).current;

  const styleOpacityAnim = {
    opacity: opacityAnimation,
  };

  const autoPlayFadeOut = useCallback(() => {
    Animated.loop(
      Animated.timing(opacityAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, [opacityAnimation]);

  useEffect(() => {
    autoPlayFadeOut();

    // return () => translateXAnimation.removeAllListeners();
  }, [autoPlayFadeOut]);

  return <Animated.View style={styleOpacityAnim}>{children}</Animated.View>;
};

export const HorizontalAnimation: React.FC<{
    children: React.ReactNode | string;
    value?: number;
    startValue?: number;
    endValue?: number;
  }> = ({ children, value = 0, startValue = 0, endValue = 50 }) => {
    const translateXAnimation = useRef(new Animated.Value(value)).current;
  
    const styleTranslateXAnim = {
      transform: [
        {
          translateX: translateXAnimation,
        },
      ],
    };
  
    const autoPlayTiming = useCallback(() => {
      translateXAnimation.setValue(startValue);
      Animated.loop(
        Animated.timing(translateXAnimation, {
          toValue: endValue,
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    }, [endValue, startValue, translateXAnimation]);
  
    useEffect(() => {
      autoPlayTiming();
  
      // return () => translateXAnimation.removeAllListeners();
    }, [autoPlayTiming]);
  
    return <Animated.View style={styleTranslateXAnim}>{children}</Animated.View>;
  };

export const VerticalAnimation: React.FC<{
    children: React.ReactNode | string;
    value?: number;
    startValue?: number;
    endValue?: number;
  }> = ({ children, value = 0, startValue = 0, endValue = 50 }) => {
    const translateYAnimation = useRef(new Animated.Value(value)).current;
  
    const styleTranslateXAnim = {
      transform: [
        {
          translateY: translateYAnimation,
        },
      ],
    };
  
    const autoPlayTiming = useCallback(() => {
      translateYAnimation.setValue(startValue);
      Animated.loop(
        Animated.timing(translateYAnimation, {
          toValue: endValue,
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    }, [endValue, startValue, translateYAnimation]);
  
    useEffect(() => {
      autoPlayTiming();
  
      // return () => translateXAnimation.removeAllListeners();
    }, [autoPlayTiming]);
  
    return <Animated.View style={styleTranslateXAnim}>{children}</Animated.View>;
  };
  
  export default VerticalAnimation;
  