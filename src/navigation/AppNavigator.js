import 'react-native-gesture-handler';
import * as React from 'react';
// You can import from local files
// import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../components/Home";
import {Linking} from "expo";
import {Text} from "react-native-paper";
import Success from "../components/Success";
import DropInHTML from "../usecase/drop-in-html-checkout/DropInHTML";
import DropInCheckoutURL from "../usecase/drop-in-native-checkout/DropInCheckoutURL";
import CheckoutURLWebview from "../usecase/drop-in-native-checkout/CheckoutURLWebview";
import ApiCheckout from "../usecase/api-native-product/ApiCheckout";
import UserInformation from "../usecase/api-native-product/UserInformation";

const Stack = createStackNavigator();
const prefix = Linking.makeUrl('/');

export default function AppContainer() {
    const linking = {
        prefixes: [prefix],
    };

    return (
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="Thankyou"
                    component={Success}
                    options={{title: "Success"}}
                />
                <Stack.Screen
                    name="DropInHTML"
                    component={DropInHTML}
                    options={{title: "Honey Comics"}}
                />
                <Stack.Screen
                    name="DropInCheckoutURL"
                    component={DropInCheckoutURL}
                    options={{title: "Honey Comics"}}
                />
                <Stack.Screen
                    name="CheckoutURLWebview"
                    component={CheckoutURLWebview}
                    options={{title: "Honey Comics"}}
                />
                <Stack.Screen
                    name="ApiCheckout"
                    component={ApiCheckout}
                    options={{title: "Honey Comics"}}
                />
                <Stack.Screen
                    name="UserInformation"
                    component={UserInformation}
                    options={{title: "Tell us about yourself"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
