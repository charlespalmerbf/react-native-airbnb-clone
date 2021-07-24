import React, { useState } from 'react'
import { View, TextInput, FlatList, Text, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import SuggestionRow from './SuggestionRow'

import searchResults from '../../../assets/data/search'

const DestinationSearchScreen = () => {

    const navigation = useNavigation()

    return (

        <View style={styles.container}>

                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        navigation.navigate('Guests')
                    }}
                    fetchDetails
                    styles={{ 
                        textInput: styles.textInput
                    }}
                    query={{
                        key: 'AIzaSyCMuMRMhLjnyDUhuCKlEyVZ17rQVxSRdMA',
                        language: 'en',
                        types: '(cities)'
                    }}
                    suppressDefaultStyles
                    renderRow={(item) => <SuggestionRow item={item} />}
                />

        </View>
        
    )
    
}

export default DestinationSearchScreen
