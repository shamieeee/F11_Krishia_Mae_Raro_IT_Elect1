
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button title="white" onPress={() => setBackgroundColor('white')} />
      <Button title="Light Blue" onPress={() => setBackgroundColor('lightblue')} />
      <Button title="yellow" onPress={() => setBackgroundColor('yellow')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColorChangerApp;