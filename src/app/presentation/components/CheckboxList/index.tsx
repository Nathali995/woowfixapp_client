import {View, Text, Switch} from 'react-native'
import React from 'react'
import {styles} from './style'
import {MyThemme} from 'src/styles/_variables'
import Checkbox from '../Checkbox'
type SwitchEntity = {
  label: string
  value: number
}

type CheckboxListProps = {
  name: string
  labelText: string
  checkboxList: SwitchEntity[]
  onChange?: (value: any) => void
  formik?: any
  value?: any[]
  style?: any
  disabled?: boolean
}

export default function CheckboxList(props: CheckboxListProps) {
  const {
    name,
    labelText,
    checkboxList,
    value = [],
    disabled,
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

  const renderOption = (option: any, index: number) => {
    const {label, value} = option
    const isSelected = valueList.includes(value);
    return (
      <View style={styles.optionContainer} key={'checkbox_'+name+'_'+index}>
        <Checkbox
            name={'list'+index}
            labelText={label}
            isSquare={true}
            showFocus={false}
            disabled={disabled}
            checked={isSelected}
            onChange={newValue => onValueChange(newValue,value)}
            style={{backgroundColor: 'transparent'}}
          />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {labelText && <Text style={styles.label}>{labelText}</Text>}
      <View style={styles.listContainer}>
        {checkboxList.map((option, i) => {
          return renderOption(option, i)
        })}
      </View>
    </View>
  )
}
