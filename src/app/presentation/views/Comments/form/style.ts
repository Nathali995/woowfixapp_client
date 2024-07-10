import {StyleSheet} from 'react-native'
import { MyThemme } from 'src/styles/_variables'

export const styles = StyleSheet.create({
  container: {
      padding: 20,
      height: '100%',
      backgroundColor: MyThemme.neutral_white,
  },
  ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
      justifyContent: 'space-around',
      alignSelf: 'stretch'

  },
  ratingText: {
      fontFamily: MyThemme.font_family,
      fontSize: 14,
      fontWeight: '400',
      color: MyThemme.neutral_black,
  },
  commentInput: {
      width: '100%',
      height: 163,
      borderWidth: 1,
      borderColor: MyThemme.neutral_gray_light,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor: MyThemme.neutral_gray_light
  },
  characterCount: {
      right: 20,
      bottom: 60,
      alignSelf: 'flex-end',
      color: MyThemme.neutral_black,
  },
  titleContainer: {
      alignSelf: 'flex-start',
      marginBottom: 5,
  },
  buttonContainer: {
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end'
  }
});