import {Dimensions, StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 110,
    height: '100%'
  },
  formContainer: {
    justifyContent: 'center'
  },
  header: {
    color: MyThemme.neutral_black,
    fontSize: 14,
    fontFamily: 'RedHatDisplay-SemiBold',
    textAlign: 'center',
    marginTop: 45
  },
  message1: {
    color: MyThemme.neutral_black,
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'RedHatDisplay-Bold'
  },
  message2: {
    color: MyThemme.neutral_black,
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'RedHatDisplay-SemiBold'
  },
  tryAgain: {
    paddingHorizontal: 15,
    marginTop: (windowHeight-600),
    
  },
  tryAgainAndroid: {
    marginTop: (windowHeight-591),
  },
});
