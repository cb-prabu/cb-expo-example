import * as React from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';

export default function Success() {
    return (
        <Card>
            <Card.Content>
                <Title>Success</Title>
                <Paragraph>Thank you for purchasing</Paragraph>
            </Card.Content>
        </Card>
    );
}
