import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

export default function Signup({navigation}) {
    const [firstName, setFirstName] = useState('Prabu');
    const [lastName, setLastName] = useState('K');
    const [email, setEmail] = useState('samplee@email.com');
    const [phone, setPhone] = useState('9090909090');
    const [company, setCompany] = useState('Ajira');

    async function makePayment() {
        const details = {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            company
        };
        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
        const result = await fetch('https://www.recur.in/api/generate_checkout_new_url_demo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        });
        const response = await result.json();
        navigation.navigate('HoneyComic',  {hostedPageResponse: response});
    }

    return (
        <View style={{padding: 2}}>
            <TextInput
                label="First Name"
                onChangeText={text => setFirstName(text)}
                defaultValue={firstName}
            />
            <TextInput
                label="Last Name"
                onChangeText={text => setLastName(text)}
                defaultValue={lastName}
            />
            <TextInput
                label="Email"
                onChangeText={text => setEmail(text)}
                defaultValue={email}
            />
            <TextInput
                label="Phone"
                onChangeText={text => setPhone(text)}
                defaultValue={phone}
            />
            <TextInput
                label="Company"
                onChangeText={text => setCompany(text)}
                defaultValue={company}
            />
            <Button mode="contained" onPress={() => makePayment()} style={{marginTop: 20}}>
                Proceed to Payment
            </Button>
        </View>
    );
}
