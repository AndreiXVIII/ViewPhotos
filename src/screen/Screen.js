import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../components/HomeScreen'
import DetailsScreen from '../components/DetailsScreen'

const Stack = createStackNavigator()

const Screen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Home' component={ HomeScreen }/>
                <Stack.Screen name='Details' component={ DetailsScreen }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Screen