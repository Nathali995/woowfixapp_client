import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 20,
    flex: 1,
  },
  listContainer: {
    marginBottom: 10,
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    alignContent: 'flex-start',
    maxWidth: 500,
    rowGap: 5,
    columnGap: 5
  },
  optionContainer: {
    flexDirection: 'row',
    width: 105
  },
  label: {
    fontSize: 16,
    color: MyThemme.input_text,
    fontFamily: MyThemme.font_family,
    fontWeight: '400'
  },
})
