import React from 'react';
import {Pressable, Text, ViewStyle} from 'react-native';
import {styles} from './style';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
};

export default function LinkButton(props: ButtonProps) {
  return (
    <Pressable
      onPress={props.onPress}
      disabled={props.disabled}
      style={[
        styles.rectangle,
        props.style,
        props.disabled && styles.disabledBackground,
      ]}>
      <Text style={styles.label}>{props.label}</Text>
    </Pressable>
  );
}
