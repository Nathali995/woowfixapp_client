import { StyleSheet } from "react-native";
import { MyThemme } from "src/styles/_variables";

export const styles = StyleSheet.create({
    container:{ 
        marginTop: 5,
        marginBottom: 15,
        marginHorizontal: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: MyThemme.input_text,
        fontWeight: '400',
        fontFamily: MyThemme.font_family,
      },
});