import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
  rectangle: {
    alignSelf: 'auto'
  },
  disabledBackground: {
    backgroundColor: MyThemme.neutral_white,
    color: MyThemme.neutral_gray_medium,
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: MyThemme.font_family,
    textDecorationLine: 'underline'
  },
});
