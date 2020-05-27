import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// You can import from local files
// import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import CustomizedWeb from "./CustomizedWeb";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MyWeb from "./MyWeb";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            {/*<View style={styles.container}>*/}
            {/*    <Text style={styles.paragraph}>*/}
            {/*        Change code in the editor and watch it change on your phone!!! Get a shareable url!*/}
            {/*    </Text>*/}
            {/*    /!*<MyWeb/>*!/*/}
            {/*    <CustomizedWeb/>*/}
            {/*</View>*/}
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={CustomizedWeb}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Profile" component={MyWeb} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
