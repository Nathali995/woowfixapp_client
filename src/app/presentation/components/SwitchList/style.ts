import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
    width: '92%',
  },
  optionContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  label: {
    fontSize: 16,
    color: MyThemme.input_text,
    fontFamily: MyThemme.font_family,
    fontWeight: '400'
  },
})
