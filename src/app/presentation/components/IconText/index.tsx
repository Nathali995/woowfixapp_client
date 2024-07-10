import React from 'react';
import {Text, ViewStyle, View} from 'react-native';
import {styles} from './style';
import ImageWraper from '../ImageWraper';
import { MyThemme } from 'src/styles/_variables'

type IconTextProps = {
  src: string;
  label: string;
  style?: ViewStyle;
  textStyle?: ViewStyle;
};

export default function IconText(props: IconTextProps) {
  const defaulColor = MyThemme.woowfix_primary; 
  return (
    <View style={[props.style, styles.container]}>
      <ImageWraper src={props.src} height={20} width={20} tintColor={defaulColor} />
      <Text style={[styles.label, props.textStyle, {color: defaulColor}]}>{props.label}</Text>
    </View>
  );
}
