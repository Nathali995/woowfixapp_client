import { View, Text, Dimensions, Image, TouchableHighlight } from 'react-native'
import { styles } from './style'
import Carousel from 'react-native-snap-carousel'
import RatingBadge from '../RatingBadge'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SkelPlaceholder from '../SkelPlaceholder'
import React, { useState, useEffect } from 'react';

type Item = {
  id: number,
  mechanicsName: string,
  mechanicsRating: number,
  mechanicsPrice: number,
  brandsAvailable: string[],
  mainImage: string,
}

type TopMechanicsProps = {
  onPress: () => void,
  items: Item[]
}

export const TopMechanics = (props: TopMechanicsProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { items } = props
  const { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT } = Dimensions.get('window')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderItem = ({ item, index }: { item: Item, index: number }) => {
    const nBrands = item.brandsAvailable.length
    return (
      isLoading ? (<SkelPlaceholder />) :
        <View style={styles.item} key={index}>

          <TouchableHighlight onPress={() => navigation.navigate('mechanic-details', { id: item.id, mechanicsName: item.mechanicsName })} underlayColor={'transparent'} >
            <View style={styles.topMechanicsContainer}>
              <Image
                source={{ uri: item.mainImage }}
                resizeMode={'cover'}
                style={styles.image}
              />
              <View style={styles.mechanicsRatingContainer}>
                <RatingBadge rating={item.mechanicsRating} />
              </View>
              <View style={styles.mechanicsNamePriceContainer}>
                <View style={styles.mechanicsNameContainer}>
                  <Text>{item.mechanicsName}</Text>
                </View>
                <View style={styles.mechanicsPriceContainer}>
                  <Text>{`$${item.mechanicsPrice.toFixed(2)}`}</Text>
                </View>
              </View>
              <View style={styles.brandsAvailableContainer}>
                <Text style={styles.brandsAvailableText}>
                  {
                    item.brandsAvailable.map((v, i) => {
                      return i + 1 !== nBrands ? v + ', ' : v;
                    })
                  }
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Las mejores mecánicas a tu alrededor</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          layout={'default'}
          data={items}
          renderItem={renderItem}
          sliderWidth={VIEWPORT_WIDTH}
          itemWidth={VIEWPORT_WIDTH / 1.5}
          sliderHeight={VIEWPORT_HEIGHT}
          loop={true}
          autoplay={false}
          useScrollView={true}
        />
      </View>
    </View>
  )
}