import React from 'react';
import { View } from 'react-native';

const Spacer: React.FC<{
  horizontal?: boolean;
  space: number;
}> = (props) => {
  if (props.horizontal) {
    return <View style={{ marginLeft: props.space }} />;
  }

  return <View style={{ marginTop: props.space }} />;
};

export default Spacer;
