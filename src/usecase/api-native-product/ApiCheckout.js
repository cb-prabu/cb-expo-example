import React from 'react';
import {WebView} from 'react-native-webview';
import {URL_LISTENER} from "../../utils/UrlListener";
import {redirectIfSubscriptionComplete} from "../../utils/SuccessHandler";

export default function ApiCheckout({navigation, route}) {
    let webview = null;
    const page = `
        <html>
        <head>
            <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <script src="https://js.chargebee.com/v2/chargebee.js"></script>
        </head>
        <body>
        </body>
        </html>
    `;

    return (<WebView
        ref={ref => (webview = ref)}
        originWhitelist={['*']}
        source={{html: page}}
        style={{marginTop: 20}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        injectedJavaScript={URL_LISTENER + openCheckout(route.params.hostedPageResponse)}
        onMessage={({nativeEvent}) => {
            if (nativeEvent.data === "navigationStateChange") {
                redirectIfSubscriptionComplete(navigation, nativeEvent.url)
            }
        }}
    />);
}

function openCheckout(hostedPageResponse) {
    return `
        $(document).ready(function() {
            var cbInstance = window.Chargebee.init({site: "honeycomics-v3-test", enableRedirectMode: true});
            cbInstance.openCheckout({
                hostedPage: function() {
                    return new Promise(function(resolve, reject){
                        return resolve(${JSON.stringify(hostedPageResponse)});
                    });
                },
                loaded: function() {
                    alert('opening checkout');
                    console.log("checkout opened");
                },
                close: function() {
                    console.log("checkout closed");
                },
                success: function(hostedPageId) {
                    console.log(hostedPageId);
                },
                step: function(value) {
                    console.log(value);
                }
            });
        });
    `;
}
