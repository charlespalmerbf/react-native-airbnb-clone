import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'



const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        
        <View>

            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image} >

                <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Destination Search')}> 

                    <Fontisto name='search' size={25} color={"#f15454"} />
                    
                    <Text style={styles.searchButtonText}>Where are you going?</Text> 
                
                </Pressable> 
            
                <Text style={styles.title}>Go Near</Text>

                <Pressable style={styles.button} onPress={() => console.warn('Test')}> 
                
                    <Text style={styles.buttonText}>Explore nearby stays</Text> 
                 
                </Pressable>
            
            </ImageBackground>

        </View>

    )

}

export default HomeScreen
