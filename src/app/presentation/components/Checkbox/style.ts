import { StyleSheet } from "react-native";
import { MyThemme } from "src/styles/_variables";

export const styles = StyleSheet.create({
    container:{ 
        marginTop: 5,
        marginBottom: 15
    },
    containerRow:{
        flexDirection: 'row', 
        backgroundColor: MyThemme.neutral_gray_light,
        borderRadius: 5,
        padding: 8,
        alignItems: 'center'
    },
    labelText:{
        paddingLeft:5,
        color: MyThemme.input_text,
        fontWeight: '400'
    },
    inputFocused: {
        borderColor: MyThemme.blue_1,
        borderWidth: 1,
      },
      inputError: {
        borderColor: MyThemme.alert_error_light,
        borderWidth:1,
        marginBottom: 5,
      },
});