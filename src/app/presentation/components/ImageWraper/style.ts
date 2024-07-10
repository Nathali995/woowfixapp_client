import {StyleSheet} from 'react-native';

export const styles = ({width, height}: {width?: number; height?: number}) =>
  StyleSheet.create({
    imageContainer: {
      height,
      width,
    },
    imageHeight: {
      height: '100%',
    },
  });
