import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Chatbox')}
      >
        <Text style={styles.buttonText}>Go to Chatbox</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Comments')}
      >
        <Text style={styles.buttonText}>Go to Comments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 20, // space between buttons (RN 0.71+)
  },
  button: {
    borderWidth: 1,
    borderColor: 'pink',
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});