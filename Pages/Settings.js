import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function Settings({navigation}) {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./Photos/privacy.png')}></Image>
        <Text>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./Photos/security.png')}></Image>
        <Text>Security</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./Photos/help.png')}></Image>
        <Text>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Image source={require('./Photos/Logout.png')}></Image>
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
    flexDirection: 'row',
  },
});
