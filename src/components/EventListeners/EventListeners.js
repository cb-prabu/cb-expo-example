import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

const myHtmlFile = require('./index.html');
export default class EventListeners extends Component {
    render() {
        return (
            <WebView
                originWhitelist={['*']}
                source={myHtmlFile}
                style={{marginTop: 20}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
        );
    }
}
