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

const MarteDescricao =({navigation })=>{

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
                Características físicas
                </Text>

                <Text>
                Marte tem aproximadamente metade do diâmetro da Terra.
                Ele é menos denso do que a Terra, tendo cerca de 15% do
                seu volume e 11% de sua massa, resultando em uma aceleração
                da gravidade na superfície que é cerca de 38% da que se observa
                na Terra. A superfície marciana é apenas ligeiramente menor do que
                a área total de terra firme do planeta Terra.
                Apesar de Marte ser maior e mais massivo do que Mercúrio, este tem uma
                densidade mais elevada, com o que os dois planetas têm uma força gravitacional
                quase idêntica na superfície — a de Marte é mais forte por menos do que 1%.
                A aparência vermelho-alaranjada da superfície marciana é causada pelo óxido
                de ferro (III), mais comumente conhecido como hematita, ou ferrugem.
                Pode também parecer caramelo,[9] enquanto outras cores comuns de superfície
                incluem dourado, marrom e esverdeado, dependendo dos minerais presentes.
                Estudo sugere que Marte teve um anel bilhões de anos atrás.
                </Text>

                <Text style={styles.textDescricao2}>

                Estrutura interna
                
                Tal como a Terra, este planeta tem sofrido diferenciação,
                o que resultou em um núcleo metálico denso sobreposto por 
                materiais menos densos.[11] Os modelos atuais do interior
                do planeta implicam uma região central de cerca de 1 794 km
                ± 65 km de raio, composta principalmente por ferro e níquel,
                com cerca de 16-17% de enxofre.[12] Este núcleo de sulfureto
                de ferro é parcialmente fluido e tem duas vezes a concentração
                dos elementos mais leves que existem no núcleo da Terra.
                O núcleo está envolvido por um manto de silicato que formou muitos
                dos acidentes tectônicos e vulcânicos do planeta, mas que parecem
                agora estar dormentes. Além do silício e do oxigênio, os elementos mais
                abundantes na crosta marciana são ferro, magnésio, alumínio, cálcio e potássio.
                A espessura média da crosta do planeta é cerca de 50 quilômetros, com uma espessura
                máxima de 125 km.
                crosta terrestre, com uma média de 40 km de espessura, tem apenas um terço da densidade
                da crosta de Marte, considerando-se a razão dos tamanhos dos dois planetas. A sonda InSight,
                prevista para 2016, irá utilizar um sismógrafo para melhor determinar os modelos do interior do 
                planeta.

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

export default MarteDescricao;