import {View, Text, Switch} from 'react-native'
import React from 'react'
import {styles} from './style'
import {MyThemme} from 'src/styles/_variables'
type SwitchEntity = {
  label: string
  value: number
}

type SwitchListProps = {
  name: string
  labelText: string
  switchList: SwitchEntity[]
  onChange?: (value: any) => void
  formik?: any
  value?: any[]
  style?: any
  disabled?: boolean
  iconPosition?: 'left' | 'right'
}

export default function SwitchList(props: SwitchListProps) {
  const {
    name,
    labelText,
    switchList,
    value = [],
    disabled,
    iconPosition = 'right',
    formik,
    onChange,
  } = props

  const field = formik?.getFieldMeta(name)
  const valueList: any[] = field ? field.value : value

  const onValueChange = (selected: boolean, value: number) => {
    if (formik) {
      const newList = selected ? addServiceToList(value) : removeServiceToList(value)
      formik.setFieldValue(name, newList)
    }
  }

  const addServiceToList = (newValue: number) => {
    const newList = valueList
    const elementIndex = valueList.findIndex(item => item === newValue)
    if (elementIndex == -1) {
      newList.push(newValue)
    }
    return newList
  }
  const removeServiceToList = (newValue: number) => {
    return valueList.filter(item => item !== newValue)
  }

  const getSwitch = (valueService: number) => {
    const isSelected = valueList.includes(valueService);
    return (
      <Switch
        trackColor={{
          false: MyThemme.woowfix_background_1,
          true: MyThemme.woowfix_primary,
        }}
        thumbColor={MyThemme.neutral_white}
        ios_backgroundColor={MyThemme.neutral_gray_medium}
        onValueChange={value => onValueChange(value, valueService)}
        value={isSelected}
      />
    )
  }

  const renderOption = (option: any, index: number) => {
    const {label, value} = option
    return (
      <View style={styles.optionContainer} key={'switch_'+name+'_'+index}>
        {iconPosition === 'left' && (
          <View style={{flex: 1, marginLeft: 10}}>
            {getSwitch(value)}
          </View>
        )}

        <View style={{flex: 3}}>
          <Text style={styles.label}>{label}</Text>
        </View>

        {iconPosition === 'right' && (
          <View style={{flex: 1, marginRight: 10}}>
            {getSwitch(value)}
          </View>
        )}
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {labelText && <Text style={styles.label}>{labelText}</Text>}
      {switchList.map((option, i) => {
        return renderOption(option, i)
      })}
    </View>
  )
}
