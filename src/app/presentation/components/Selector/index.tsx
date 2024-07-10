import React, {useState} from 'react'
import {TouchableHighlight, Text, ViewStyle, View} from 'react-native'
import {styles} from './style'
import {MyThemme} from 'src/styles/_variables'
import {mainStyles} from 'src/styles/main'
import SelectDropdown from 'react-native-select-dropdown'
import { ArrowDown } from 'src/assets/svg'

type SelectorProps = {
  name: string
  data: any
  label?: string
  placeholder?: string
  onSelect?: (value: any) => void
  disabled?: boolean
  styleButton?: ViewStyle
  formik?: any
  defaultValueByIndex?: number
  search?: boolean
}

export default function Selector(props: SelectorProps) {
  const {name, formik, label, onSelect, disabled, placeholder, defaultValueByIndex, search} = props
  const field = formik?.getFieldMeta(name)
  const inputError = field ? field.error : ''

  const onSelectItem = (selectedItem: any, index: number) => {
    if (field && formik) {
      formik.setFieldValue(name, selectedItem.value)
    }
    if (onSelect !== undefined) {
      onSelect(selectedItem.value)
    }
  }

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <SelectDropdown
        data={props.data}
        onSelect={(selectedItem, index) => {
          onSelectItem(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.label
        }}
        rowTextForSelection={(item, index) => {
          return item.label
        }}
        defaultValueByIndex={defaultValueByIndex}
        defaultButtonText={placeholder}
        disabled={disabled}
        search={search}
        dropdownIconPosition={'right'}
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonTextStyle}
        dropdownStyle={styles.dropdownStyle}
        dropdownOverlayColor={'transparent'}
        renderDropdownIcon={()=><ArrowDown
            width={16}
            height={16}
            color={MyThemme.woowfix_primary}></ArrowDown>}
      />
      {inputError && <Text style={mainStyles.textError}>{inputError}</Text>}
    </View>
  )
}
