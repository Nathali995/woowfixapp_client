import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: MyThemme.woowfix_primary,
    borderWidth: 1,
    borderRadius: 30,
    paddingTop: 18,
    height: 60
  },
  disabledBackground: {
    backgroundColor: MyThemme.neutral_gray_light,
    borderColor: MyThemme.neutral_gray_light,
  },
  label: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: MyThemme.font_family,
    fontWeight: '600',
    paddingHorizontal: 5
  },
  disabledLabel: {
    color: MyThemme.neutral_gray,
  },
});
