import React, {RefObject, createRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import AuthNavigation from './AuthNavigation';
import BottomNavigation from './BottomNavigation';
import InternetNotConnection from '../components/NotConnected';
import { useAuth } from '../contexts/AuthContext';
import RootNavigation from './RootNavigation';


const tabs = [
  'Inicio',
  'Mi auto',
  'Reservas',
  'Cuenta',
  'Mapa'
];

export default function AppNavigation() {

  const {authData, isOffline, isLogged} = useAuth();
  const [titleState, setTitleState] = useState('');
  const navigationRef: RefObject<any> = createRef();

  if (isOffline){
    return ( 
      <RootSiblingParent>
        <NavigationContainer>
          <InternetNotConnection/>
        </NavigationContainer>
      </RootSiblingParent>
    );
  }

  return (
    <RootSiblingParent>
      <NavigationContainer 
        ref={navigationRef}
        onStateChange={async () => {
          const infoNav = navigationRef.current?.getCurrentOptions();
          setTitleState(infoNav?.title);
        }}
        >
        {isLogged ? <RootNavigation titleState={titleState} /> : <AuthNavigation/>}
      </NavigationContainer>
    </RootSiblingParent>
  );
}
