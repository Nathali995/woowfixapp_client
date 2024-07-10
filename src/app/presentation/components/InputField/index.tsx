import {View, Text, TextInput, TouchableOpacity, ViewStyle} from 'react-native'
import React, {useState} from 'react'
import {styles} from './style'
import {Eye, Flag593, NoEye, SearchIcon} from 'src/assets/svg'
import {MyThemme} from 'src/styles/_variables'
import {mainStyles} from 'src/styles/main'

type InputFieldProps = {
  tag: string
  label?: string
  onChangeText?: (value: string) => void
  formik?: any
  style?: ViewStyle
  value?: string
  placeholder?: string
  textError?: string
  keyboardType?: 'default' | 'numeric' | 'decimal-pad' | 'phone-pad'
  maxLength?: number
  secureTextEntry?: boolean
  touched?: boolean
  isPhoneType?: boolean
  searchIcon?: boolean
}

export default function InputField(props: InputFieldProps) {
  const {
    tag,
    label,
    value,
    placeholder,
    onChangeText,
    textError,
    keyboardType,
    maxLength,
    secureTextEntry,
    touched,
    formik,
    isPhoneType,
    searchIcon,
    style
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [changeState, setChangeState] = useState(false)
  const [showPassword, setShowPassword] = useState(secureTextEntry)

  const field = formik?.getFieldMeta(tag)
  const inputValue = field ? field.value : value
  const inputError = field ? field.error : textError

  const handleFocus = () => {
    setIsFocused(true)
  }

  const changeStateIcon = () => {
    setChangeState(!changeState)
    setShowPassword(!showPassword)
  }

  const lostFocus = () => {
    setIsFocused(false)
  }

  const onChange = (text: any) => {
    const newValue = text.replace(/\s/g, '')
    if (field && formik) {
      formik.setFieldValue(tag, newValue)
    }
    if (onChangeText !== undefined) {
      const newValueText = isPhoneType? '+593'+newValue : newValue;
      onChangeText(newValueText)
    }
  }

  return (
    <View style={styles.container1}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, isPhoneType && styles.containerPhone]}>
        {isPhoneType && (
          <View style={[ styles.input, styles.prefixPhone,]}>
           <View style={{alignSelf: 'flex-start'}}><Flag593
                width={34}
                height={34}></Flag593>
                </View>
            <Text style={styles.prefixPhoneText}>{'+593'}</Text>
          </View>
        )}
        <TextInput
          key={tag}
          style={[
            styles.input,
            style,
            isPhoneType && styles.inputPhone,
            isFocused && styles.inputFocused,
            inputError && styles.inputError,
          ]}
          onChangeText={onChange}
          value={inputValue}
          placeholder={placeholder}
          placeholderTextColor={MyThemme.neutral_dark_gray_placeholder}
          keyboardType={keyboardType}
          onFocus={handleFocus}
          onBlur={lostFocus}
          maxLength={maxLength}
          autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry={showPassword ?? false}
        />
        {secureTextEntry ? (
          <View style={styles.eyeIcon}>
            <TouchableOpacity onPress={changeStateIcon} style={{padding: 0}}>
              {changeState ? (
                <Eye
                  width={24}
                  height={24}
                  color={
                    inputError
                      ? MyThemme.alert_error
                      : MyThemme.neutral_dark_gray
                  }
                />
              ) : (
                <NoEye
                  width={24}
                  height={24}
                  color={
                    inputError
                      ? MyThemme.alert_error
                      : MyThemme.neutral_dark_gray
                  }
                />
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
        {
          searchIcon ? (
            <View style={styles.searchIcon}>
                <SearchIcon
                  width={24}
                  height={24}
                  color={
                    inputError
                      ? MyThemme.alert_error
                      : MyThemme.neutral_dark_gray
                  }
                />
            </View>
          ) : (<></>)
        }
        {inputError && <Text style={mainStyles.textError}>{inputError}</Text>}
      </View>
    </View>
  )
}
