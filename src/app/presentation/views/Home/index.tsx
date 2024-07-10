import React, { useState } from 'react'
import {View, useWindowDimensions, ScrollView} from 'react-native'
import { styles, colors } from './style'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { PublicityCarousel } from '../../components/PublicityCarousel';
import { NextBookingsCarousel } from '../../components/NextBookingsCarousel';
import { TopMechanics } from '../../components/TopMechanics';
import { AllMechanics } from '../../components/AllMechanics';
import {items as PublicityItems} from './ExampleData/Publicity'
import {items as NextBookingsItems} from './ExampleData/NextBookings'
import {items as TopMechanicsItems} from './ExampleData/TopMechanics'
import {items as AllMechanicsItems} from './ExampleData/AllMechanics'
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { 
      key: 'mechanics', 
      title: 'Mecánicas' 
    },
    { 
      key: 'accessories', 
      title: 'Repuestos' 
    },
  ]);

  const MechanicsRoute = () => (
    <ScrollView> 
      <PublicityCarousel 
        onPress={() => navigation.navigate('automobile', {})} 
        items={PublicityItems} 
      />
      <NextBookingsCarousel 
        onPress={() => navigation.navigate('automobile', {})} 
        items={NextBookingsItems} 
      />
      <TopMechanics 
        onPress={() => navigation.navigate('automobile', {})} 
        items={TopMechanicsItems} 
        />
      <AllMechanics 
        items={AllMechanicsItems} 
      />
    </ScrollView>
  );

  const AccessoriesRoute = () => (
    <ScrollView />
  );

  const renderScene = SceneMap({
    mechanics: MechanicsRoute,
    accessories: AccessoriesRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      inactiveColor={colors.tabBarInactiveColor}
      activeColor={colors.tabBarActiveColor}
      getLabelText={({route}) => {
        return route.title
      }}
      labelStyle={styles.tabBarLabel}
      style={styles.tabBar}
    />
  );

  return (
    <View style={styles.tabViewContainer}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width}}
        renderTabBar={renderTabBar}
        style={styles.tabView}
      />
    </View>
  )
}
