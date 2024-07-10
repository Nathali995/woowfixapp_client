import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
    container:{
        marginBottom: 10
    },
    label: {
        fontSize: 12,
        marginBottom: 10,
        color: MyThemme.input_text,
        fontWeight: 'bold',
        fontFamily: MyThemme.font_family,
      },
      button:{
        width: '100%',
        height: 40,
        color: MyThemme.input_text,
        borderRadius: 5,
        backgroundColor: MyThemme.neutral_gray_light,
      },
      buttonTextStyle:{
        color: MyThemme.placeholder_text,
        fontFamily: MyThemme.font_family,
        fontSize: 14,
        fontWeight: '400',
      },
      dropdownStyle:{
        borderRadius: 5,
        backgroundColor: MyThemme.neutral_gray_light,
      }
});