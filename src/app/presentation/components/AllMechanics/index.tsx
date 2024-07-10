import { View, Text, TouchableHighlight, Image, Dimensions } from 'react-native'
import { styles, colors } from './style'
import ImageWraper from '../ImageWraper'
import { Star, PositionMarker } from 'src/assets/images'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useState, useRef, useEffect } from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SkelPlaceholder from '../SkelPlaceholder'

type Item = {
  id: number,
  mechanicsName: string,
  mechanicsRating: number,
  mechanicsPrice: number,
  mechanicDistance: number,
  brandsAvailable: string[],
  imageStack: any,
  repairing: string[],
}

type ImageItem = {
  image: string,
}

type AllMechanicsProps = {
  items: Item[]
}

export const AllMechanics = (props: AllMechanicsProps) => {


  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT } = Dimensions.get('window')
  const { items } = props
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderImageStack = ({ item, index }: { item: ImageItem, index: number }) => {
    return (
      <View style={styles.item} key={index}>
        <Image
          source={{ uri: item.image }}
          resizeMode={'cover'}
          style={styles.image}
        />
      </View>
    )
  }

  const renderItem = (item: Item, index: number) => {
    const nBrands = item.brandsAvailable.length
    const imageStack = item.imageStack
    const [indexState, setIndexState] = useState(0)
    const isCarousel = useRef(null)
    return (
      isLoading ? (<SkelPlaceholder key={index} />) :
        <View style={styles.item} key={index}>
          <TouchableHighlight onPress={() => navigation.navigate('mechanic-details', { id: item.id, mechanicsName: item.mechanicsName })} underlayColor={colors.underlayColor} >
            <View style={styles.carouselContainer}>
              <Carousel
                layout={'default'}
                data={imageStack}
                renderItem={renderImageStack}
                sliderWidth={VIEWPORT_WIDTH}
                itemWidth={VIEWPORT_WIDTH / 1.05}
                sliderHeight={VIEWPORT_HEIGHT}
                loop={true}
                autoplay={false}
                useScrollView={true}
                onSnapToItem={(index) => setIndexState(index)}
                onBeforeSnapToItem={(index) => setIndexState(index)}
                ref={isCarousel}
              />
              <Pagination
                dotsLength={imageStack.length}
                activeDotIndex={indexState}
                containerStyle={styles.paginationContainer}
                dotColor={colors.dotColor}
                dotStyle={styles.paginationDot}
                inactiveDotColor={colors.inactiveDotColor}
                inactiveDotOpacity={0.7}
                inactiveDotScale={0.9}
                carouselRef={isCarousel}
                tappableDots={true}
              />
              <View style={styles.mechanicsNameRatingContainer}>
                <View style={styles.mechanicsNameContainer}>
                  <Text>{item.mechanicsName}</Text>
                </View>
                <View style={styles.mechanicsRatingContainer}>
                  <Text style={styles.mechanicsRatingText}>{item.mechanicsRating.toFixed(2)}</Text>
                  <ImageWraper src={Star} height={15} width={15} opacity={0.5} />
                </View>
              </View>
              <View style={styles.brandsAvailableDistanceContainer}>
                <View style={styles.brandsAvailableContainer}>
                  <Text style={styles.brandsAvailableText}>
                    {
                      item.brandsAvailable.map((v, i) => {
                        return i + 1 !== nBrands ? v + ', ' : v;
                      })
                    }
                  </Text>
                </View>
                <View style={styles.mechanicDistanceContainer}>
                  <Text style={styles.mechanicDistanceText}>{`${item.mechanicDistance}km`}</Text>
                  <ImageWraper src={PositionMarker} height={18} width={18} opacity={0.5} />
                </View>
              </View>
              <View style={styles.mechanicsPriceAndRepairingContainer}>
                <Text style={styles.repairingText}>
                  {
                    item.repairing.map((v, i) => {
                      return i + 1 !== nBrands ? v + ', ' : v;
                    })
                  }
                </Text>
              </View>
              <View style={styles.mechanicsPriceContainer}>
                <Text>{`$${item.mechanicsPrice.toFixed(2)}`}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Todas las mecánicas</Text>
      <View style={styles.allMechanicsContainer}>
        {
          items.map((item, index) => {
            return renderItem(item, index);
          })
        }
      </View>
    </View>
  )

}