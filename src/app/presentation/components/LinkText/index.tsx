import React, { useState } from 'react';
import {TouchableHighlight, Text, ViewStyle} from 'react-native';
import {styles} from './style';
import { MyThemme } from 'src/styles/_variables';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: ViewStyle;
  underlayBgColor?: string;
};

export default function LinkText(props: ButtonProps) {
  const [defaulColor, setDefaultColor] = useState(MyThemme.woowfix_primary); 
  return (
    <TouchableHighlight
      onShowUnderlay={() => setDefaultColor(MyThemme.woowfix_secondary)}
      onHideUnderlay={() => setDefaultColor(MyThemme.woowfix_primary)}
      underlayColor={props.underlayBgColor ?? MyThemme.neutral_white}
      onPress={props.onPress}
      disabled={props.disabled}
      style={[
        styles.rectangle,
        props.style,
        props.disabled && styles.disabledBackground,
      ]}>
      <Text style={[styles.label, props.textStyle, {color: defaulColor}]}>{props.label}</Text>
    </TouchableHighlight>
  );
}
