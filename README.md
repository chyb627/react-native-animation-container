# react-native-animation-container

container with moving effect

## Installation

```sh
yarn add react-native-animation-container
```
or
```sh
npm i --save react-native-animation-container
```

## Usage

```js
import { FadeOutAnimation } from 'react-native-animation-container';

// ...

return (
    <FadeOutAnimation>
        {/* Text, View, ... etc */}
    </FadeOutAnimation>
)

```

## components that can be used

- FadeOutAnimation
- HorizontalAnimation
- VerticalAnimation
- AnimationButton

## API

These are the most common ones:


| Prop               | Description                                                                                                                                                                                                                                                                     | Default                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **`loop`**         | A boolean flag indicating whether or not the animation should loop.                                                                                                                                                                                                             | `true`                                                                                                              |
| **`startValue`**         | This is the starting position of the animation.                                                                                                                                                                                              | `0`                                                                                                              |
| **`endValue`**         | This is where the animation ends.                                                                                                                                                                                              | `10`                                                                                                              |
| **`duration`**         | The duration of the animation in ms. Takes precedence over speed when set. This only works when source is an actual JS object of an animation.                                                                                                                                                                                     | `1000(ms)`                                                                                                              |
| **`onPress`**         | This is the required value for the Animation button                                                                                                                                                                                     |                                                                                                              |
