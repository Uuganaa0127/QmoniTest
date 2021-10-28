import {DefaultTheme} from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    loaderBackground: '#fff',
    containerBackground: '#fff',
    loader: require('../assets/images/logo.png'),
  },
};
