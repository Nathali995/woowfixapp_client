import {Text, TouchableOpacity, View} from 'react-native'

import {MyThemme} from 'src/styles/_variables'
import {styles} from './style'
import {mainStyles} from 'src/styles/main'
import {useState} from 'react'
import {CheckBox, CircleBox, CircleBoxBlank, StarEmpty, StarFull} from 'src/assets/svg'

type RadioButtonListProps = {
  name: string
  labelText: string
  radioList: any[]
  onChange?: (value: any) => void
  formik?: any
  value?: string
  style?: any
  disabled?: boolean
  iconPosition?: 'left' | 'right'
}

export default function RadioButtonList(props: RadioButtonListProps) {
  const {name, labelText, radioList, value, disabled, iconPosition = 'right', formik, onChange} = props

  const field = formik?.getFieldMeta(name)
  const inputValue = field ? field.value : value
  const [selected, setSelected] = useState(inputValue)

  const onPress = (newValue: any) => {
    setSelected(newValue)
    if (field && formik) {
      formik.setFieldValue(name, newValue)
    }
    if (onChange !== undefined) {
      onChange(newValue)
    }
  }
  const getRadioButtonIcon = (value: any, index: number) => {
    return (
      <TouchableOpacity
        id={`radio_buton_${index}`}
        style={[{paddingHorizontal: 10}]}
        onPress={() => onPress(value)}
        disabled={disabled}>
        {selected === value ? (
          <CircleBox width={16} height={16} color={MyThemme.woowfix_primary} />
        ) : (
          <CircleBoxBlank
            width={16}
            height={16}
            color={MyThemme.woowfix_primary}
          />
        )}
      </TouchableOpacity>
    )
  }

  const renderOption = (option: any, index: number) => {
    const {labelComponent, label, value} = option
    return (
      <View style={{flexDirection: 'row', marginBottom: 10, marginHorizontal: 10,}}>
        {iconPosition === 'left' && (
          <View style={{flex: 1, marginLeft:10}}>{getRadioButtonIcon(value, index)}</View>
        )}

        <View style={{flex: 3,}}>
          {labelComponent}
          {!labelComponent && label && <Text>{label}</Text>}
        </View>

        {iconPosition === 'right' && (
          <View style={{flex: 1, marginRight:10}}>{getRadioButtonIcon(value, index)}</View>
        )}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {labelText && <Text style={styles.label}>{labelText}</Text>}
      {radioList.map((option, i) => {
        return renderOption(option, i)
      })}
    </View>
  )
}
