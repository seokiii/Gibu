import React, { useState, useEffect } from "react"
import { Button } from "react-native"

import HomeScreen from "../MainStackScreens/HomeScreen"
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import UploadGifticon from "../../UploadGifticon"
import PointDetailScreen from "../MainStackScreens/PointDetailScreen"
import WishListScreen from "../MainStackScreens/WishListScreen"
import MissionScreen from "../MainStackScreens/MissionScreen"
import NotificationScreen from "../MainStackScreens/NotificationScreen"
import DonationHistoryScreen from "../MainStackScreens/DonationHistory"

const Stack = createStackNavigator()

const HomeScreenStack = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen'
        if (routeName != 'HomeScreen') {
            navigation.setOptions({ tabBarStyle: { display: 'none' } })
        } else {
            navigation.setOptions({ tabBarStyle: { display: undefined } })
        }
    }, [navigation, route])
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                headerRight: () => (
                    <Button title='기프티콘등록' onPress={() => {
                        navigation.navigate('UploadGifticon')
                    }} />
                )
            }}></Stack.Screen>
            <Stack.Screen component={PointDetailScreen} name = "PointDetailScreen"></Stack.Screen>
            <Stack.Screen component={WishListScreen} name = "WishListScreen"></Stack.Screen>
            <Stack.Screen component={DonationHistoryScreen} name = "DonationHistoryScreen"></Stack.Screen>
            <Stack.Screen component={NotificationScreen} name = "NotificationScreen"></Stack.Screen>
            <Stack.Screen component={MissionScreen} name = "MissionScreen"></Stack.Screen>
            <Stack.Screen name='UploadGifticon' component={UploadGifticon}></Stack.Screen>

        </Stack.Navigator>
    )
}

export default HomeScreenStack;