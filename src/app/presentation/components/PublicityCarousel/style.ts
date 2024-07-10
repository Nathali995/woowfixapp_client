import {StyleSheet, Platform} from 'react-native'

export const colors = {
  backgroundColor: 'white'  
}

export const styles = StyleSheet.create({

  image: {
    height: 75,
    width: '100%',
    borderRadius: 15,
  },
  item: {
    paddingVertical: 15,
  },
  container: {
    backgroundColor: colors.backgroundColor,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: colors.backgroundColor,
    borderRadius: 8,
  },
})
