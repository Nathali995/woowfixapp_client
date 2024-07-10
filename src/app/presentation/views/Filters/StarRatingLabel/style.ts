import {StyleSheet} from 'react-native'
import {MyThemme} from 'src/styles/_variables'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  labelRating: {
    flex: 1,
    color: MyThemme.input_text,
    fontSize: 12,
    fontWeight: '400'
  },
})
