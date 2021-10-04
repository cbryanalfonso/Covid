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
    const [marcado, estaMarcado] = useState('10');
    const [revisado, estaRevisado] = useState('vive');
    const [indicaciones, sigueIndicaciones] = useState('siIndicaciones');
    const [checkedd, toggleChecked] = useState(false);
    const [checkeddd, toggleCheckedd] = useState(false);


    // Actividades bajas..
    const [interior, interiorRevisado] = useState(false);
    const [exterior, exteriorRevisado] = useState(false);

    //Riesgo medio
    const [exteriorM, exteriorRevisadoM] = useState(false);
    const [exteriorMS, exteriorRevisadoMS] = useState(false);
    const [exteriorMT, exteriorRevisadoMT] = useState(false);
    const [exteriorMA, exteriorRevisadoMA] = useState(false);
    const [exteriorMD, exteriorRevisadoMD] = useState(false);
    const [exteriorMH, exteriorRevisadoMH] = useState(false);
    
    // Riesgo alto

    const [interiorA, interiorRevisadoA] = useState(false);
    const [interiorAN, interiorRevisadoAN] = useState(false);
    const [interiorAS, interiorRevisadoAS] = useState(false);
    const [interiorAR, interiorRevisadoAR] = useState(false);
    const [interiorAT, interiorRevisadoAT] = useState(false);
    const [interiorAH, interiorRevisadoAH] = useState(false);

    // render() {
    return (

        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.subContainerTitulo}>
                <Text style={styles.titulo}>
                    Calculadora de Riesgo Covid 19
                </Text>
            </View>
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
                    keyboardType="numeric"

                />
                <Text style={styles.txtI}>Ingrese su edad</Text>
                <TextInput
                    placeholder="Ej. 20"
                    placeholderTextColor="#3498db"
                    style={styles.txtInpunt}
                    keyboardType="numeric"
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
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={checkedd}
                    onPress={() => toggleChecked(!checkedd)}
                ></CheckBox>
                <CheckBox
                    title='Mujer'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={checkeddd}
                    onPress={() => toggleCheckedd(!checkeddd)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>

                <Text style={styles.txtI}>Cuanto tiempo al dia hace ejercicio</Text>

                <RadioButton.Group>
                    <RadioButton.Item label="10-20 Minutos"
                        value="10"
                        status={marcado == '10' ? 'checked' : 'unchecked'}
                        onPress={() => estaMarcado('10')}
                    />
                    <RadioButton.Item label="20-60 Minutos"
                        value="20"
                        status={marcado === '20' ? 'checked' : 'unchecked'}
                        onPress={() => estaMarcado('20')}
                    />
                    <RadioButton.Item label="+60 Minutos"
                        value="60"
                        status={marcado === '60' ? 'checked' : 'unchecked'}
                        onPress={() => estaMarcado('60')}
                    />

                </RadioButton.Group>
            </View>

            <View style={styles.subcontainer}>
                <Text style={styles.txt}>
                    Información personal
                </Text>
            </View>
            <View style={styles.subCcontainer}>
                <Text style={styles.txtI}>¿Vive con otras personas?</Text>
                <RadioButton.Group>
                    <RadioButton.Item label="Si"
                        value="vive"
                        status={revisado == 'vive' ? 'checked' : 'unchecked'}
                        onPress={() => estaRevisado('vive')}
                    />
                    <RadioButton.Item label="No"
                        value="noVive"
                        status={revisado === 'noVive' ? 'checked' : 'unchecked'}
                        onPress={() => estaRevisado('noVive')}
                    />
                </RadioButton.Group>

                <Text style={styles.txtI}>¿Con cuantas personas tiene contacto en su casa?</Text>
                <TextInput
                    placeholder="Ej. 5"
                    placeholderTextColor="#3498db"
                    style={styles.txtInpunt}
                    keyboardType="numeric"
                />
                <Text style={styles.txtI}>Sigue las indicaciones según CDC guidance</Text>
                <RadioButton.Group>
                    <RadioButton.Item label="Si"
                        value="siIndicaciones"
                        status={indicaciones == 'siIndicaciones' ? 'checked' : 'unchecked'}
                        onPress={() => sigueIndicaciones('siIndicaciones')}
                    />
                    <RadioButton.Item label="No"
                        value="noIndicaciones"
                        status={indicaciones === 'noIndicaciones' ? 'checked' : 'unchecked'}
                        onPress={() => sigueIndicaciones('noIndicaciones')}
                    />
                </RadioButton.Group>
                <Text style={styles.txtI}>En la semana anterior ha participado en las siguientes actividades:</Text>
                <Text style={styles.txtSub}>Activides con riesgo bajo:</Text>
                <CheckBox
                    title='Actividades sociales en interiores'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={interior}
                    onPress={() => interiorRevisado(!interior)}
                ></CheckBox>
                <CheckBox
                    title='Actividades sociales en exteriores'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={exterior}
                    onPress={() => exteriorRevisado(!exterior)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>


                <Text style={styles.txtSub}></Text>
                <Text style={styles.txtSub}>Activides con riesgo medio:</Text>
                <CheckBox
                    title='Asistir a la escuela o a el trabajo'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={exteriorM}
                    onPress={() => exteriorRevisadoM(!exteriorM)}
                ></CheckBox>
                <CheckBox
                    title='Actividades en interiores como (compras, salon)'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={exteriorMS}
                    onPress={() => exteriorRevisadoMS(!exteriorMS)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>
                <CheckBox
                    title='Uso de transporte publico o vuelos de avión'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={exteriorMT}
                    onPress={() => exteriorRevisadoMT(!exteriorMT)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>
                <CheckBox
                    title='Comer al aire libre'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={exteriorMA}
                    onPress={() => exteriorRevisadoMA(!exteriorMA)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>
                <CheckBox
                    title='Asistir a consulta medica o al dentista'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={exteriorMD}
                    onPress={() => exteriorRevisadoMD(!exteriorMD)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>
                <CheckBox
                    title='Pasar la noche en un hotel o motel'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={exteriorMH}
                    onPress={() => exteriorRevisadoMH(!exteriorMH)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>


                <Text style={styles.txtSub}></Text>
                <Text style={styles.txtSub}>Activides con riesgo Alto:</Text>
                <CheckBox
                    title='Asistir a un bar o restaurante'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={interiorA}
                    onPress={() => interiorRevisadoA(!interiorA)}
                ></CheckBox>
                <CheckBox
                    title='Actividades en interiores (Discoteca, concierto de música, cine, gym)'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={interiorAN}
                    onPress={() => interiorRevisadoAN(!interiorAN)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>
                <CheckBox
                    title='Asistir a un evento deportivo (basketball, futbol)'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={interiorAT}
                    onPress={() => interiorRevisadoAT(!interiorAT)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>
                <CheckBox
                    title='Visitar un hospital'
                    checkedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/comprobar.png')} />}
                    uncheckedIcon={<Image style={{ width: 25, height: 25 }} source={require('../Recursos/detener.png')} />}
                    checked={interiorAH}
                    onPress={() => interiorRevisadoAH(!interiorAH)}
                    style={{ marginBottom: 20 }}
                ></CheckBox>
               
            </View>

            <View style={styles.subCcontainer}>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,
                    backgroundColor: '#e74c3c',
                    height: 50,
                    borderRadius: 20,
                }}>
                    <Text style={styles.txt}>Calculo de riesgo</Text>
                </TouchableOpacity>
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
        borderRadius: 10,
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
    subContainerTitulo: {
        borderRadius: 15,
        borderColor: '#3498db',
        marginHorizontal: 20,
        marginTop: 5,
        padding: 15,
        flex: 1,
        //borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
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
        borderColor: "#3498db",
        marginBottom: 20,

    },
    txtI: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        color: '#3498db'
    },
    txtSub: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 25,
        color: '#3498db'
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
    titulo: {
        fontSize: 27,
        color: "#2980b9",
        fontWeight: 'bold',
        marginTop: 20,
    },

});

export default Riesgo;