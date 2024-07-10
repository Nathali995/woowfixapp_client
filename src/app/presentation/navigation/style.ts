import {Platform, StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  itemLabel: {
    alignSelf: 'center',
    fontFamily: 'RedHatDisplay-SemiBold',
    fontSize: 12,
    color: MyThemme.woowfix_primary,
  },
  itemLabelMultiple: {
    fontFamily: 'RedHatDisplay-Bold', 
  },
  btnContainer: {
    borderBottomColor: MyThemme.neutral_gray_light, 
    borderBottomWidth: 1, 
    shadowColor: MyThemme.black_shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20
  },
  itemLabelDisabled: {
    color: MyThemme.neutral_gray,
    alignSelf: 'center',
    fontFamily: MyThemme.font_family,
    fontSize: 12,
  },
  headerTitleStyle: {
    fontFamily: MyThemme.font_family, 
    fontSize: 14,
    textAlign: 'center'
  },
  reviewButtonContainer: {
    flexDirection: 'column', 
    alignItems: 'center'
  },
  reviewText: {
    fontFamily: MyThemme.font_family, 
    fontSize: 10, 
    color: MyThemme.woowfix_primary,
  }
});
