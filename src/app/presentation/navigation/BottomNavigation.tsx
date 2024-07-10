import React, {useState, useEffect, useRef} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { View, Text, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TabScreens} from './TabScreens';
import {styles} from './style';
import IconHeaderLeft from '../components/IconHeaderLeft';
import IconHeaderRight from '../components/IconHeaderRight';
import { Info } from '../../../assets/svg';
import IconHeader from '../components/IconHeader';
import { MyThemme } from 'src/styles/_variables';
import { 
  Home as HomeIcon, 
  Car as CarIcon, 
  Bookings as BookingsIcon, 
  ProfileFilledIcon, 
  Map as MapIcon 
} from '../../../assets/svg';
import SearchTop from '../components/SearchTop';
import IconMenuHeader from '../components/IconMenuHeader';

const Tab = createBottomTabNavigator();

type Props = {
  currentTab: any;
};

export default function BottomNavigation({currentTab}: Props) {

  const visibleTabBar = true;
  const [active, setActive] = useState(0);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const animation = useRef(new Animated.Value(visibleTabBar ? 1 : 0)).current;
  const searchIn = ['home', 'map'];
  
  useEffect(() => {
    Animated.timing(animation, {
      toValue: visibleTabBar ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [animation, visibleTabBar]);

  useEffect(() => {
    currentTab !== -1 && setActive(currentTab);
  }, [currentTab]);

  function renderIcon(iconName: string, index: number){
    let iconSvg
    switch (iconName) {
      case 'HomeIcon':
        iconSvg = (<HomeIcon width={30} height={30} color={active !== index ? MyThemme.neutral_gray : MyThemme.woowfix_primary}/>)
      break;
      case 'CarIcon':
        iconSvg = (<CarIcon width={30} height={30} color={active !== index ? MyThemme.neutral_gray : MyThemme.woowfix_primary}/>)
      break;
      case 'BookingsIcon':
        iconSvg = (<BookingsIcon width={30} height={30} color={active !== index ? MyThemme.neutral_gray : MyThemme.woowfix_primary}/>)
      break;
      case 'ProfileIcon':
        iconSvg = (<ProfileFilledIcon width={30} height={30} color={active !== index ? MyThemme.neutral_gray : MyThemme.woowfix_primary}/>)
      break;
      case 'MapIcon':
        iconSvg = (<MapIcon width={30} height={30} color={active !== index ? MyThemme.neutral_gray : MyThemme.woowfix_primary}/>)
      break;
      default:
        iconSvg = (<Info width={30} height={30} color={active !== index ? MyThemme.neutral_gray : MyThemme.woowfix_primary}/>)
        break;
    }
    return iconSvg;
  }

  return (
    <Tab.Navigator 
      id='main-navigation' 
      initialRouteName={'home'}
      backBehavior={'history'}
      sceneContainerStyle={styles.btnContainer} 
      screenOptions={{
        tabBarHideOnKeyboard: true
      }}>
      {TabScreens.map((screen, index) => {
        const routeName: string = screen.name;
        return (
          <Tab.Screen 
            key={`tabscreen-${index}`}
            name={routeName} 
            component={screen.component}
            listeners={() => ({
              tabPress: e => {
                setActive(index);
              },
              focus: e => {},
            })} 
            options={{
              ...screen.options,
              headerShadowVisible: true,
              headerTitleAlign: 'center',
              tabBarStyle: {borderTopRightRadius: 25, borderTopLeftRadius: 25, shadowOpacity: 0.2,}, 
              headerRight: () => (
                <IconHeaderRight showButton={screen.showIconHeaderRight} enabledButton={true} screenName={screen.name}/>
              ),
              headerLeft: () => (
                searchIn.includes(screen.name) ? (<IconMenuHeader showButton={true} />) : (<IconHeaderLeft showButton={screen.showIconHeaderLeft} onPress={() => navigation.goBack()}/>)
              ),
              headerTitle: () => (
                searchIn.includes(screen.name) ? (<SearchTop />) : (<IconHeader title={screen.options.title} index={index}/>)
              ),
              tabBarLabel: () => ( 
                <Text style={[styles.itemLabel, active !== index && styles.itemLabelDisabled]}>
                  {screen.options.title}
                </Text>
              ),
              tabBarIcon: ({}) => (
                <View style={{alignItems: 'center', marginTop: 6}}>
                  {
                    screen.options.icon ? renderIcon(screen.options.icon, index) : (<></>)
                  }
                </View>
            )
            }}
        />
        );
      })}
    </Tab.Navigator>
  );
}
