import React, { useState, useRef } from 'react';
import {View,StyleSheet,Text, Image,ScrollView, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {Modalize} from 'react-native-modalize';
import JupterDescricao from '../../componnets/planet/Descricao/JupterDescricao'

const Stack =createStackNavigator();

const imgBeckGround1='./img/SolarSystem.jpg'

const fontMontserrat = () =>{
   return Font.loadAsync({
        'Montserrat-Regular':require('../../src/assets/fonts/Montserrat-Regular.ttf')
    });
};

const Jupiter =({navigation })=>{

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
           

            <View style={styles.BackgroundImagem}>
            

            <View style={styles.Container2}>
                
                <View> 
              
                <View style={styles.Container}>
                    <Text  style={styles.TextTitle}> Júpiter</Text>
                </View>
                

                <Text style={styles.textDescricao}>
                Júpiter é o maior planeta do Sistema
                Solar , tanto em diâmetro quanto
                em massa, e é o quinto mais próximo do Sol.
                </Text>
                
                </View>

                <View style={styles.Container}>
               
                <TouchableOpacity onPress={onOpen}> 
                
                <Image 
                    style={styles.ImageJupter}
                    source={require('../../img/Jupiter.jpg')}
                    
                     />
                                         
                </TouchableOpacity>
                <Modalize 
                    ref={modalizeRef}
                    snapPoint={180}
                    modalHeight={500}
                    >
                        <View 
                        
                        style={{
                        flex:1, 
                        height:180,
                        flexDirection: 'row',
                        justifyContent:'space-around',
                        alignItems:'center',
                            
                        }}> 
                        
                        <Text> Testando</Text>
                        <Text> Testando</Text>
                        <Text> Testando</Text>
                        </View>
                    </Modalize>     

                                  
                </View>
               

                <View style={{paddingBottom:30}}> 

                <Text style={styles.textDescricao2}>
                Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes
                a massa de todos os outros planetas em conjunto. É um planeta gasoso,
                junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes
                chamados de planetas jupiterianos ou planetas jovianos, e são os quatro
                gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida.
                </Text>

                <Text style={styles.textDescricao2}>

                Júpiter é composto principalmente de hidrogênio,
                sendo um quarto de sua massa composta de hélio,
                embora o hélio corresponda a apenas um décimo do
                número total de moléculas. O planeta também pode
                possuir um núcleo rochoso composto por elementos
                mais pesados, embora, como os outros planetas gigantes,
                não possua uma superfície sólida bem definida.
                </Text>
                
                <Text style={styles.textDescricao2}>
                Por causa de sua rotação rápida, de cerca de dez horas,
                ele possui o formato de uma esfera oblata (ele possui uma
                suave, mas perceptível, saliência em torno do equador).
                Sua atmosfera externa é visivelmente dividida em diversas
                faixas, em várias latitudes, resultando em turbulência e
                tempestades nas regiões onde as faixas se encontram.
                Uma dessas tempestades é a Grande Mancha Vermelha, uma
                das características visíveis de Júpiter mais conhecidas
                e proeminentes, cuja existência data pelo menos do século
                XVII, quando foi pela primeira vez avistada com telescópio,
                com ventos de até 650  km/h e um diâmetro transversal
                duas vezes maior do que a Terra.
                </Text>

                <Text style={styles.textDescricao2}>
                Júpiter é observável da Terra a olho nu, com uma magnitude
                aparente máxima de -2,94, sendo no geral o quarto objeto mais
                brilhante no céu, depois do Sol, da Lua e de Vênus, embora,
                por vezes, Marte também fique mais brilhante do que Júpiter.
                O planeta era conhecido por astrônomos de tempos antigos e era
                associado com as crenças mitológicas e religiosas de várias culturas.
                Os romanos nomearam o planeta de Júpiter, um deus de sua mitologia.
                </Text>

                <Text style={styles.textDescricao2}>
                Júpiter possui um tênue sistema de anéis e uma poderosa magnetosfera.
                Possui pelo menos 79 satélites, dos quais se destacam os quatro descobertos
                por Galileu Galilei em 1610: Ganimedes, o maior do Sistema Solar, Calisto,
                Io e Europa; os três primeiros são mais massivos que a Lua, sendo que Ganimedes
                possui um diâmetro maior que o do planeta Mercúrio.

                </Text>

                </View>
                <View style={{alignItems:'flex-end', paddingRight:50}}>
                
                <TouchableOpacity> 
               
                    <Icon 
                    name="arrow-right" 
                    size={50} 
                    color="white"
                    onPress={() => navigation.navigate('JupterDescricao')} />
                </TouchableOpacity>
    

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

export default Jupiter;