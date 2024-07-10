import { StyleSheet } from "react-native";
import { MyThemme } from "src/styles/_variables";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: MyThemme.input_text,
    fontWeight: '400',
    fontFamily: MyThemme.font_family,
  },
  labelSlider:{backgroundColor: 'transparent'},
  labelTextSlider:{
    fontSize: 16,
    color: MyThemme.input_text,
    fontWeight: '400',
    fontFamily: MyThemme.font_family,
  },
  track: {
    backgroundColor: MyThemme.woowfix_primary,
    borderWidth: 3,
    borderColor: '#D9D9D9',
  },
  selectedTrack: {
    backgroundColor: MyThemme.woowfix_primary,
    borderWidth: 3,
    borderColor: MyThemme.woowfix_primary,
  },
})