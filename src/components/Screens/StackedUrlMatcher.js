import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import FunctionalWeb from "../../../FunctionalWeb";

const Stack = createStackNavigator();

export default function StackedUrlMatcher() {
    return (
        <Stack.Navigator initialRouteName='Messages'>
            <Stack.Screen name="Messages" component={FunctionalWeb} />
        </Stack.Navigator>
    );
}
