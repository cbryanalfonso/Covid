import React, { Component } from 'react';
//import { NavigationContainer }
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    Image,
    Alert
} from 'react-native';
//import { createNativeStackNavigator } from '@'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'



class Equipo extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Text>Equipo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    subContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    subcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        borderRadius: 20,
        backgroundColor: '#3498db',
        width: "70%",
        marginBottom: 80,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ecf0f1',
    },
    txtTitulo: {
        fontSize: 30,
        color: "#2980b9",
        fontWeight: 'bold',

    },
    imagen: {
        width: "38%",
        height: "40%",
        marginTop: 90,
        borderRadius: 20,

    },
});

export default Equipo;