import React from 'react';
import {Text, ViewStyle, View} from 'react-native';
import {styles} from './style';
import { MyThemme } from 'src/styles/_variables'

type TextHeaderProps = {
  label: string;
  containerStyle?: ViewStyle;
  textStyle?: ViewStyle;
  textColor?: string;
};

export default function TextHeader(props: TextHeaderProps) {
  const defaulColor = props.textColor ?? MyThemme.woowfix_primary; 
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={[styles.label, props.textStyle, {color: defaulColor}]}>{props.label}</Text>
    </View>
  );
}
