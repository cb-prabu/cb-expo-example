import 'react-native-gesture-handler';
import * as React from 'react';
// You can import from local files
// import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import AppContainer from "./src/navigation/AppNavigator";
import {DefaultTheme, Provider as PaperProvider, Colors} from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#66afe9',
    },
};

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <AppContainer/>
        </PaperProvider>
    );
}
