//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,Switch} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {withTheme} from 'styled-components/native';
import {useTheme} from '../theme';

const Tab = createBottomTabNavigator();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIconSettings from './TabBarIconSettings';
import Header from '../components/Header';
import { COLORS } from '../theme/colors';
// create a component
const HomeRoute = ({theme}) => {
  const curTheme = useTheme();
  return (
    <View style={styles.container}>
      <Header />
      {/* <Switch
        value={curTheme.mode === 'dark'}
        onValueChange={value => curTheme.setMode(value ? 'dark' : 'light')}
      /> */}
      {/* <Text>
        m Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, w
      </Text> */}
    </View>
  );
  //   return (
  //     <Tab.Navigator
  //       screenOptions={TabBarIconSettings}
  //       tabBarOptions={{
  //         activeTintColor: theme.tabActiveTintColor,
  //         inactiveTintColor: 'gray',
  //       }}>
  //       <Tab.Screen name="Home" component={HomeScreen} />
  //       <Tab.Screen name="Search" component={HomeScreen} />
  //       <Tab.Screen name="Liked" component={HomeScreen} />
  //       <Tab.Screen name="Saved" component={HomeScreen} />
  //     </Tab.Navigator>
  //   );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.matteBlack,
    // backgroundColor:'blue',
  },
});

//make this component available to the app
export default withTheme(HomeRoute);
