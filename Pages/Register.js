import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

export default function Register({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CREATE ACCOUNT</Text>
      </View>
      <View style={styles.section1}>
        <TextInput
          placeholder={'FullName'}
          placeholderTextColor={'white'}
          style={styles.input}></TextInput>

        <TextInput
          placeholder={'Email'}
          placeholderTextColor={'white'}
          style={styles.input}></TextInput>

        <TextInput
          secureTextEntry={true}
          placeholder={'Password'}
          placeholderTextColor={'white'}
          style={styles.input}></TextInput>

        <TextInput
          secureTextEntry={true}
          placeholderTextColor={'white'}
          placeholder={'Password'}
          style={styles.input}></TextInput>
      </View>
      <View style={styles.section2}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.btnKaydol}>
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#072227',
    padding: 0,
    margin: 0,
  },
  header: {
    height: 200,
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AEFEFF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  section1: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    flex: 0.3,
  },
  headerText: {
    color: '#072227',
    fontSize: 35,
    opacity: 0.8,
    margin: 20,
    fontFamily: 'Arial',
  },

  text: {
    color: '#EFFFFD',
    fontSize: 20,
    paddingLeft: 20,
  },
  input: {
    width: 300,
    marginBottom: 30,
    borderBottomWidth: 2,
    borderColor: '#072227',
    borderBottomColor: '#AEFEFF',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    opacity: 0.6,
  },
  btnKaydol: {
    backgroundColor: '#AEFEFF',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 40,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: '#072227',
    fontWeight: '500',
  },
});
