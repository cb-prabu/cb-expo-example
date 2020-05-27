import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Message from "./Messages";
import Settings from "./Settings";

const Stack = createStackNavigator();

export default function Contained() {
    return (
        <Stack.Navigator initialRouteName='Messages'>
            <Stack.Screen name="Feed" component={Settings} />
            <Stack.Screen name="Messages" component={Message} />
        </Stack.Navigator>
    );
}
