import {StyleSheet} from 'react-native'
import { MyThemme } from 'src/styles/_variables'

export const colors = {
  tabBarInactiveColor: 'gray', 
  tabBarActiveColor: 'black',
  tabBarIndicatorColor: 'black',
  backgroundColor: 'white'  
}

export const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
  },
  item: {
    marginVertical: 15,
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 35,
    borderWidth: 0.17,
    borderColor: MyThemme.neutral_gray,
    maxHeight: 185
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
  },
  tabBar: {
    backgroundColor: colors.backgroundColor,
    width: 'auto',
    borderColor: 'red',
  },
  tabViewContainer: {
    flex: 1, 
    paddingHorizontal: 5, 
    backgroundColor: colors.backgroundColor
  },
  tabView: {
    backgroundColor: colors.backgroundColor, 
    paddingHorizontal: 10,
  },
  tabBarLabel: {
    textTransform: 'capitalize',
  },
  indicatorStyle: {
    backgroundColor: colors.tabBarIndicatorColor,
    width: '17%',
    borderColor: 'red',
  },
  scrollView: {
    paddingHorizontal: 20,
  },
})