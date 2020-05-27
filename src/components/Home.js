import * as React from 'react';
import {Button, View} from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                title="Drop-In script"
                onPress={() => navigation.navigate('DropIn')}
            />
            <Button
                title="Components-Basic"
                onPress={() => navigation.navigate('Components-Basic')}
            />
            <Button
                title="Components-Programmatic Actions"
                onPress={() => navigation.navigate('Components-Programmatic Actions')}
            />
            <Button
                title="Components-EventListeners"
                onPress={() => navigation.navigate('Components-EventListeners')}
            />
            {/*<Button*/}
            {/*    title="CheckoutURL"*/}
            {/*    onPress={() => navigation.navigate('CheckoutURL')}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="HoneyComic"*/}
            {/*    onPress={() => navigation.navigate('HoneyComic')}*/}
            {/*/>*/}
            <Button
                title="API"
                onPress={() => navigation.navigate('FormDisplay')}
            />
            {/*<Button*/}
            {/*    title="URL matching"*/}
            {/*    onPress={() => navigation.navigate('UrlMatching')}*/}
            {/*/>*/}
            {/*<Text>{Linking.makeUrl()}</Text>*/}
        </View>
    );
}
