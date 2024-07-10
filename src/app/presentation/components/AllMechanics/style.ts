import {StyleSheet} from 'react-native'
import { MyThemme } from 'src/styles/_variables'

export const colors = {
  underlayColor: 'transparent',
  dotColor: 'white',
  inactiveDotColor: 'white',


  itemBackgroundColor: '#E6F3FF',
  globalDayHourBackgroundColor: '#4B88BF',
  backgroundColor: 'white'  
}

export const styles = StyleSheet.create({

  image: {
    height: 260,
    width: 'auto',
    borderRadius: 15,
  },
  item: {
    paddingVertical: 10,
    width: '95%'
  },
  container: {
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 9,
    height: 9,
    borderRadius: 4,
  },
  allMechanicsContainer: {
    height: 'auto',
  },
  carouselContainer: {
    flexDirection: 'column',
  },
  mechanicsNameRatingContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 10, 
    paddingVertical: 10,
  },
  mechanicsNameContainer: {
    width: '50%',
  },
  mechanicsRatingContainer: {
    flexDirection: 'row-reverse', 
    width: '50%',
  },
  mechanicsRatingText: {
    paddingHorizontal: 5, 
    fontSize: 12,
  },
  brandsAvailableDistanceContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 10,
  },
  mechanicsPriceAndRepairingContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 10,
  },
  mechanicsPriceContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 10, 
    paddingVertical: 5
  },
  repairingText: {
    fontFamily: MyThemme.font_family,
    fontSize: 12,
    flexWrap: 'wrap'
  },
  mechanicDistanceText: {
    paddingHorizontal: 3, 
    fontSize: 12,
  },
  mechanicDistanceContainer: {
    flexDirection: 'row-reverse', 
    width: '50%',
  },
  brandsAvailableContainer: {
    width: '50%',
  },
  brandsAvailableText: {
    fontFamily: MyThemme.font_family,
    fontSize: 12,
    flexWrap: 'wrap'
  }
})
