import {StyleSheet} from 'react-native'
import { MyThemme } from 'src/styles/_variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    height: '85%',
  },
  iconsContainer: {
    marginVertical: 25,
    flexDirection: 'row',
    width: '100%'
  },
  circleContainer: {
    width: '25%', 
    flexDirection: 'column',
    alignItems: 'center'
  },
  circleIcon: {
    height: 55, 
    width: 55, 
    borderRadius: 35, 
    backgroundColor: '#E6F3FF', 
    justifyContent: 'center',
    marginVertical: 10,
  },
  imageIcon: {
    borderRadius: 25,
    alignSelf: 'center',
  },
  titles: {
    fontFamily: MyThemme.font_family,
    fontSize: 16,
    fontWeight: '400',
  },
  paragraph: {
    fontFamily: MyThemme.font_family,
    fontSize: 14,
    fontWeight: '300',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  aboutUsContainer: {
    flexDirection: 'column',
    width: '100%'
  },
  enabledServiceContainer: {
    flexDirection: 'column',
    width: '100%'
  },
  worksDoneContainer: {
    flexDirection: 'column',
    width: '100%'
  },
  label: {
    fontFamily: MyThemme.font_family,
    fontSize: 10,
    fontWeight: '400',
    color: MyThemme.neutral_dark_gray,
    paddingVertical: 5,
  },
  serviceBag: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: MyThemme.woowfix_primary,
    alignSelf: 'flex-start',
    marginRight: 10,
    marginVertical: 10,
  },
  serviceBagContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  schedulesContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 5,
    paddingTop: 15,
    marginBottom: 20,
  },
  addressContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingTop: 15,
  },
  worksDoneCarouselContainer: {
    height: 'auto'
  },
  linkTextShowMore: {
    alignSelf: 'flex-start',
  },
  worksDoneAndShowMoreContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  commentsAndShowMoreContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  serviceEnabledContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  addressAndMapContainer: {
    flexDirection: 'column',
    width: '100%',
    height: 250,
    paddingVertical: 10,
  },
  actionButtonContainer: {
    height: '15%', 
    backgroundColor: 'white',
    padding: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    shadowOpacity: 0.2,
  },
})
