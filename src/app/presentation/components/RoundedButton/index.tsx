import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import { mainStyles } from "src/styles/main"

interface Props {
  text: string;
  onPress: () => void;
}
export const RoundedButton = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity style={mainStyles.roundedButton} onPress={onPress}>
      <Text style={mainStyles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
