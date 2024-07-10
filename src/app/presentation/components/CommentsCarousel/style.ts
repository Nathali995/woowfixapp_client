import {StyleSheet} from 'react-native'
import { MyThemme } from 'src/styles/_variables'

export const styles = StyleSheet.create({

  image: {
    alignSelf: 'center',
  },
  item: {
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
    borderWidth: 0.17,
    borderColor: MyThemme.neutral_gray,
    maxHeight: 185
  },
  container: {
    backgroundColor: MyThemme.neutral_white,
    paddingVertical: 20,
  },
  imageAndRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileImageContainer: {

  },
  usernameContainer: { 
    flexDirection: 'column',
    paddingVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  carouselContainer: {
    marginTop: 0
  },
  textsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: MyThemme.font_family,
    color: MyThemme.neutral_black
  },
  comment: {
    fontSize: 14,
    fontFamily: MyThemme.font_family,
    color: MyThemme.neutral_black
  }
})
