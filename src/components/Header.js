import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {withTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../theme/colors';

const Header = ({theme}) => {
  const topBar = useRef(new Animated.Value(0)).current;
  const bottomBar = useRef(new Animated.Value(0)).current;
  const bottomWidth = useRef(new Animated.Value(15)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;
  const [open, setopen] = useState(false);

  const handleOnPress = () => {
    console.log('reached', !open);
    let status = !open;
    Animated.spring(topBar, {
      toValue: status ? 1 : 0,
      useNativeDriver: false,
    }).start();
    Animated.spring(bottomBar, {
      toValue: status ? 1 : 0,
      useNativeDriver: false,
    }).start();
    Animated.spring(bottomWidth, {
      toValue: status ? 25 : 15,
      useNativeDriver: false,
    }).start();

    if (status) {
      fadeInFunc();
    } else {
      fadeOutFunc();
    }

    setopen(status);
  };

  const fadeInFunc = () => {
    Animated.sequence([
      Animated.timing(fadeIn, {
        duration: 200,
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.timing(fadeIn, {
        duration: 500,
        toValue: 1,
        useNativeDriver: false,
      }),
    ]).start(e => {});
  };

  const fadeOutFunc = () => {
    Animated.sequence([
      Animated.timing(fadeIn, {
        duration: 1,
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(fadeIn, {
        duration: 500,
        toValue: 0,
        useNativeDriver: false,
      }),
    ]).start(e => {});
  };

  return (
    <View>
      <View>
        <Animated.View
          style={{
            ...styles.menucontainer,
            opacity: fadeIn,
            transform: [
              {
                translateX: fadeIn.interpolate({
                  inputRange: [0, 1],
                  outputRange: [180, 0],
                }), // interpolate translateX to create a fade in left/right
              },
              {
                translateY: fadeIn.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-180, 0],
                }), // interpolate translateX to create a fade in left/right
              },
            ],
          }}>
          <View style={styles.menuInnerContainer}>
            <Text style={{color: theme.secondary}}>test area</Text>
          </View>
        </Animated.View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="magnifying-glass" size={22} color={theme.secondary} />
        </TouchableOpacity>
        <View style={styles.menuIconOuterContainer}>
          <View style={styles.menuIconInnerContainer}>
            <TouchableOpacity
              onPress={handleOnPress}
              style={styles.menuIconContainer}>
              <Animated.View
                style={{
                  ...styles.barfull,
                  backgroundColor: theme.secondary,
                  marginBottom: open ? -3 : 5,
                  transform: [
                    {
                      rotate: topBar.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '-40deg'],
                      }),
                    },
                  ],
                }}></Animated.View>
              <Animated.View
                style={{
                  ...styles.barfull,

                  backgroundColor: theme.secondary,
                  transform: [
                    {
                      rotate: bottomBar.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '40deg'],
                      }),
                    },
                  ],
                  width: bottomWidth,
                }}></Animated.View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    elevation: 20,
    shadowColor: 'transparent',
  },
  barfull: {
    backgroundColor: 'black',
    height: 3,
    width: 25,
  },
  menucontainer: {
    height: 300,
    width: '70%',
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 20,
    elevation: 5,
    shadowColor: 'rgba(0,0,0,0.7)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    position: 'relative',
    top: -10,
    right: -10,
    overflow: 'hidden',
  },
  menuInnerContainer: {
    height: '100%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.7)',
    position: 'relative',
    top: -4,
    right: -6,
    backgroundColor: '#232222',
    borderRadius: 10,
  },
  menuIconContainer: {
    // borderWidth: 1,
    borderRadius: 100,
    // borderColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 20,
    // position: 'absolute',
    // top:2,
    // right: 2,
  },
  menuIconInnerContainer: {
    // position: 'relative',
    elevation: 10,
    shadowColor: 'gray',
    borderColor: '#232222',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderWidth: 1,
    borderRadius: 100,
    height: 50,
    width: 50,
    backgroundColor: '#232222',
  },
});

//make this component available to the app
export default withTheme(Header);
