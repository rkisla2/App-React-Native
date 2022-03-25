import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
