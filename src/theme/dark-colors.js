import {DarkTheme} from '@react-navigation/native';
import {COLORS} from './colors';

const dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'blue',
    secondary: '#cccaca',
    background: COLORS.matteBlack,
    tabActiveTintColor: 'white',
    tabInactiveTintColor: 'gray',
  },
};

export default dark;
