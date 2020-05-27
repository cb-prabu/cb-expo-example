import React from 'react';
import {ActivityIndicator, StyleSheet} from "react-native";
import {StackActions} from '@react-navigation/native';
// import WebView from "react-native-webview";
import {WebView} from 'react-native-webview';

export default function FunctionalWeb({navigation, route}) {
    const page = `
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>ChargeBee</title>
                    <script src="https://js.chargebee.com/v2/chargebee.js" data-cb-site="ajirasoft-test" ></script>
                </head>
                <body>
<!--                <a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="comics-box" >Buy me another drink!</a>-->
                <a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="cbdemo_free" id="my_checkout">Here subscribe</a>
                <hr>
                
                <a href="javascript:void(0)" data-cb-type="portal">
                    MANAGE Your ACCOUNT
                </a>
                
                </body>
            </html>`;

    const styles = StyleSheet.create({
        ActivityIndicatorStyle: {
            flex: 1,
            justifyContent: 'center'
        }
    });

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
        return `document.getElementById("my_checkout").click();`;
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
