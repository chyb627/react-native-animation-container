import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { FadeOutAnimation } from 'react-native-animation-container';

export default function App() {
  return (
    <View style={styles.container}>
      <FadeOutAnimation>
        <Text>FadeOutAnimation</Text>
      </FadeOutAnimation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
