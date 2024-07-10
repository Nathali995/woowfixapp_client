import {Text, View, TouchableOpacity} from 'react-native'
import {
  CheckBoxBlank,
  CheckBox,
  CircleBox,
  CircleBoxBlank,
} from 'src/assets/svg'
import {MyThemme} from 'src/styles/_variables'
import {styles} from './style'
import {mainStyles} from 'src/styles/main'
import {useState} from 'react'

type CheckboxProps = {
  name: string
  labelText: string
  checked?: boolean
  onChange?: (value: boolean) => void
  formik?: any
  style?: any
  disabled?: boolean
  error?: string
  isSquare?: boolean
  showFocus?: boolean
}
export default function Checkbox(props: CheckboxProps) {
  const {
    checked,
    name,
    labelText,
    onChange,
    style,
    disabled,
    formik,
    error,
    isSquare = true,
    showFocus = true,
  } = props
  const field = formik?.getFieldMeta(name)
  const isChecked = field ? field.value : checked
  const textError = field ? field.error : error

  const [isFocused, setIsFocused] = useState(false)

  const getCheckIcon = () => {
    if (isSquare) {
      return isChecked ? (
        <CheckBox width={16} height={16} color={MyThemme.woowfix_primary} />
      ) : (
        <CheckBoxBlank
          width={16}
          height={16}
          color={MyThemme.woowfix_primary}
        />
      )
    }
    return isChecked ? (
      <CircleBox width={16} height={16} color={MyThemme.woowfix_primary} />
    ) : (
      <CircleBoxBlank width={16} height={16} color={MyThemme.woowfix_primary} />
    )
  }

  const onChangeCheckbox = () => {
    if (field && formik) {
      formik.setFieldValue(name, !field.value)
    }
    if (onChange !== undefined) {
      onChange(field ? !field.value : !checked)
    }
    if(showFocus){
      handleFocus(true)
    }
  }

  const handleFocus = (isFocused: boolean) => {
    setIsFocused(isFocused)
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.containerRow,
          isFocused && styles.inputFocused,
          textError ? styles.inputError : false,
          style
        ]}>
        <TouchableOpacity
          id={`checkbox_${name}`}
          style={[{padding: 0}]}
          onPress={onChangeCheckbox}
          disabled={disabled}>
          {getCheckIcon()}
        </TouchableOpacity>
        <View style={styles.labelText}>
          {labelText && <Text>{labelText}</Text>}
        </View>
      </View>
      {textError && <Text style={mainStyles.textError}>{textError}</Text>}
    </View>
  )
}
