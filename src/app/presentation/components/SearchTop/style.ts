import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

export const styles = StyleSheet.create({
  input: {
    borderRadius: 25,
    backgroundColor: MyThemme.neutral_gray_light,
    paddingHorizontal: 35,
    height: 35,
    marginTop: 8,
  },
  container: {
    width: 230,
    alignItems: 'stretch', 
    justifyContent: 'center',
  }
});
