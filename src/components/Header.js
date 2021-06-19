import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {withTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import {FONTS} from '../theme/fonts';

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
        duration: 200,
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
        duration: 200,
        toValue: 0,
        useNativeDriver: false,
      }),
    ]).start(e => {});
  };

  return (
    <View>
      <ScrollView>
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
            <TouchableOpacity style={[styles.selectedMenu]}>
              <Text style={[styles.menuItemText, styles.selectedMenuText]}>
                Menu 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Menu 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Menu 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Menu 2</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
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
                // eslint-disable-next-line react-native/no-inline-styles
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
                }}
              />
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
                }}
              />
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
    paddingHorizontal: 15,
    paddingVertical: 10,
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
    // height: 300,
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
    paddingTop: 80,
    paddingHorizontal: 15,
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
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: '#232222',
    elevation: 10,
    shadowColor: 'gray',
    borderTopColor: '#292828',
    borderLeftColor: '#292828',
    borderRightColor: 'rgba(0,0,0,0.5)',
    borderBottomColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderRadius: 21,
  },
  menuItemText: {
    color: 'gray',
    fontFamily: FONTS.ArefRuqaaBold,
    fontSize: 16,
  },
  menuItem: {
    borderWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#232222',
    elevation: 5,
    shadowColor: 'gray',
    borderTopColor: '#292828',
    borderLeftColor: '#292828',
    borderRightColor: 'rgba(0,0,0,0.5)',
    borderBottomColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderRadius: 20,
    marginBottom: 15,
    marginRight: 15,
  },
  selectedMenu: {
    borderWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#232222',
    elevation: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    borderTopColor: 'rgba(0,0,0,0.5)',
    borderLeftColor: 'rgba(0,0,0,0.5)',
    borderRightColor: '#292828',
    borderBottomColor: '#292828',
    shadowOffset: {
      width: 100,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderRadius: 20,
    marginBottom: 15,
    marginRight: 15,
  },
});

//make this component available to the app
export default withTheme(Header);
