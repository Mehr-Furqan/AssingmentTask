import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const cWidth = a => {
  return windowWidth * a;
};
export const cHight = a => {
  return windowHeight * a;
};
