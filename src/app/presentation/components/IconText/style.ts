import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables'

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  label: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
    fontFamily: MyThemme.font_family,
    marginLeft: 10,
  },
});
