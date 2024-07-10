import React, {useState} from 'react';
import {TouchableHighlight, Text, ViewStyle, TextStyle} from 'react-native';
import {styles} from './style';
import { MyThemme } from 'src/styles/_variables';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle
  type?: string;
  colorText?: string;
};

export default function ActionButton(props: ButtonProps) {
  const [defaulColor, setDefaultColor] = useState(props.colorText);
  const [defaulBorderColor, setDefaultBorderColor] = useState(MyThemme.woowfix_primary); 
  return (
    <TouchableHighlight 
      onPress={props.onPress}
      onShowUnderlay={() => {
        if (props.type === 'secondary') {
          setDefaultColor(MyThemme.woowfix_secondary)
          setDefaultBorderColor(MyThemme.woowfix_secondary)
        }else{
          setDefaultColor(MyThemme.neutral_white)
          setDefaultBorderColor(MyThemme.woowfix_secondary)
        }
      }}
      onHideUnderlay={() => {
        if (props.type === 'secondary'){
          setDefaultColor(MyThemme.woowfix_primary)
          setDefaultBorderColor(MyThemme.woowfix_primary)
        }else{
          setDefaultColor(MyThemme.neutral_white)
          setDefaultBorderColor(MyThemme.woowfix_primary)
        }
      }} 
      underlayColor={props.type === 'secondary' ? MyThemme.neutral_white : MyThemme.woowfix_secondary}
      disabled={props.disabled}
      style={[
        {borderColor: defaulBorderColor},
        styles.rectangle,
        props.style,
        props.disabled && styles.disabledBackground,
      ]}>
      <Text
        style={[
          styles.label,
          props.textStyle,
          {color: defaulColor},
          props.disabled && styles.disabledLabel,
        ]}>
        {props.label}
      </Text>
    </TouchableHighlight>
  );
}
