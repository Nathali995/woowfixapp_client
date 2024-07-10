import {View, Text, Switch} from 'react-native';
import React from 'react';
import {styles} from './style';
import { MyThemme } from 'src/styles/_variables';

type SwitchTaxesProps = {
  label: string;
  onValueChange: (value: boolean) => void;
  value: boolean;
  textError?: string;
};

export default function SwitchTaxes(props: SwitchTaxesProps) {
  const {label, value, textError, onValueChange} = props;

  const validateColor = () => {
    if(value){
      return MyThemme.neutral_gray_light;
    }else{
      return MyThemme.woowfix_primary;
    }
  } 

  return (
    <View 
      style={styles.switchContainer}>
      <Switch
        trackColor={{false: MyThemme.neutral_dark_gray, true: MyThemme.woowfix_primary}}
        thumbColor={validateColor()}
        ios_backgroundColor={MyThemme.neutral_gray_medium}
        onValueChange={onValueChange}
        value={value}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
