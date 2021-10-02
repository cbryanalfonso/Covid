import React, { Component, useState } from 'react';
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
    Alert,
    TextInput,

} from 'react-native';

import { RadioButton } from 'react-native-paper';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { CheckBox } from 'react-native-elements';




//class Riesgo extends Component {
const Riesgo = () => {
    const [checked, setChecked] = React.useState('first');
    const [isSelected, setSelection] = useState(false);
    const [checkedd, toggleChecked] = useState(false);
    const [checkeddd, toggleCheckedd] = useState(false);
    // render() {
    return (
        
        <ScrollView style={styles.container}>
            <View style={styles.subcontainer}>
                <Text style={styles.txt}>
                    Acerca de ti
                </Text>
            </View>
            <View style={styles.subCcontainer}>
                <Text style={styles.txtI}>Ingrese su código postal</Text>
                <TextInput
                    placeholder="Ej. 50700"
                    placeholderTextColor="#3498db"
                    style={styles.txtInpunt}
                />
                <Text style={styles.txtI}>Ingrese su edad</Text>
                <TextInput
                    placeholder="Ej. 20"
                    placeholderTextColor="#3498db"
                    style={styles.txtInpunt}
                />
                <Text style={styles.txtI}>Ingrese su código postal</Text>
                <TextInput
                    placeholder="Ingrese su código postal"
                    placeholderTextColor="#3498db"
                    style={styles.txtInpunt}
                />
                <Text style={styles.txtI}>Ingrese su sexo</Text>
                <RadioButton.Group>
                    <RadioButton.Item label="Hombre"
                        value="first"
                        status={checked == 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <RadioButton.Item label="Mujer"
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />

                </RadioButton.Group>

            </View>
            <View style={styles.subcontainer}>
                <Text style={styles.txt}>
                    Su estatus de salud
                </Text>
            </View>
            <View style={styles.subCcontainer}>
               <CheckBox
               title='Hombre'
               checkedIcon={<Image style={{width:25,height:25}} source={require('../Recursos/comprobar.png')} />}
               uncheckedIcon={<Image style={{width:25,height:25}} source={require('../Recursos/detener.png')} />}
                checked={checkedd}
                onPress={()=>toggleChecked(!checkedd)}
               ></CheckBox>
               <CheckBox
               title='Mujer'
               checkedIcon={<Image style={{width:25,height:25}} source={require('../Recursos/comprobar.png')} />}
               uncheckedIcon={<Image style={{width:25,height:25}} source={require('../Recursos/detener.png')} />}
                checked={checkeddd}
                onPress={()=>toggleCheckedd(!checkeddd)}
               ></CheckBox>
            </View>
            
        </ScrollView>
    );
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    subcontainer: {
        borderRadius: 20,
        borderColor: '#2980b9',
        marginHorizontal: 20,
        marginTop: 20,
        padding: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#3498db"
    },
    subCcontainer: {
        borderRadius: 15,
        borderColor: '#3498db',
        marginHorizontal: 20,
        marginTop: 5,
        padding: 15,
        flex: 1,
        borderWidth: 3,
        justifyContent: 'center',
        backgroundColor: "#ecf0f1"
    },
    txt: {
        height: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: "#ecf0f1"
    },
    txtInpunt: {
        borderWidth: 1,
        borderRadius: 10,
        width: "100%",
        borderColor: "#2980b9",
        marginBottom: 20,
    },
    txtI: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    btn: {
        borderRadius: 10,
        borderWidth: 10,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },

});

export default Riesgo;