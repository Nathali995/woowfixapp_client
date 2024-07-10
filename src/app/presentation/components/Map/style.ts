import {StyleSheet} from 'react-native';
import { MyThemme } from 'src/styles/_variables';
import { normalize } from '../../helpers/normalize';

export const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        width: '100%',
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0,
        borderRadius: 15,
        minHeight: 160,
    },
    marker: {
        position: 'relative',
        left: 2,
        height: normalize(28),
        width: normalize(28),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MyThemme.woowfix_primary,
        transform: [{rotate: '45deg'}],
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        borderBottomStartRadius: 50,
        borderColor: MyThemme.neutral_gray_light,
        borderWidth: 0.3,
        borderStyle: 'solid',
    },
    markerImage: {
        height: normalize(22),
        width: normalize(22),
        transform: [{rotate: '-45deg'}],
    },
});
