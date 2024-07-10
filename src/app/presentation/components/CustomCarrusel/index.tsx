import Carousel from 'react-native-snap-carousel'
import {Dimensions, Image, Text, View} from 'react-native'
import {styles} from './style'

type Item = {
  image: string
}
export const CustomCarousel = () => {
  const {width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT} =
    Dimensions.get('window')
  const items = [
    {
      image:
        'https://www.jasminsoftware.es/wp-content/uploads/2020/03/business-intelligence.jpg',
      local: true,
    },
    {
      image:
        'https://www.bytemaster.es/wp-content/uploads/2018/11/blog-business-intelligence-lo-que-nadie-te-esta-contando.jpg',
      local: true,
    },
    {
      image:
        'https://www.iebschool.com/blog/wp-content/uploads/2019/09/que-es-digital-business.jpg',
      local: true,
    },
  ]
  const renderItem = ({item, index}: {item: Item; index: number}) => {
    return (
      <View style={styles.item} key={index}>
        <Image
          source={{uri: item.image}}
          resizeMode={'cover'}
          style={styles.image}
        />
        <Text style={styles.title}>{'hola'}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={items}
        renderItem={renderItem}
        sliderWidth={VIEWPORT_WIDTH}
        itemWidth={VIEWPORT_WIDTH}
        sliderHeight={VIEWPORT_HEIGHT}
        loop={true}
        autoplay={true}
      />
    </View>
  )
}
