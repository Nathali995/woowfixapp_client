import Carousel from 'react-native-snap-carousel'
import {Dimensions, Image, View, TouchableHighlight} from 'react-native'
import {styles} from './style'

type Item = {
  id: number,
  image: string
}

type PublicityProps = {
  onPress?: () => void,
  items: Item[]
}

export const BasicCarousel = (props: PublicityProps) => {
  const {onPress, items} = props
  const {width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT} = Dimensions.get('window')
  const renderItem = ({item, index}: {item: Item, index: number}) => {
    return (
      <View style={styles.item} key={index}>
        <Image
          source={{uri: item.image}}
          resizeMode={'cover'}
          style={styles.image}
        />
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={items}
        renderItem={renderItem}
        sliderWidth={VIEWPORT_WIDTH/1.11}
        itemWidth={VIEWPORT_WIDTH/3}
        sliderHeight={VIEWPORT_HEIGHT}
        loop={true}
        autoplay={true}
        useScrollView={true}
        activeSlideAlignment={'start'}
      />
    </View>
  )
}
