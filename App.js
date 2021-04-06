import React from 'react';
import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import Planet from './componnets/planet/Planet';
import Jupter from './componnets/planet/Jupter';
import Marte from './componnets/planet/Marte';
import Mercurio from './componnets/Mercurio';
import Plutao from './componnets/Plutao';
import Saturno from './componnets/Saturno';
import Terra from './componnets/Terra';
import Urano from './componnets/Urano';
import Venus from './componnets/Venus';
import JupterDescricao from './componnets/planet/Descricao/JupterDescricao';
import MarteDescricao from './componnets/planet/Descricao/MarteDescricao'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const imgBeckGround='./img/planeta.jpg'

const Stack =createStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer initialRouteName='Planet'>

        
    <Stack.Navigator >
    <Stack.Screen name="Planet" component={Planet} options={{ title: 'Sistema Solar' }}  />
    <Stack.Screen name="Jupter" component={Jupter} options={{ title: 'Júpiter' }}  />
    <Stack.Screen name="Marte" component={Marte} options={{ title: 'Marte' }}  />
    <Stack.Screen name="Mercurio" component={Mercurio} options={{title: 'Mercúrio'}}/>
    <Stack.Screen name="Plutao" component={Plutao} options={{title: 'Plutão'}}/>
    <Stack.Screen name="Saturno" component={Saturno} options={{title: 'Saturno'}}/>
    <Stack.Screen name="Terra" component={Terra} options={{title: 'Terra'}}/>
    <Stack.Screen name="Urano" component={Urano} options={{title: 'Urano'}}/>
    <Stack.Screen name="Venus" component={Venus} options={{title: 'Vênus'}}/>
  

    <Stack.Screen name="JupterDescricao" component={JupterDescricao} options={{ title: 'Júpiter' }}  />
    <Stack.Screen name="MarteDescricao" component={MarteDescricao} options={{ title: 'Marte' }}  />
    </Stack.Navigator>


    </NavigationContainer>

   
    );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  readerImage:{
    flex:1, 
    justifyContent:'center',
    resizeMode:'cover',
    alignItems:'center',
    height:600,
    width:400
  },
})
