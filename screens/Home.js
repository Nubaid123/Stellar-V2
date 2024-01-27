import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import {Text,View} from 'react-native'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidsafearea} />
        <ImageBackground
          source={require('assets\space.gif')}
          style={styles.bg}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Home Screen </Text>
          </View>
          
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('Daily Pics');
            }}>
            <Text style={styles.routeText}>Daily Pics</Text>
            <Image source={require("assets\daily_pictures.png")} style={styles.iconImg}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('Space Crafts');
            }}>
            <Text style={styles.routeText}>Space Crafts</Text>
             <Image source={require("assets\space_crafts.png")} style={styles.iconImg}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('Star Maps');
            }}>
            <Text style={styles.routeText}>Star Maps</Text>
             <Image source={require("assets\star_map.png")} style={styles.iconImg}/>
          </TouchableOpacity>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  droidsafearea: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  routeCard: {
    flex: 0.25,
    backgroundColor: 'white',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 50,
  },
  routeText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    paddingLeft: 25,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
  iconImg:{
    position:"absolute",
    width: 70,
    height: 70,
    right: 20,
    top: -40
  }
});