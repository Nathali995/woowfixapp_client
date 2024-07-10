import React from 'react';
import {TouchableHighlight, ViewStyle, View} from 'react-native';
import {styles} from './style';
import ImageWraper from '../ImageWraper';
import { GoogleLogo, FacebookLogo, AppleLogo } from 'src/assets/images';
import { MyThemme } from 'src/styles/_variables';


type ButtonProps = {
  googleEnable?: boolean; 
  facebookEnable?: boolean; 
  appleEnable?: boolean; 
  googleOnPress?: () => void;
  facebookOnPress?: () => void;
  appleOnPress?: () => void;
  style?: ViewStyle;
};

export default function SocialButtons(props: ButtonProps) {
  const { googleEnable, facebookEnable, appleEnable, googleOnPress, facebookOnPress, appleOnPress } = props;
  return (
    <View style={[props.style, styles.container]}>
      {
        googleEnable === true ? 
          <TouchableHighlight onPress={googleOnPress} underlayColor={MyThemme.neutral_white} disabled={false} style={{}}>
            <ImageWraper src={GoogleLogo} height={65} width={65} /> 
          </TouchableHighlight>
        : <></>
      }
      {
        facebookEnable === true ? 
          <TouchableHighlight onPress={facebookOnPress} underlayColor={MyThemme.neutral_white} disabled={false} style={{}}>
            <ImageWraper src={FacebookLogo} height={65} width={65} /> 
          </TouchableHighlight>
        : <></>
      }
      {
        appleEnable === true ? 
          <TouchableHighlight onPress={appleOnPress} underlayColor={MyThemme.neutral_white} disabled={false} style={{}}>
            <ImageWraper src={AppleLogo} height={65} width={65} /> 
          </TouchableHighlight>
        : <></>
      }
    </View>
  );
}