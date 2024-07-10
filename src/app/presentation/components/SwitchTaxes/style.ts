import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
    width: '92%',
  },
  label: {
    fontSize: 16,
    paddingLeft: 10,
    color: MyThemme.neutral_dark_gray,
    fontFamily: MyThemme.font_family,
  },
});
