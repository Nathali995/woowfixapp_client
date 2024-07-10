import {StyleSheet} from 'react-native'
import { MyThemme } from 'src/styles/_variables'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    marginHorizontal: 10,
    marginVertical: 8,
    paddingVertical: 8,
    borderColor: MyThemme.gray_2,
    borderWidth: 1,
    borderRadius: 15
  },
  buttonContainer: {
    backgroundColor: 'white',
    // borderWidth:0.2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowOffset: {width: -5, height: -4},
    shadowColor: '#000',
    shadowRadius: 16,
    shadowOpacity: 0.25,
    elevation: 20,
  },
})