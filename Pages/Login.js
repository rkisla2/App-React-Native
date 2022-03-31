import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>LOGIN</Text>
      </View>
      <View style={styles.section1}>
        <TextInput
          placeholder="User Name"
          placeholderTextColor={'white'}
          style={styles.input}></TextInput>

        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={'white'}
          style={styles.input}></TextInput>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity
          onPressIn={() => {
            navigation.navigate('Tabs');
          }}
          style={styles.Button}
          title="Login"
          onPress={() => {}}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section3}>
        <Text style={{color: '#AAD8D3'}}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          title="  CreateAccount"
          o>
          <Text style={{color: '#FAF3F3', textDecorationLine: 'underline'}}>
            CreateAccount
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#072227',
    flex: 1,
    margin: 0,
    padding: 0,
  },
  Header: {
    flex: 0.4,
    alignItems: 'center',
    backgroundColor: '#AEFEFF',
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  section1: {
    marginTop: 40,
    flex: 0.2,

    alignItems: 'center',
    justifyContent: 'center',
  },
  section2: {
    flex: 0.2,
    justifyContent: 'center',
    marginRight: 30,
    marginLeft: 30,
  },
  section3: {
    flex: 0.2,
    flexDirection: 'row',
    marginLeft: 60,
    paddingLeft: 10,
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
  Text: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
  },
  HeaderText: {
    fontSize: 40,
  },

  Button: {
    margin: 10,
    borderColor: 'white',
    backgroundColor: '#AEFEFF',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#072227',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
});
