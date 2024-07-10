

import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

  image: {
    height: 130,
    width: 'auto',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  item: {
    paddingBottom: 15,
    borderRadius: 15,
    borderWidth: 0.2,
    borderColor: 'gray',
    alignSelf: 'flex-start',
  },
  container: {
    backgroundColor: '#fff',
    marginTop: 15,
  },
  carouselContainer: {
    marginTop: 20
  },
  topMechanicsContainer: {
    flexDirection: 'column',
  },
  mechanicsRatingContainer: {
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 55, 
    right: 10
  },
  mechanicsNamePriceContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 10, 
    paddingVertical: 10,
  },
  mechanicsNameContainer: {
    width: '50%',
  },
  mechanicsPriceContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },
  brandsAvailableContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 10,
  },
  brandsAvailableText: {
    fontSize: 10,
  },
})
