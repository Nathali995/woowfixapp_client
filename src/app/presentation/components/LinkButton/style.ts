import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
  rectangle: {
    flex: 1,
    borderColor: MyThemme.woowfix_primary,
    borderRadius: 30,
    paddingVertical: 10,
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'center',
    textAlignVertical: 'center',
    height: 60,

  },
  disabledBackground: {
    backgroundColor: MyThemme.neutral_white,
    color:MyThemme.neutral_gray_medium,
  },
  label: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
    color: MyThemme.woowfix_primary,
  },
});
