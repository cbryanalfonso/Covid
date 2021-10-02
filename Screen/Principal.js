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
    Image
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Inicio from './Inicio';
import Informacion from './Informacion';
import Riesgo from './Riesgo';
import Equipo from './Equipo';

import {Icon} from 'react-native-elements/dist/icons/Icon'

//import { Icon } from 'react-native-elements';
//Importar ICON


const Tab = createBottomTabNavigator();


const screenOptions = (route, color) => {
    let iconName
    switch (route.name) {
        case "Info":
            iconName = "home"
            break;
        case "Riesgo":
            iconName = "image"
            break;
        case "Equipo":
            iconName = "numeric"
            break;
        
    }
    return (
       <Icon
       type="material-community"
        name={iconName}
        size={22}
        color={color}
       ></Icon>
    );
}

class Principal extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName = "Info"
                screenOptions={
                    ({ route }) => ({
                        tabBarIcon: ({ color }) => screenOptions(route, color)
                    })
                } 
            >
                <Tab.Screen
                    name= "Info"
                    component={Informacion}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name= "Riesgo"
                    component={Riesgo}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name= "Equipo"
                    component={Equipo}
                    options={{
                        headerShown: false,
                    }}
                />
                
            </Tab.Navigator>
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

export default Principal;