import React from 'react';
import {ActivityIndicator, StyleSheet} from "react-native";
// import WebView from "react-native-webview";
import {WebView} from 'react-native-webview';
import * as Linking from "expo-linking";
import {StackActions} from "@react-navigation/native";

const styles = StyleSheet.create({
    ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default function MyWeb({navigation, route}) {
    const page = `
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>ChargeBee</title>
                    <script src="https://js.chargebee.com/v2/chargebee.js" data-cb-site="ajirasoft-test" ></script>
                    <script src="https://code.jquery.com/jquery-3.4.0.min.js" integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg=" crossorigin="anonymous"></script>
                </head>
                <body>
                <a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="cbdemo_free" id="myCheckout">Subscribe</a>
                </body>
            </html>`;

    const LoadingIndicatorView = () => {
        return (
            <ActivityIndicator
                color='#009b88'
                size='large'
                style={styles.ActivityIndicatorStyle}
            />
        );
    }

    function script() {
        const url = Linking.makeUrl()
        console.log(url);
        return `
            $(document).ready(function () {
                // alert('All assets are loaded');
                document.getElementById("myCheckout").click();
            });
        `;
    }

    const handleWebViewNavigationStateChange = (newNavState) => {
        if (newNavState && newNavState.url.includes('thankyou')) {
            navigation.dispatch(
                StackActions.replace('Thankyou')
            );
        }
    }

    return (
        <WebView
            originWhitelist={['*']}
            source={{html: page}}
            style={{marginTop: 20}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            renderLoading={LoadingIndicatorView}
            injectedJavaScript={script()}
            onNavigationStateChange={handleWebViewNavigationStateChange}
        />
    );
}
