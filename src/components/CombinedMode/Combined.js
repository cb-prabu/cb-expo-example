import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

const myHtmlFile = require('./index.html');
export default class Combined extends Component {
    render() {
        return (
            <WebView
                originWhitelist={['*']}
                source={myHtmlFile}
                // style={{marginTop: 2}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
        );
    }
}
