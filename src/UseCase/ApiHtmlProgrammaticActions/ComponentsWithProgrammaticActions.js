import React from 'react';
import {WebView} from 'react-native-webview';

const myHtmlFile = require('./index.html');
export default function ComponentsWithProgrammaticActions() {
    return (
        <WebView
            originWhitelist={['*']}
            source={myHtmlFile}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
        />
    );
}
