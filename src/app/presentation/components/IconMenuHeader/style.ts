import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';


export const styles = StyleSheet.create({
  pressable: {
    marginLeft: 20,
    alignItems: 'center'
  },
  text: {
    fontFamily: MyThemme.font_family,
    fontSize: 10,
    fontWeight: '400',
  }
});
