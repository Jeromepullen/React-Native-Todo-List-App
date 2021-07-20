import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: 500,
        paddingTop: 50,
        backgroundColor: 'blue',
    },

    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});