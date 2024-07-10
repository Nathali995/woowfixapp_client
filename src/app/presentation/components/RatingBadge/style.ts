import {StyleSheet} from 'react-native'

export const styles = ({badgeColor}: {badgeColor: string | undefined}) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: badgeColor ?? 'white', 
    padding: 3, 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 10, 
    borderBottomLeftRadius: 15
  },
  labelText: {
    paddingHorizontal: 5,
    fontSize: 12 
  }
})
