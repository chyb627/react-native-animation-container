import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Animated, Pressable } from 'react-native';
import { useAnimation } from './hooks/useAnimation';

export const FadeOutAnimation: React.FC<{
  children: React.ReactNode | string;
}> = ({ children }) => {
  const { styleOpacityAnim } = useAnimation();

  return <Animated.View style={styleOpacityAnim}>{children}</Animated.View>;
};

export const HorizontalAnimation: React.FC<{
  children: React.ReactNode | string;
  value?: number;
  startValue?: number;
  endValue?: number;
  duration?: number;
}> = ({
  children,
  value = 0,
  startValue = 0,
  endValue = 50,
  duration = 1000,
}) => {
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
        duration,
        useNativeDriver: true,
      }),
    ).start();
  }, [duration, endValue, startValue, translateXAnimation]);

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
  duration?: number;
}> = ({
  children,
  value = 0,
  startValue = 0,
  endValue = 10,
  duration = 1000,
}) => {
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
        duration,
        useNativeDriver: true,
      }),
    ).start();
  }, [duration, endValue, startValue, translateYAnimation]);

  useEffect(() => {
    autoPlayTiming();

    // return () => translateXAnimation.removeAllListeners();
  }, [autoPlayTiming]);

  return <Animated.View style={styleTranslateXAnim}>{children}</Animated.View>;
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
      }}>
      <Animated.View style={{ transform: [{ scale: scale }] }}>
        {props.children}
      </Animated.View>
    </Pressable>
  );
};
