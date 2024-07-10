import {Text, View} from 'react-native'
import {StarEmpty, StarFull} from 'src/assets/svg'
import {MyThemme} from 'src/styles/_variables'
import {styles} from './style'

type StarRatingLabelProps = {
  label: string
  starFullNumber: number
  starEmptyNumber: number
}
export default function StarRatingLabel(props: StarRatingLabelProps) {
  const {starFullNumber, starEmptyNumber, label} = props
  const getStarsFull = () => {
    let content = []
    for (let index = 0; index < starFullNumber; index++) {
      content.push(
        <StarFull width={16} height={16} color={MyThemme.woowfix_primary} />,
      )
    }

    return content
  }

  const getStarsEmpty = () => {
    let content = []
    for (let index = 0; index < starEmptyNumber; index++) {
      content.push(
        <StarEmpty width={16} height={16} color={MyThemme.woowfix_primary} />,
      )
    }

    return content
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {getStarsFull()}
        {getStarsEmpty()}
      </View>
      <Text style={styles.labelRating}>{label}</Text>
    </View>
  )
}
