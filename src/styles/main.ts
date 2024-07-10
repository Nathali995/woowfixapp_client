import { StyleSheet } from 'react-native'
import { MyThemme } from 'src/styles/_variables'

export const mainStyles = StyleSheet.create({
  container: {
    backgroundColor: MyThemme.woowfix_background_1,
    flex: 1,
  },
  roundedButton: {
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: '#1e90ff',
    height: 40,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textError: {
    fontFamily: MyThemme.font_family,
    color: MyThemme.alert_error,
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 5,
    marginTop:2
  },
  textLoginLike: {
    alignSelf: 'center',
    color: 'black',
    fontFamily: MyThemme.font_family,
    fontSize: 12,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  input: {
    color: MyThemme.input_text,
    backgroundColor: MyThemme.neutral_gray_light,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    borderRadius: 5,
    fontSize: 12,
    height: 40,
    fontFamily: MyThemme.font_family,
  },
  inputError: {
    borderColor: MyThemme.alert_error_light,
    borderWidth: 1,
    marginBottom: 5,
  },
  inputFocused: {
    borderColor: MyThemme.blue_1,
    borderWidth: 1,
  },
})
