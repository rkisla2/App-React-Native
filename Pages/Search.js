import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#AEFEFF',
          }}>
          <Image source={require('./Photos/search.png')}></Image>
        </TouchableOpacity>
        <TextInput placeholder="Search" style={styles.input}></TextInput>
      </View>
      <ScrollView style={{flex: 0.9}}>
        <Text style={styles.text}>Space</Text>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require('./Photos/space.jpeg')}></Image>
        <Text style={styles.text}>Flower</Text>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require('./Photos/flower.jpeg')}></Image>
        <Text style={styles.text}>View</Text>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require('./Photos/view.jpg')}></Image>
        <Text style={styles.text}>Sea</Text>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require('./Photos/scenes.jpeg')}></Image>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{
            uri: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1600',
          }}></Image>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#072227',
  },
  input: {
    flex: 1,
    backgroundColor: '#AEFEFF',
    

    fontSize: 20,
  },
  img: {
    flex: 1,
    width: '100%',
    height: 800,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
