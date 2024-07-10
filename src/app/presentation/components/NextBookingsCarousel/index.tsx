import Carousel from 'react-native-snap-carousel'
import { Dimensions, Image, View, Text, TouchableHighlight } from 'react-native'
import { styles, colors } from './style'
import { Ghost as GhostImg, IconCalendar, Alarm } from 'src/assets/svg'
import { BOOKING_STATUS } from 'src/app/infrastructure/config/constants'
import ActionButton from '../ActionButton'
import { MyThemme } from 'src/styles/_variables'
import React, { useState, useEffect } from 'react';
import SkelPlaceholder from '../SkelPlaceholder'

type Item = {
  id: number,
  mechanicsLogo: string
  mechanicsName: string,
  mechanicsAddress: string,
  bookingDay: string,
  bookingHour: string,
  bookingStatus: string,
}

type NextBookingsProps = {
  onPress: () => void,
  items: Item[]
}

export const NextBookingsCarousel = (props: NextBookingsProps) => {
  const { onPress, items } = props
  const { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT } = Dimensions.get('window')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderItem = ({ item, index }: { item: Item, index: number }) => {

    let globalDayHourBackgroundColor = 'transparent';
    let iconsColor = colors.textColorGray;
    let textTime = colors.textColorGray;

    if (item.bookingStatus != BOOKING_STATUS.PENDING) {
      globalDayHourBackgroundColor = colors.globalDayHourBackgroundColor;
      iconsColor = MyThemme.neutral_white;
      textTime = MyThemme.neutral_white;
    }

    return (
      isLoading ? (<SkelPlaceholder />) :
        <>
          <Text style={styles.itemTitle}>{item.bookingStatus == BOOKING_STATUS.PAID ? 'Próxima cita' : 'Reserva de cita'}</Text>
          <View style={styles.item} key={index}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.underlayColor} >
              <View>
                <View style={styles.nameAndAddressContainer}>
                  <View style={styles.mechanicsLogoContainer}>
                    <Image
                      source={{ uri: item.mechanicsLogo }}
                      resizeMode={'cover'}
                      style={styles.image}
                      width={45}
                      height={45}
                    />
                  </View>
                  <View style={styles.mechanicsAddressContainer}>
                    <Text>{item.mechanicsName}</Text>
                    <Text style={styles.mechanicsAddressText}>{item.mechanicsAddress}</Text>
                  </View>
                  {
                    item.bookingStatus == BOOKING_STATUS.PAID ?
                      (
                        <View style={styles.circleGhostContainer}>
                          <View style={styles.circleGhost}>
                            <GhostImg
                              style={styles.image}
                              width={24}
                              height={24}
                            />
                          </View>
                        </View>
                      ) : (<></>)
                  }
                </View>
                {
                  item.bookingStatus == BOOKING_STATUS.PENDING ?
                    (
                      <View style={styles.bookingPendingText}>
                        <Text>Tienes una reserva de cita, te notificaremos cuando se encuentre aceptada.</Text>
                      </View>
                    ) : item.bookingStatus == BOOKING_STATUS.CONFIRMED ?
                      (
                        <View style={styles.bookingPendingText}>
                          <Text>Tu reserva fue aceptada por la mecánica.</Text>
                        </View>
                      ) : (<></>)
                }
                {
                  item.bookingStatus == BOOKING_STATUS.PENDING || item.bookingStatus == BOOKING_STATUS.PAID ?
                    (
                      <View style={[styles.globalDayHourContainer, { backgroundColor: globalDayHourBackgroundColor }]}>
                        <View style={styles.timeContainer}>
                          <IconCalendar style={styles.iconTime} color={iconsColor} width={20} height={20} />
                          <Text style={[styles.textTime, { color: textTime }]}>{item.bookingDay}</Text>
                        </View>
                        <View style={styles.separatorContainer}>
                          <Text style={[styles.textTime, { color: textTime }]}>|</Text>
                        </View>
                        <View style={styles.timeContainer}>
                          <Alarm style={styles.iconTime} color={iconsColor} width={20} height={20} />
                          <Text style={[styles.textTime, { color: textTime }]}>{item.bookingHour}</Text>
                        </View>
                      </View>
                    ) : item.bookingStatus == BOOKING_STATUS.CONFIRMED ? (
                      <View style={styles.bookingPayBtnContainer}>
                        <ActionButton
                          label={'Pagar cita'}
                          colorText={MyThemme.neutral_white}
                          disabled={false}
                          onPress={() => { console.log('Pagando...') }}
                          style={styles.bookingPayBtn}
                          textStyle={styles.bookingPayBtnText}
                        />
                      </View>
                    ) : (<></>)
                }
              </View>
            </TouchableHighlight>
          </View>
        </>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          layout={'default'}
          data={items}
          renderItem={renderItem}
          sliderWidth={VIEWPORT_WIDTH}
          itemWidth={VIEWPORT_WIDTH / 1.2}
          sliderHeight={VIEWPORT_HEIGHT}
          loop={true}
          autoplay={false}
          useScrollView={true}
        />
      </View>
    </View>
  )
}
