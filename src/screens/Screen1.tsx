import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Screen1Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Screen1'>;
};

const Screen1: React.FC<Screen1Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <Image
                source={require('../navigator/mobile.png')}
                style={styles.image}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Screen2')}
            >
                <Text style={styles.buttonText}>Acceder</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    button: {
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Screen1;
