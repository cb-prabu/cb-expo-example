import React, {Component} from 'react';
// import {BackHandler, Platform} from "react-native";
import {WebView} from 'react-native-webview';

const myHtmlFile = require('./src/components/CustomizedCheckout/index.html');
export default class CustomizedWeb extends Component {

    // onAndroidBackPress = () => {
    //     if (this.webView.canGoBack && this.webView.ref) {
    //         this.webView.ref.goBack();
    //         return true;
    //     }
    //     return false;
    // }
    //
    // componentDidMount() {
    //     if (Platform.OS === 'android') {
    //         BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    //     }
    // }
    //
    // componentWillUnmount() {
    //     if (Platform.OS === 'android') {
    //         BackHandler.removeEventListener('hardwareBackPress');
    //     }
    // }

    render() {
        return (
            <WebView
                ref={this.webview}
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
