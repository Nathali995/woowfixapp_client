import React from 'react'
import {Text, View} from 'react-native'
import {styles} from './style'
import ImageWraper from '../ImageWraper'
import { Star } from 'src/assets/images'

type RatingBadgeProps = {
  rating: number,
  badgeColor?: string
}

function RatingBadge(props: RatingBadgeProps) {

  const {rating, badgeColor} = props

  return (
    <View style={styles({badgeColor}).container}>
      <ImageWraper src={Star} height={15} width={15} opacity={0.5} />
      <Text style={styles({badgeColor}).labelText}>{rating.toFixed(2)}</Text>
    </View>
  )
}

export default RatingBadge
