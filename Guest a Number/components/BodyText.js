import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function BodyText(props) {
    return (
        <Text style={{ ...styles.title, ...props.title }}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans'
    }
});
