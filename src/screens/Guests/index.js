import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const GuestsScreen = () => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation()

    return (

        <View style={{justifyContent: 'space-between', height: '100%'}}>

            <View>

                <View style={styles.row}>

                <View>

                    <Text style={{fontWeight: 'bold'}}>Adults</Text>

                    <Text style={{color: 'lightgrey'}}>Ages 13 or above</Text>

                </View>

                <View style={styles.buttonView}>

                    <Pressable onPress={() => setAdults(Math.max(0, adults - 1))} style={styles.button}> 
                    
                        <Text style={styles.buttonInnerText}>-</Text>
                    
                    </Pressable>

                    <Text style={styles.buttonText}>{adults}</Text>

                    <Pressable onPress={() => setAdults(adults + 1)} style={styles.button}> 
                    
                        <Text style={styles.buttonInnerText}>+</Text>
                    
                    </Pressable>

                </View>

            </View>

                <View style={styles.row}>

                <View>

                    <Text style={{fontWeight: 'bold'}}>Children</Text>

                    <Text style={{color: 'lightgrey'}}>Ages 2-12</Text>

                </View>

                <View style={styles.buttonView}>

                    <Pressable onPress={() => setChildren(Math.max(0, children - 1))} style={styles.button}> 
                    
                        <Text style={styles.buttonInnerText}>-</Text>
                    
                    </Pressable>

                    <Text style={styles.buttonText}>{children}</Text>

                    <Pressable onPress={() => setChildren(children + 1)} style={styles.button}> 
                    
                        <Text style={styles.buttonInnerText}>+</Text>
                    
                    </Pressable>

                </View>

            </View>

                <View style={styles.row}>

                <View>

                    <Text style={{fontWeight: 'bold'}}>Infants</Text>

                    <Text style={{color: 'lightgrey'}}>Under 2</Text>

                </View>

                <View style={styles.buttonView}>

                    <Pressable onPress={() => setInfants(Math.max(0, infants - 1))} style={styles.button}> 
                    
                        <Text style={styles.buttonInnerText}>-</Text>
                    
                    </Pressable>

                    <Text style={styles.buttonText}>{infants}</Text>

                    <Pressable onPress={() => setInfants(infants + 1)} style={styles.button}> 
                    
                        <Text style={styles.buttonInnerText}>+</Text>
                    
                    </Pressable>

                </View>

            </View>

            </View>

            <View>

                <Pressable style={styles.guestButton} onPress={() => navigation.navigate('Home', {screen: 'Explore', params: {screen: 'SearchResults'},})}>

                    <Text style={styles.guestButtonText}> Search </Text>

                </Pressable>

            </View>

        </View>
        
    )

}

export default GuestsScreen
