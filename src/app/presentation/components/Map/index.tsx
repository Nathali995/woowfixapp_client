import React, { useState, useEffect } from 'react';
import { View, Platform, Image } from 'react-native';
import { styles } from './style';
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker, LatLng } from 'react-native-maps';
import SkelPlaceholder from '../SkelPlaceholder'

type MapProps = {
    markers: {
        latitude: number;
        longitude: number;
        imageUrl?: string
    }[];
    destination?: {
        latitude: number;
        longitude: number;
        imageUrl?: string
    };
    origin?: any;
};

export default function Map({ markers, destination, origin }: MapProps) {

    const [isLoading, setIsLoading] = useState(true);
    const handleDrag = (coords: LatLng) => {
        console.log(coords);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        isLoading ? (<SkelPlaceholder />) :
            <MapView
                provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                style={styles.mapContainer}
                initialRegion={{
                    latitude: markers.length ? markers[0].latitude : 0,
                    longitude: markers.length ? markers[0].longitude : 0,
                    latitudeDelta: 0.01022,
                    longitudeDelta: 0.00821,
                }}
                loadingEnabled={true}
            >
                {markers.map((marker, index: number) => {
                    return (
                        <Marker
                            draggable={false}
                            key={`${marker.latitude}${index}`}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            onDragEnd={e => handleDrag(e.nativeEvent.coordinate)}
                        >
                            {marker.imageUrl &&
                                (<View style={styles.marker}>
                                    <Image
                                        source={{ uri: marker.imageUrl }}
                                        style={styles.markerImage}
                                        resizeMode="contain"
                                    />
                                </View>
                                )}
                        </Marker>
                    );
                })}
            </MapView>
    )

}
