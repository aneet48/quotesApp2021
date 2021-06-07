import * as React from 'react';

import { Text, View, StatusBar, Switch } from 'react-native';
import { withTheme } from 'styled-components/native';
import ThemeManager, { useTheme } from '../theme'


function HomeScreen(props) {
    const theme = useTheme()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: props.theme.background }}>
            <Text style={{ color: props.theme.text }}>Home!</Text>
            <Switch
                value={theme.mode === 'dark'}
                onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
            />
        </View>
    );
}

export default withTheme(HomeScreen)