import {StyleSheet} from 'react-native'
import { MyThemme } from 'src/styles/_variables'

export const colors = {
  underlayColor: 'transparent',
  itemBackgroundColor: '#E6F3FF',
  globalDayHourBackgroundColor: '#4B88BF',
  backgroundColor: MyThemme.neutral_white,
  textColorGray: 'gray', 
}

export const styles = StyleSheet.create({

  image: {
    borderRadius: 25,
    alignSelf: 'center',
  },
  item: {
    paddingVertical: 15,
    backgroundColor: colors.itemBackgroundColor,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: colors.backgroundColor,
  },
  nameAndAddressContainer: {
    flexDirection: 'row',
  },
  mechanicsLogoContainer: {
    width: '15%',
  },
  mechanicsAddressContainer: {
    width: '70%', 
    flexDirection: 'column', 
    paddingHorizontal: 10,
  },
  mechanicsAddressText: {
    fontSize: 10,
  },
  circleGhostContainer: {
    width: '15%', 
    flexDirection: 'column',
  },
  circleGhost: {
    height: 45, 
    width: 45, 
    borderRadius: 25, 
    backgroundColor: colors.backgroundColor, 
    justifyContent: 'center',
  },
  globalDayHourContainer: {
    flexDirection: 'row', 
    backgroundColor: colors.globalDayHourBackgroundColor, 
    borderRadius: 8, 
    height: 35, 
    width: '100%',
    alignItems: 'center', 
    alignSelf: 'center',
    marginTop: 10,
  },
  timeContainer: {
    flexDirection: 'row', 
    width: '45%', 
    alignItems: 'center',
  },
  iconTime: {
    marginLeft: 10, 
    marginRight: 5,
  },
  textTime: {
    fontSize: 12,
  },
  separatorContainer: {
    width: '10%', 
    alignItems: 'center',
  },
  carouselContainer: {
    marginTop: 0
  },
  itemTitle: {
    marginVertical: 15,
  },
  bookingPendingText: {
    marginTop: 10,
  },
  bookingPayBtnContainer: {
    flex: 1,
    marginTop: 10,
    alignSelf: 'center',
  },
  bookingPayBtn: {
    width: 180,
    height: 40,
    paddingTop: 9,
  },
  bookingPayBtnText: {
    textAlign: 'center',
    alignSelf: 'center',
  },
})
