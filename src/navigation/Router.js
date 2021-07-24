import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearchScreen from '../screens/DestinationSearch'
import GuestsScreen from '../screens/Guests'

import HomeTabNavigator from './HomeTabNavigator'

const Stack= createStackNavigator()


const Router = () => {

    return (
        
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{headerShown: false}}/>

                <Stack.Screen name={"Destination Search"} component={DestinationSearchScreen} />

                <Stack.Screen name={"Guests"} component={GuestsScreen} />

            </Stack.Navigator>

        </NavigationContainer>

    )
}

export default Router

