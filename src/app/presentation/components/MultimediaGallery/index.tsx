import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { styles } from './style'
import Video from 'react-native-video';
import SkelPlaceholder from '../SkelPlaceholder';

type Item = {
    id: number,
    itemUrl: string,
}

type MultimediaGalleryProps = {
    type: 'photos' | 'videos',
    items: Item[],
}

export const MultimediaGallery = (props: MultimediaGalleryProps) => {

    const { type, items } = props
    const [selectedItem, setSelectedItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    }, []);

    const renderItem = ({ item }) => {
        return (
            isLoading ? (<SkelPlaceholder />) :
            <TouchableOpacity style={styles.itemContainer} onPress={() => setSelectedItem(item)}>
                {type === 'photos' ? (
                    <Image source={{ uri: item?.itemUrl }} style={styles.image} />
                ) : (
                    <Video 
                        source={{ uri: item.itemUrl }} 
                        style={styles.video} 
                        paused={true} 
                        repeat={false} 
                        posterResizeMode={'cover'} 
                        controls={false}
                    />
                )}
            </TouchableOpacity>
        )
    };

    return (
        <View>
            <View style={styles.galleryContainer}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                />
            </View>
            <Modal visible={selectedItem !== null} transparent>
                <TouchableWithoutFeedback onPress={() => setSelectedItem(null)}>
                    <View style={styles.modalBackdrop}>
                        <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                            {type === 'photos' ? (
                                <Image source={{ uri: selectedItem?.itemUrl }} style={styles.modalImage} />
                            ) : (
                                <Video
                                    source={{ uri: selectedItem?.itemUrl }}
                                    style={styles.modalVideo}
                                    paused={false}
                                    repeat={false}
                                    posterResizeMode={'cover'}
                                    controls={true}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};
