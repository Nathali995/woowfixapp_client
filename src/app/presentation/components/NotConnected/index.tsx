import React from 'react';
import {Platform, Text, View} from 'react-native';
import {styles} from './style';
import ActionButton from '../ActionButton';
import RNRestart from 'react-native-restart';
import { NotConnected } from 'src/assets/svg';
import { MyThemme } from 'src/styles/_variables';
import { WoowFixLogo } from 'src/assets/images';
import ImageWraper from '../ImageWraper';

export default function InternetNotConnection() {

  const refreshConnection = async () => {
    RNRestart.Restart()
  }

  return (
    <View style={{backgroundColor: MyThemme.neutral_white}}>
      <Text style={styles.header}>Error</Text>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={{alignItems: 'center', marginBottom: 20, marginTop: 30}}>
            <ImageWraper src={WoowFixLogo} height={115} width={115} />
          </View>
          <View style={{marginHorizontal: 25}}>
            <Text style={styles.message1}>
              Error de conexión.
            </Text>
            <Text style={styles.message2}>
              Verifica tu conexión a internet.
            </Text>
          </View>
        </View>
        <View style={[
          styles.tryAgain,
          Platform.OS === 'android' && styles.tryAgainAndroid]}>
          <ActionButton
            label="Inténtalo nuevamente"
            onPress={refreshConnection}
            colorText={MyThemme.neutral_white}
          />
        </View>
      </View>
    </View>
  );
}
