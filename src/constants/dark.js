import {DarkTheme} from '@react-navigation/native';

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#121217',
    loaderBackground: '#121217',
    containerBackground: 'black',
    loader: require('../assets/images/logo.png'),
  },
};
