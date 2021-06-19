import {DefaultTheme} from '@react-navigation/native';
import { COLORS } from './colors';

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'pink',
    secondary:  COLORS.matteBlack,
    backgroundColor: 'white',
    tabActiveTintColor:COLORS.matteBlack,
    tabInactiveTintColor:COLORS.gray1,
  },
};

export default light;
