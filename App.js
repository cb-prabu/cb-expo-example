import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet} from 'react-native';
// You can import from local files
// import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import AppContainer from "./src/navigation/AppNavigator";

export default function App() {
    return (
        <AppContainer/>
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
