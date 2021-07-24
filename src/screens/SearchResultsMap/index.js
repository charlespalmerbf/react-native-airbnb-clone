    import React, { useState, useEffect, useRef } from 'react'
import { View, FlatList } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import CustomMarker from '../../components/CustomMarker'
import places from '../../../assets/data/feed'
import PostCarouselItem from '../../components/PostCarouselItem'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'

const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null)

    const flatList = useRef()

    const map = useRef()

    const viewConfig = useRef({itemVisiblePercentThreshold: 70})

    const onViewChanged = useRef(({viewableItems}) => {

        if (viewableItems.length > 0) {

            const selectedPlace = viewableItems[0].item

            setSelectedPlaceId(selectedPlace.id)

        }

    })

    const width = useWindowDimensions().width

    useEffect(() => {

        if (!selectedPlaceId || !flatList) {

            return

        }

        const index = places.findIndex(place => place.id === selectedPlaceId)

        flatList.current.scrollToIndex({index})

        const selectedPlace = places[index]

        const region = {

            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8

        }

        map.current.animateToRegion(region)

    }, [selectedPlaceId])

    return (
        
        <View style={{width: '100%', height: '100%'}}>

            <MapView
                ref={map}
                style={{width: '100%', height: '100%'}}
                initialRegion={{
                latitude: 28.38825,
                longitude: -16.5324,
                latitudeDelta: 0.822,
                longitudeDelta: 0.821
                }}
            >

                {places.map(place => <CustomMarker isSelected={place.id === selectedPlaceId} coordinate={place.coordinate} price={place.newPrice} onPress={() => setSelectedPlaceId(place.id)} />)}    
            
            </MapView>

            <View style={{position: 'absolute', bottom: 40}}> 
            
                <FlatList viewabilityConfig={viewConfig.current} onViewableItemsChanged={onViewChanged.current} ref={flatList} data={places} renderItem={({item}) => <PostCarouselItem post={item} />} horizontal showsHorizontalScrollIndicator={false} snapToInterval={width - 60} snapToAlignment={"center"} decelerationRate={"fast"} />
                
            </View>

        </View>

    )

}

export default SearchResultsMap
