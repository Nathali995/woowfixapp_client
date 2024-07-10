import {StyleSheet} from 'react-native'
import {MyThemme} from 'src/styles/_variables'

export const styles = StyleSheet.create({
  container1:{
    marginBottom: 10,
  },
  container: {
    height: 40,
  },
  containerPhone: {
    flexDirection: 'row',
    flex: 1
  },
  label: {
    fontSize: 12,
    marginBottom: 10,
    color: MyThemme.input_text,
    fontWeight: 'bold',
    fontFamily: MyThemme.font_family,
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
  error: {
    fontFamily: MyThemme.font_family,
    color: MyThemme.alert_error,
    fontSize: 11,
    paddingHorizontal: 8,
    marginBottom: 10,
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
  eyeIcon: {
    padding: 8,
    position: 'absolute',
    marginTop: 0,
    alignSelf: 'flex-end',
  },
  prefixPhone:{
    width: '30%',
    paddingVertical: 5,
    marginRight: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  prefixPhoneText:{
    fontSize: 12,
    color: MyThemme.input_text,
    fontWeight: '400',
    fontFamily: MyThemme.font_family,
    alignSelf: 'center',
  },
  inputPhone:{
    width: '70%'
  },
  searchIcon: {
    padding: 8,
    position: 'absolute',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
})

