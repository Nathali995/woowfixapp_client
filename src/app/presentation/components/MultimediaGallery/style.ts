import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    galleryContainer: {
        //   paddingHorizontal: 5,
        //   paddingTop: 5,
    },
    itemContainer: {
        width: '50%',
        height: 110,
        paddingHorizontal: 6,
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    video: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    modalBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '100%',
        overflow: 'hidden',
        paddingHorizontal: 15,
    },
    modalImage: {
        width: '100%',
        height: 300,
        borderRadius: 15,
    },
    modalVideo: {
        width: '100%',
        height: 300,
        borderRadius: 15,
    },
});