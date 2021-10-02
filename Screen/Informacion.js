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



class Informacion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <Text style={styles.txtTitulo}>Información</Text>
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.txt}>
                        Esta herramienta sintetiza los datos de casos geográficos de COVID-19 
                        informados y la investigación científica en rápida evolución para 
                        ayudarlo a calcular cuánto riesgo representa para usted esta enfermedad.{"\n"}
                    Creemos que las personas toman las decisiones correctas cuando se les empodera 
                    sin miedo ni complacencia, sino con datos precisos.{"\n"}
                    Tenga en cuenta: muchos aspectos muy importantes de esta enfermedad se desconocen 
                    o se estiman con gran incertidumbre. Dicho esto, nuestra filosofía rectora es que 
                    una estimación imperfecta es mejor que ninguna.
                    </Text>
                </View>
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
        fontSize: 15,
        color: 'black',
        lineHeight: 30,
        textAlign: 'justify',
        padding: 30,
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

export default Informacion;