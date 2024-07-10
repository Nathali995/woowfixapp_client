import {Text, View} from 'react-native'

import {MyThemme} from 'src/styles/_variables'
import {styles} from './style'
import {mainStyles} from 'src/styles/main'
import Slider from 'react-native-a11y-slider'

type SliderInputProps = {
  name: string
  name2?: string
  labelText: string
  onChange?: (value: any[]) => void
  formik?: any
  value?: number
  value2?: number
  style?: any
  disabled?: boolean
  isRange?: boolean
  minimumValue?: number
  maximumValue?: number
  showMarkerLabel?: boolean
}
export default function SliderInput(props: SliderInputProps) {
  const {
    isRange = false,
    name,
    name2,
    labelText,
    onChange,
    style,
    formik,
    minimumValue = 0,
    maximumValue = 100,
    showMarkerLabel = true,
    value,
    value2
  } = props

  const getInputValue = (name?: string, value?: number) =>{
    const field = formik?.getFieldMeta(name)
    const inputValue = field ? field.value : value
    return inputValue;
  }

  const onChangeSlider = (values: any[]) => {
    if (formik) {
      if (isRange) {
        formik.setFieldValue(name, values[0])
        formik.setFieldValue(name2, values[1])
      } else{
        formik.setFieldValue(name, values[0])
      }
    }
   
    if (onChange !== undefined) {
      onChange(values)
    }
  }

  const getRangeSlider = () => {
    const inputValue = getInputValue(name, value)
    const inputValue2 = getInputValue(name2, value2)
    return (
      <Slider
        min={minimumValue}
        max={maximumValue}
        values={[inputValue, inputValue2]}
        increment={5}
        showLabel={showMarkerLabel}
        markerColor={MyThemme.woowfix_primary}
        labelStyle={styles.labelSlider}
        labelTextStyle={styles.labelTextSlider}
        trackStyle={styles.track}
        selectedTrackStyle={styles.selectedTrack}
        onChange={onChangeSlider}
      />
    )
  }

  const getSlider = () => {
    const inputValue = getInputValue(name, value)
    return (
      <Slider
        min={minimumValue}
        max={maximumValue}
        values={[inputValue]}
        increment={1}
        showLabel={showMarkerLabel}
        markerColor={MyThemme.woowfix_primary}
        labelStyle={styles.labelSlider}
        labelTextStyle={styles.labelTextSlider}
        trackStyle={styles.track}
        selectedTrackStyle={styles.selectedTrack}
        onChange={onChangeSlider}
      />
    )
  }



  return (
    <View style={styles.container}>
      {labelText && <Text style={styles.label}>{labelText}</Text>}
      {isRange ? getRangeSlider() : getSlider()}
    </View>
  )
}
