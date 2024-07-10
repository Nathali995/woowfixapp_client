import {View, Image, ViewStyle} from 'react-native';
import React from 'react';
import retrieveUriFromAsset from '../../helpers/imageAssetResolver';
import {styles} from './style';

type ImageWraperProps = {
  src: string;
  width: number;
  height: number;
  tintColor?: string;
  opacity?: number;
};

export default function ImageWraper(props: ImageWraperProps) {
  const {src, width, height, tintColor, opacity} = props;

  return (
    <View style={styles({width, height}).imageContainer}>
      <Image
        source={{uri: retrieveUriFromAsset(src)}}
        resizeMode="contain"
        style={[styles({}).imageHeight, {'tintColor': tintColor, 'opacity': opacity}]}
      />
    </View>
  );
}
