import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Animated, Pressable } from 'react-native';
import { useAnimation } from './hooks/useAnimation';

export const FadeOutAnimation: React.FC<{
  children: React.ReactNode | string;
  loop?: boolean;
}> = ({ children, loop = true }) => {
  const { padeOutAnimation, stylePadeOutAnim, playFadeOut, autoPlayFadeOut } =
    useAnimation();

  useEffect(() => {
    loop ? autoPlayFadeOut() : playFadeOut();

    return () => padeOutAnimation.removeAllListeners();
  }, [autoPlayFadeOut, loop, padeOutAnimation, playFadeOut]);

  return <Animated.View style={stylePadeOutAnim}>{children}</Animated.View>;
};

export const FadeInAnimation: React.FC<{
  children: React.ReactNode | string;
  loop?: boolean;
}> = ({ children, loop = true }) => {
  const { padeInAnimation, stylePadeInAnim, playFadeIn, autoPlayFadeIn } =
    useAnimation();

  useEffect(() => {
    loop ? autoPlayFadeIn() : playFadeIn();

    return () => padeInAnimation.removeAllListeners();
  }, [autoPlayFadeIn, loop, padeInAnimation, playFadeIn]);

  return <Animated.View style={stylePadeInAnim}>{children}</Animated.View>;
};

export const HorizontalAnimation: React.FC<{
  children: React.ReactNode | string;
  loop?: boolean;
  startValue?: number;
  endValue?: number;
  duration?: number;
}> = ({
  children,
  startValue = 0,
  endValue = 10,
  duration = 1000,
  loop = true,
}) => {
  const { translateXAnimation, styleTranslateXAnim } = useAnimation();

  const playTiming = useCallback(() => {
    translateXAnimation.setValue(startValue);

    Animated.timing(translateXAnimation, {
      toValue: endValue,
      duration,
      useNativeDriver: true,
    }).start();
  }, [duration, endValue, startValue, translateXAnimation]);

  const autoPlayTiming = useCallback(() => {
    translateXAnimation.setValue(startValue);
    Animated.loop(
      Animated.timing(translateXAnimation, {
        toValue: endValue,
        duration,
        useNativeDriver: true,
      })
    ).start();
  }, [duration, endValue, startValue, translateXAnimation]);

  useEffect(() => {
    loop ? autoPlayTiming() : playTiming();

    return () => translateXAnimation.removeAllListeners();
  }, [autoPlayTiming, loop, playTiming, translateXAnimation]);

  return <Animated.View style={styleTranslateXAnim}>{children}</Animated.View>;
};

export const VerticalAnimation: React.FC<{
  children: React.ReactNode | string;
  loop?: boolean;
  startValue?: number;
  endValue?: number;
  duration?: number;
}> = ({
  children,
  startValue = 0,
  endValue = 10,
  duration = 1000,
  loop = true,
}) => {
  const { translateYAnimation, styleTranslateYAnim } = useAnimation();

  const playTiming = useCallback(() => {
    translateYAnimation.setValue(startValue);

    Animated.timing(translateYAnimation, {
      toValue: endValue,
      duration,
      useNativeDriver: true,
    }).start();
  }, [duration, endValue, startValue, translateYAnimation]);

  const autoPlayTiming = useCallback(() => {
    translateYAnimation.setValue(startValue);
    Animated.loop(
      Animated.timing(translateYAnimation, {
        toValue: endValue,
        duration,
        useNativeDriver: true,
      })
    ).start();
  }, [duration, endValue, startValue, translateYAnimation]);

  useEffect(() => {
    loop ? autoPlayTiming() : playTiming();

    return () => translateYAnimation.removeAllListeners();
  }, [autoPlayTiming, loop, playTiming, translateYAnimation]);

  return <Animated.View style={styleTranslateYAnim}>{children}</Animated.View>;
};

export const AnimationButton: React.FC<{
  onPress: () => void;
  hitSlop?: { left: number; right: number; top: number; bottom: number };
  backgroundColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  children: ReactElement | ReactElement[];
}> = (props) => {
  const [buttonAnimationValue] = useState(new Animated.Value(0));

  const onPressIn = useCallback(() => {
    Animated.timing(buttonAnimationValue, {
      duration: 200,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }, [buttonAnimationValue]);

  const onPressOut = useCallback(() => {
    Animated.timing(buttonAnimationValue, {
      duration: 200,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, [buttonAnimationValue]);

  const scale = buttonAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.0, 0.95],
  });

  return (
    <Pressable
      {...props}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={props.onPress}
      hitSlop={
        props.hitSlop ?? {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }
      }
      style={{
        backgroundColor: props.backgroundColor,
        paddingHorizontal: props.paddingHorizontal,
        paddingVertical: props.paddingVertical,
      }}
    >
      <Animated.View style={{ transform: [{ scale: scale }] }}>
        {props.children}
      </Animated.View>
    </Pressable>
  );
};
