import React, { useState, useRef } from 'react';
import {View,StyleSheet,Text, Image,ScrollView, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';

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
            <TouchableOpacity onPress={onOpen}> 
                
               <Text>Testando</Text>
                                         
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