import React from 'react';
import {FlexStyle, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import { ArrowLeft } from '../../../../assets/svg';
import { MyThemme } from 'src/styles/_variables'

type ButtonProps = {
    onPress?: () => void;
    style?: FlexStyle;
    showButton: boolean;
  };

export default function IconHeaderLeft(props: ButtonProps) {
  return (
    <View>
      {props.showButton &&
        (<TouchableOpacity style={styles.pressable} onPress={props.onPress}>
          <ArrowLeft width={20} height={20} color={MyThemme.woowfix_secondary}/>
        </TouchableOpacity>)
      }
    </View>
  );
}
