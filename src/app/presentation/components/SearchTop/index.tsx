import React from 'react';
import {FlexStyle, View} from 'react-native';
import {styles} from './style';
import InputField from '../InputField';

type ButtonProps = {
    onPress?: () => void;
    containerStyle?: FlexStyle;
    inputStyle?: FlexStyle;
  };

export default function SearchTop(props: ButtonProps) {

  const {containerStyle, inputStyle} = props

  return (
    <View style={[styles.container, containerStyle]}>
      <InputField
          tag='tag-search-top'
          //label="Input Test"
          //value={'formik.values.test1'}
          touched={true}
          onChangeText={text => {
            //console.log(text)
          }}
          //textError={"Formik errors value"}
          placeholder="Busca tu mecánica"
          maxLength={128}
          searchIcon={true}
          style={[styles.input, inputStyle]}
        />
    </View>
  );
}
