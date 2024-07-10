import Carousel from 'react-native-snap-carousel'
import { Dimensions, Image, View, Text } from 'react-native'
import { styles } from './style'
import { StarFull } from 'src/assets/svg'
import { MyThemme } from 'src/styles/_variables'
import SkelPlaceholder from '../SkelPlaceholder'
import { useEffect, useState } from 'react'

type Item = {
  id: number,
  image: string
  username: string,
  comment: string,
  rating: number,
}

type CommentsCarouselProps = {
  items: Item[]
}

export const CommentsCarousel = (props: CommentsCarouselProps) => {
  const { items } = props
  const { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT } = Dimensions.get('window')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderItem = ({ item, index }: { item: Item, index: number }) => {

    let rating = []
    for (let i = 0; i < item.rating; i++) {
      rating[i] = i
    }

    return (
      <View style={styles.item} key={index}>
        <View style={styles.imageAndRatingContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: item.image }}
              resizeMode={'cover'}
              style={styles.image}
              width={45}
              height={45}
            />
          </View>
          <View style={styles.ratingContainer}>
            {
              rating.map((i: number, v: number) => {
                return (
                  <View key={v}>
                    <StarFull
                      style={[styles.image, { marginLeft: 5 }]}
                      width={20}
                      height={20}
                      color={MyThemme.woowfix_primary}
                    />
                  </View>
                )
              })
            }
          </View>
        </View>
        <View style={styles.textsContainer}>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{item.username}</Text>
          </View>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      </View>
    )
  }

  return (
    isLoading ? (<SkelPlaceholder />) :
      (
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
  )
}
