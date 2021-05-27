import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarIconSettings = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
        } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
        }else if (route.name === 'Liked') {
            iconName = focused ? 'heart' : 'heart-outline';
        }else if (route.name === 'Saved') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    },
});

const styles = StyleSheet.create({

});

export default TabBarIconSettings;
