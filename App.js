import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Home from "screens\Home.js"
import DailyPic from "screens/DailyPic"
import SpaceCrafts from "screens/SpaceCrafts"
import StarMap from "screens/StarMap"
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={Home}/>
      <Stack.Screen name="Daily Pics" component={DailyPic}/>
      <Stack.Screen name="Space Crafts" component={SpaceCrafts}/>
      <Stack.Screen name="Star Maps" component={StarMap}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
