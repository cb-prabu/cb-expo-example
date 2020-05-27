import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {StackActions} from "@react-navigation/native";

const myHtmlFile = require('./index.html');
class HoneyComic extends Component {
    webview =  null;

    render(props) {
        const webView = <WebView
            ref={ref => (this.webview = ref)}
            originWhitelist={['*']}
            source={myHtmlFile}
            style={{marginTop: 20}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            injectedJavaScript={this.script(this.props.route.params.hostedPageResponse)}
            // onMessage={(event)=> this.showData(event.nativeEvent.data)}
            onNavigationStateChange={this.handleWebViewNavigationStateChange}
        />;

        return webView;
    }

    handleWebViewNavigationStateChange = (newNavState) => {
        // console.log('called here', this.props, this.props.route.params);
        if (newNavState && newNavState.url.includes('thankyou')) {
            this.props.navigation.dispatch(
                StackActions.replace('Thankyou')
            );
        }
    }

    script(hostedPageResponse)  {
        console.log(hostedPageResponse);
        console.log('hostedPageResponse----------******');
        return `
            $(document).ready(function() {
                // window.ReactNativeWebView.postMessage("finalResult");
                // alert('Inside');
                // var cbInstance = window.Chargebee.init({site: "honeycomics-v3-test"});
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
}

export default function({navigation, route}) {

    return <HoneyComic navigation={navigation} route={route} />;
}
