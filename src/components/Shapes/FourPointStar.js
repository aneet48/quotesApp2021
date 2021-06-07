//import liraries
import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {COLORS} from '../../theme/colors';

const FourPointStar = ({type = 'm', color = null, delay = 100}) => {
  const sparkle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      sparkleFunction();
    }, delay);
  }, [sparkle]);

  const sparkleFunction = () => {
    Animated.sequence([
      Animated.timing(sparkle, {
        duration: 200,
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.timing(sparkle, {
        duration: 1000,
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(sparkle, {
        duration: 1000,
        toValue: 0,
        useNativeDriver: false,
      }),
    ]).start(e => {
      if (e.finished) {
        sparkleFunction();
      }
    });
  };

  const getShapeStyle = () => {
    let shapeStyle = styles.shape;
    if (color) {
      shapeStyle = {...shapeStyle, borderBottomColor: color};
    }
    if (type === 's') {
      return {...shapeStyle, ...styles.smallShape};
    }
    if (type === 'l') {
      return {...shapeStyle, ...styles.largeShape};
    }
    return shapeStyle;
  };

  return (
    <Animated.View style={{...styles.container, opacity: sparkle}}>
      <View style={[getShapeStyle()]}></View>
      <View style={[getShapeStyle(), styles.bottom]}></View>
      <View style={styles.rotateShape}>
        <View style={getShapeStyle()}></View>
        <View style={[getShapeStyle(), styles.bottom]}></View>
      </View>
    </Animated.View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  shape: {
    width: 0,
    height: 0,
    borderRightWidth: 3,
    borderRightColor: 'transparent',
    borderBottomWidth: 6,
    borderBottomColor: COLORS.gray1,
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  bottom: {
    transform: [{rotate: '180deg'}],
  },
  rotateShape: {
    position: 'absolute',
    transform: [{rotate: '90deg'}],
  },
  smallShape: {
    borderRightWidth: 1,
    borderBottomWidth: 4,
    borderLeftWidth: 1,
  },
  largeShape: {
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftWidth: 5,
  },
});

//make this component available to the app
export default FourPointStar;
