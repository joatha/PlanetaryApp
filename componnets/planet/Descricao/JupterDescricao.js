import React, { useState } from 'react';
import {View,StyleSheet,Text, Image,ScrollView, ImageBackground} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {createStackNavigator} from '@react-navigation/stack';

const Stack =createStackNavigator();

const imgBeckGround1='./img/SolarSystem.jpg'

const fontMontserrat = () =>{
   return Font.loadAsync({
        'Montserrat-Regular':require('../../../src/assets/fonts/Montserrat-Regular.ttf')
    });
};

const JupterDescricao =({navigation })=>{

const[fontLoaded, setfontLoaded]= useState(false)

   if(!fontLoaded){
       return(
         <AppLoading 
            startAsync={fontMontserrat}
            onError={()=>console.log('ERROR')}
            onFinish={()=>{
            setfontLoaded(true)           
       }}

       />
       );
   }
    return(
        <ScrollView>
            <View style={styles.BackgroundImagem}>
           

            <View style={styles.Container2}>
                
               <View style={{paddingBottom:30}}> 

                <Text style={styles.textDescricao2}>
                Várias sondas espaciais visitaram Júpiter,
                todas elas de origem estadunidense.
                A Pioneer 10 passou por Júpiter em dezembro
                de 1973, seguida pela Pioneer 11, cerca de
                um ano depois. A Voyager 1 passou em março
                de 1979, seguida pela Voyager 2 em julho do
                mesmo ano. A sonda espacial Galileu entrou 
                na órbita de Júpiter em 1995, enviando uma
                sonda através da atmosfera no mesmo ano e conduzindo
                 múltiplas aproximações com os satélites galileanos até 2003. 

                </Text>

                <Text style={styles.textDescricao2}>

                A sonda Galileu também presenciou o impacto
                do cometa Shoemaker-Levy 9 em Júpiter em 1994,
                possibilitando a observação direta deste evento.
                Outras missões incluem as sondas Ulysses, Cassini-Huygens
                e New Horizons, que utilizaram o planeta para aumentar sua
                velocidade e ajustar a sua direção aos seus respectivos objetivos. 
                A última sonda a visitar o planeta foi Juno, que entrou em órbita
                em 4 de julho de 2016. Um futuro alvo de exploração é Europa, satélite
                que provavelmente possui um oceano líquido coberto de gelo.

                </Text>
                              
            </View>
                </View>
                    </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    ImageJupter:{
        width:100,
        height:100,
        borderRadius:60,
 
    },
    Container:{
        alignItems:'center',
        justifyContent:'center',
       
    },
    Container2:{
        backgroundColor:'orange',
        paddingTop:30,
        paddingBottom:30,
        
        
    },
    
    TextTitle:{
        fontSize:20,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:30
    

    },
    textDescricao:{
        fontFamily:'Montserrat-Regular',
        alignItems:'center',
        fontSize:16,
        paddingStart:20,
        paddingVertical:30,
       
      
    },
    textDescricao2:{
        fontFamily:'Montserrat-Regular',
        alignItems:'center',
        fontSize:16,
        paddingStart:20,
        paddingVertical:30,
        paddingEnd:20,
        textAlign:'justify'
        
    },
    BackgroundImagem:{
     
  
    }
})

export default JupterDescricao;