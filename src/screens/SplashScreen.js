import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated, Image, FlatList} from 'react-native';
import {COLORS} from '../theme/colors';
import Peacock from '../assets/images/peacocklogo.png';
import {FONTS} from '../theme/fonts';
import FourPointStar from '../components/Shapes/FourPointStar';
import {sparkleData} from '../assets/constants/sparkles';

const SplashScreen = ({navigation}) => {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const [sparkles, setsparkles] = useState([]);
  useEffect(() => {
    fadeinFunction();
    setsparkles(sparkleData);
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [fadeIn]);

  const fadeinFunction = () => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.innerContainer, opacity: fadeIn}}>
        <View style={styles.logoimgContainer}>
          <Image source={Peacock} style={styles.logoImg} resizeMode="contain" />
          {sparkles.map((item, i) => {
            const {type, color, delay, top, right} = item;

            return (
              <View
                style={{...styles.sparklecontainer, top: top, right: right}}
                key={i}>
                <FourPointStar color={color} type={type} delay={delay} />
              </View>
            );
          })}
        </View>

        <Text style={styles.logoText}>Quotes</Text>
        <Text style={styles.footerText}>by arbites</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.matteBlack,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 50,
    fontFamily: FONTS.ArefRuqaaBold,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 18,
    color: COLORS.gray1,
  },
  logoImg: {
    height: 80,
    zIndex: 99999,
  },
  sparklecontainer: {
    position: 'absolute',
  },
  logoimgContainer: {
    position: 'relative',
    padding: 40,
    paddingBottom: 0,
  },
});

export default SplashScreen;
