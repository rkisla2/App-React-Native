import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function First({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Image source={require('./customer.png')}></Image>
      </View>
      <View style={styles.section2}>
        <Text style={styles.Text}>Kullanıcı Adı</Text>
        <TextInput style={styles.input}></TextInput>

        <Text style={styles.Text}>Şifre</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.section3}>
        <TouchableOpacity
          onPressIn={() => {
            navigation.navigate('Home');
          }}
          style={styles.Button}
          title="Giriş Yap"
          onPress={() => {}}>
          <Text style={styles.btnText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={styles.Button}
          title="Kayıt ol"
          o>
          <Text style={styles.btnText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#072227',
    flex: 1,

    borderWidth: 7,
    borderRightColor: '#AEFEFF',
    borderLeftColor: '#AEFEFF',
    borderBottomColor: '#072227',
    borderTopColor: '#072227',
  },
  section1: {
    flex: 0.2,
    alignItems: 'center',
    backgroundColor: '#AEFEFF',
    borderRadius: 150,
    marginTop: 30,
    justifyContent: 'center',
    width: 120,
    height: 120,
    marginLeft: 125,
  },
  section2: {
    paddingTop: 30,
    fontSize: 20,
    marginTop: 40,
    flex: 0.4,
    textAlign: 'center',
    alignItems: 'center',
  },

  input: {
    width: 300,
    marginBottom: 20,
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#072227',
    borderBottomColor: '#AEFEFF',
    color: 'white',
  },
  Text: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
  },
  section3: {
    flex: 0.4,
    paddingTop: 20,
    marginRight: 30,
    marginLeft: 30,
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
