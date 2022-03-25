import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function Kayıt({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Kaydol</Text>
        </View>
        <View style={styles.section1}>
          <Text style={styles.text}>Ad:</Text>
          <TextInput
            placeholder={'Adınızı giriniz'}
            style={styles.input}></TextInput>
          <Text style={styles.text}>Soyad:</Text>
          <TextInput
            placeholder={'Soyadınızı giriniz'}
            style={styles.input}></TextInput>
          <Text style={styles.text}>Email</Text>
          <TextInput
            placeholder={'example@gmail.com'}
            style={styles.input}></TextInput>
          <Text style={styles.text}>Şifre</Text>
          <TextInput
            secureTextEntry={true}
            placeholder={'Şifrenizi giriniz'}
            style={styles.input}></TextInput>
          <Text style={styles.text}>Şifre (Tekrar)</Text>
          <TextInput
            placeholder={'Şifrenizi tekrar giriniz'}
            style={styles.input}></TextInput>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.btnKaydol}>
            <Text style={styles.btnText}>Kaydol</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
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
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#EFFFFD',
    fontSize: 40,
    margin: 20,
    fontFamily: 'Arial',
  },
  section1: {
    marginHorizontal: 20,
    flex: 0.8,
  },
  text: {
    textAlign: 'center',
    color: '#EFFFFD',
    fontSize: 20,
    paddingLeft: 20,
  },
  input: {
    paddingLeft: 7,
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: '#072227',
    borderBottomWidth: 3,
    borderBottomColor: '#AEFEFF',
    color: 'black',
    fontSize: 20,
  },
  btnKaydol: {
    flex: 0.2,
    marginTop: 30,
    backgroundColor: '#AEFEFF',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  btnText: {
    fontSize: 20,
    color: '#072227',
  },
});
