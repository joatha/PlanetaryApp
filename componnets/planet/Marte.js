import React, { useState, useRef } from 'react';
import {View,StyleSheet,Text, Image,ScrollView, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';

const Stack =createStackNavigator();

const fontMontserrat = () =>{
    return Font.loadAsync({
         'Montserrat-Regular':require('../../src/assets/fonts/Montserrat-Regular.ttf')
     });
 };
 
 const Marte =({navigation })=>{
 
     const modalizeRef = useRef(null)
     function onOpen(){
         modalizeRef.current?.open();
     }
 
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
           
               <Text>
                   Marte é o quarto planeta a partir do Sol, 
                   o segundo menor do Sistema Solar. 
                   Batizado em homenagem ao deus romano da guerra,
                   muitas vezes é descrito como o "Planeta Vermelho",
                   porque o óxido de ferro predominante em sua superfície
                   lhe dá uma aparência avermelhada.
                </Text>

                <Text>
                Marte é um planeta rochoso com uma atmosfera fina,
                com características de superfície que lembram tanto
                as crateras de impacto da Lua quanto vulcões, vales,
                desertos e calotas polares da Terra. 
                </Text> 

                <Text>
                O período de rotação e os ciclos sazonais de Marte são
                também semelhantes aos da Terra, assim como é a inclinação
                que produz as suas estações do ano. Marte é o lar do Monte
                Olimpo, a segunda montanha mais alta conhecida no Sistema Solar
                (a mais alta em um planeta), e do Valles Marineris, um desfiladeiro gigantesco. 
                A suave Bacia Polar Norte, no hemisfério norte marciano, cobre cerca de 40% do
                planeta e pode ser uma enorme marca de impacto.
                </Text> 

                <Text>
                Marte tem duas luas conhecidas,Fobos e Deimos, que são pequenas e de forma irregular. 
                Estas luas podem ser asteroides capturados, semelhante ao 5261 Eureka,
                um asteroide troiano marciano.
                </Text>

                <Text>
                Marte está sendo explorado por oito espaçonaves atualmente:
                seis em órbita — Mars Odyssey, Mars Express, Mars Reconnaissance
                Orbiter, Mars Atmosphere and Volatile Evolution Missile – MAVEN,
                Mars Orbiter Mission e ExoMars Trace Gas Orbiter — e duas na superfície
                — Mars Science Laboratory Curiosity e o lander InSight. Entre as espaçonaves
                desativadas que estão na superfície marciana estão a sonda Spirit e várias outras
                sondas e rovers, como a Phoenix, que completou sua missão em 2008 e o Opportunity.
                </Text>
                
                <TouchableOpacity> 
               
               <Icon 
                name="arrow-right" 
                size={50} 
                color="white"
                onPress={() => navigation.navigate('MarteDescricao')} />
                </TouchableOpacity>

 
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
  
})

export default Marte;