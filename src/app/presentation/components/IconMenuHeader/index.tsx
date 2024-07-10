import React from 'react';
import {FlexStyle, TouchableOpacity, View, Text} from 'react-native';
import {styles} from './style';
import { HamburgerMenu } from '../../../../assets/svg';
import { MyThemme } from 'src/styles/_variables'

type ButtonProps = {
    onPress?: () => void;
    style?: FlexStyle;
    showButton: boolean;
  };

export default function IconMenuHeader(props: ButtonProps) {

  const {onPress, style, showButton} = props
  return (
    <View>
      {showButton &&
        (<TouchableOpacity style={[styles.pressable, style]} onPress={onPress}>
          <HamburgerMenu width={16} height={16} color={MyThemme.neutral_dark_gray}/>
          <Text style={styles.text}>Menú</Text>
        </TouchableOpacity>)
      }
    </View>
  );
}
