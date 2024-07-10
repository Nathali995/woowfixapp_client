import React, { useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

type ButtonProps = {
    onPress?: () => void;
    title: string;
    index: number;
  };

export default function IconHeader(props: ButtonProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitleStyle}> {props.title} </Text>
  </View>
  );
}
