import 'react-native-gesture-handler';
import * as React from 'react';
// You can import from local files
// import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import MyWeb from "../../MyWeb";
import CustomizedWeb from "../../CustomizedWeb";
import Home from "../components/Home";
import ScriptedWeb from "../components/ScriptedCheckout/ScriptedWeb";
import Combined from "../components/CombinedMode/Combined";
import EventListeners from "../components/EventListeners/EventListeners";
import DirectLink from "../components/DirectLink/DirectLink";
import HoneyComic from "../components/HoneyComics/HoneyComic";
import Signup from "../components/FormDisplay/Signup";
import {Linking} from "expo";
import {Text} from "react-native-paper";
import StackedUrlMatcher from "../components/Screens/StackedUrlMatcher";
import Success from "../components/FormDisplay/Success";
import DropInHTML from "../UseCase/ProductPageInHtml/DropInHTML";
import DropInCheckoutURL from "../UseCase/ProductPageInNative/DropInCheckoutURL";
import CheckoutURLWebview from "../UseCase/ProductPageInNative/CheckoutURLWebview";
import ApiCheckout from "../UseCase/ApiNativeProductPage/ApiCheckout";
import UserInformation from "../UseCase/ApiNativeProductPage/UserInformation";
import ComponentsBasic from "../UseCase/ApiHtmlUserInformationPage/ComponentsBasic";
import ComponentsWithProgrammaticActions from "../UseCase/ApiHtmlProgrammaticActions/ComponentsWithProgrammaticActions";
import ComponentsWithEventListeners from "../UseCase/ApiHtmlEventListeners/ComponentsWithEventListeners";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
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
                <Stack.Screen name="DropIn" component={MyWeb}/>
                <Stack.Screen
                    name="Customized"
                    component={CustomizedWeb}
                    options={{title: 'Checkout'}}
                />
                <Stack.Screen
                    name="Components-Basic"
                    component={ScriptedWeb}
                    options={{title: 'Checkout'}}
                />
                <Stack.Screen
                    name="Components-Programmatic Actions"
                    component={Combined}
                    options={{title: 'Checkout'}}
                />
                <Stack.Screen
                    name="Components-EventListeners"
                    component={EventListeners}
                />
                <Stack.Screen
                    name="CheckoutURL"
                    component={DirectLink}
                />
                <Stack.Screen
                    name="HoneyComic"
                    component={HoneyComic}
                    options={{title: 'Checkout'}}
                />
                <Stack.Screen
                    name="FormDisplay"
                    component={Signup}
                    options={{title: "Tell us about yourself"}}
                />
                <Stack.Screen
                    name="UrlMatching"
                    component={StackedUrlMatcher}
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
                <Stack.Screen
                    name="ComponentsBasic"
                    component={ComponentsBasic}
                    options={{title: "Checkout"}}
                />
                <Stack.Screen
                    name="ComponentsProgrammaticActions"
                    component={ComponentsWithProgrammaticActions}
                    options={{title: "Checkout"}}
                />
                <Stack.Screen
                    name="ComponentsEventListeners"
                    component={ComponentsWithEventListeners}
                    options={{title: "Checkout"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
