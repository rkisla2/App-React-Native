import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.imgSection}>
        <ImageBackground
          style={styles.img}
          resizeMode={'cover'}
          source={{
            uri: 'https://ntbrand-wp.s3.amazonaws.com/worldoftravel/wp-content/uploads/2021/03/31102028/My_World_Paris_59079f6834a4f50d46219cca-770x515.jpeg',
          }}></ImageBackground>
      </View>
      <View style={styles.textsection}>
        <Text style={styles.text}>Choose Your Wallpaper!</Text>
      </View>
      <ScrollView style={styles.Columnscroll}>
        <View style={styles.itemssection}>
          <ScrollView horizontal={true} style={styles.rowScroll}>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginLeft: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }}>
                  <Text style={styles.itemText}>CARS</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginLeft: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/568022/pexels-photo-568022.jpeg?auto=compress&cs=tinysrgb&w=1600',
                  }}>
                  <Text style={styles.itemText}>ANIMALS</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginLeft: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }}>
                  <Text style={styles.itemText}>SUNSET</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35, marginHorizontal: 5}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/8478915/pexels-photo-8478915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}>
                  <Text style={styles.itemText}>SEA</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginLeft: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/971360/pexels-photo-971360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }}>
                  <Text style={styles.itemText}>ROSE</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginLeft: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/10909449/pexels-photo-10909449.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                  }}>
                  <Text style={styles.itemText}>DARK</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginRight: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/11395819/pexels-photo-11395819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}>
                  <Text style={styles.itemText}>ARCHITECT</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.itemssection}>
          <ScrollView style={styles.rowScroll} horizontal={true}>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginLeft: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=1600',
                  }}>
                  <Text style={styles.itemText}>FORREST</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35, marginHorizontal: 5}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1600',
                  }}>
                  <Text style={styles.itemText}>CITY</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginRight: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/8140643/pexels-photo-8140643.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}>
                  <Text style={styles.itemText}>FLOWER</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginLeft: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/6108943/pexels-photo-6108943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }}>
                  <Text style={styles.itemText}>PINK</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginLeft: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }}>
                  <Text style={styles.itemText}>WHITE</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.35}}>
              <TouchableOpacity>
                <ImageBackground
                  style={{marginLeft: 2, ...styles.item}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }}>
                  <Text style={styles.itemText}>BLUE</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEDC',
  },
  imgSection: {
    flex: 0.65,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  textsection: {
    flex: 0.09,
    justifyContent: 'center',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: '#F5EEDC',
    borderColor: '#072227',
    borderBottomWidth: 5,
    borderRightWidth: 3,
    borderLeftWidth: 3,
  },

  text: {
    textAlign: 'center',
    fontSize: 21,
    color: '#072227',
    textShadowColor: 'black',
    fontWeight: '600',
  },
  Columnscroll: {
    flex: 0.5,
    backgroundColor: '#F5EEDC',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  rowScroll: {
    flex: 1,
    borderWidth: 5,
  },

  itemssection: {
    marginTop: 50,
    flex: 0.6,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  item: {
    width: 150,
    height: 250,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderRadius: 2,
  },
  itemText: {
    backgroundColor: '#000000c0',
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
  },
});
