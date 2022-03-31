import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function Settings({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
    borderColor: 'white',
    backgroundColor: '#AEFEFF',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
