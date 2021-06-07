//import liraries
import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {withTheme} from 'styled-components/native';
import {useTheme} from './theme';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import HomeRoute from './routes/HomeRoute';


const Stack = createStackNavigator();

const Route = ({theme}) => {
  const currentTheme = useTheme();

  return (
    <NavigationContainer
      theme={currentTheme.mode === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeRoute} />
        <Stack.Screen name="Settings" component={HomeScreen} />
      </Stack.Navigator>

    
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default withTheme(Route);
