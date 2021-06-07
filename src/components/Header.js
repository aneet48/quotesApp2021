//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {withTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';

// create a component
const Header = ({theme}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View
          style={{...styles.barfull, backgroundColor: theme.secondary}}></View>
        <View
          style={{...styles.barHalf, backgroundColor: theme.secondary}}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="magnifying-glass" size={22} color={theme.secondary} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
  },
  barfull: {
    backgroundColor: 'black',
    height: 4,
    width: 25,
    marginBottom: 4,
  },
  barHalf: {
    backgroundColor: 'black',
    height: 3,
    width: 15,
  },
});

//make this component available to the app
export default withTheme(Header);
