import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  pressable: {
    paddingVertical: 5,
    flexDirection: 'row'
  },
  headerTitleStyle: {
    fontSize: 14,
    paddingVertical: 5,
    textAlign: 'center',
    fontFamily: 'RedHatDisplay-SemiBold',
    color: MyThemme.neutral_black
  },
  itemLabelMultiple: {
    fontFamily: 'RedHatDisplay-Bold',
    color: MyThemme.neutral_black
  },
  icon: {
    paddingTop: 4,
    paddingLeft: 3
  }
});
