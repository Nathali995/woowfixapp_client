import Carousel from 'react-native-snap-carousel'
import { Dimensions, Image, View, TouchableHighlight } from 'react-native'
import { styles } from './style'
import React, { useState, useEffect } from 'react';
import SkelPlaceholder from '../SkelPlaceholder'

type Item = {
  id: number,
  image: string
}

type PublicityProps = {
  onPress: () => void,
  items: Item[]
}

export const PublicityCarousel = (props: PublicityProps) => {
  const { onPress, items } = props
  const { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT } = Dimensions.get('window')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderItem = ({ item, index }: { item: Item, index: number }) => {
    return (
      isLoading ? (<SkelPlaceholder />) :
        <View style={styles.item} key={index}>
          <TouchableHighlight onPress={onPress} underlayColor={'transparent'} >
            <Image
              source={{ uri: item.image }}
              resizeMode={'cover'}
              style={styles.image}
            />
          </TouchableHighlight>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={items}
        renderItem={renderItem}
        sliderWidth={VIEWPORT_WIDTH}
        itemWidth={VIEWPORT_WIDTH}
        sliderHeight={VIEWPORT_HEIGHT}
        loop={true}
        autoplay={true}
        useScrollView={true}
      />
    </View>
  )
}
