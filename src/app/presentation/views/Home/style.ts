import { StyleSheet } from 'react-native'
import { mainStyles } from "src/styles/main"

export const colors = {
  tabBarInactiveColor: 'gray', 
  tabBarActiveColor: 'black',
  tabBarIndicatorColor: 'black',
  backgroundColor: 'white'  
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  tabBar: {
    backgroundColor: colors.backgroundColor,
    width: '75%'
  },
  tabViewContainer: {
    flex: 1, 
    paddingHorizontal: 5, 
    backgroundColor: colors.backgroundColor
  },
  tabView: {
    backgroundColor: colors.backgroundColor, 
    paddingHorizontal: 10,
  },
  tabBarLabel: {
    textTransform: 'capitalize',
  },
  indicatorStyle: {
    backgroundColor: colors.tabBarIndicatorColor,
    width: '50%'
  }
})
