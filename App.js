
import React, { Component } from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Inicio from './Screen/Inicio';
import Principal from './Screen/Principal';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          //backgroundColor="#264d9b"
          backgroundColor="#3498db"
          barStyle="light-content"
        />
        <Stack.Navigator>
          <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{ title: 'Registro de usuario', headerShown: false }}
          >
          </Stack.Screen>
          <Stack.Screen
            name='Principal'
            component={Principal}
            options={{ title: 'Interfaz Principal', headerShown: false }}
          >
          </Stack.Screen>


        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
