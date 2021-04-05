import React from 'react';
import {Text,View, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';


const Planet =({navigation})=>{
    return(
        <View>
        <View  style={styles.container}>

            <View style={styles.container2}> 

            <Avatar
                size="large"
                rounded
                source={require('../../img/Jupiter.jpg')}
                onPress={() => navigation.navigate('Jupter')}
                
                />
                <Text style={styles.textTitle} >Júpiter</Text>
                </View>
                
                <View style={styles.container3}> 

                <Avatar
                 size="large"
                rounded
                source={require('../../img/Marte.png')}
                onPress={() => navigation.navigate('Marte')}
                />
                    <Text style={styles.textTitle2}>Marte</Text>
                 </View>
                <View style={styles.container4}> 

                <Avatar
                 size="large"
                rounded
                source={require('../../img/Mercurio.png')}
                onPress={() => navigation.navigate('Mercurio')}
                />
                <Text style={styles.textTitle3}>Mercúrio</Text>
                 </View>
            
            
            </View>
            <View style={styles.segundoContainer}>

                <View style={styles.segundoContainerPlaneta} >
                <Avatar
                 size="large"
                rounded
                source={require('../../img/Plutao.png')}
                onPress={() => navigation.navigate('Plutao')}
                />
                <Text style={styles.textTitle3}>Plutão</Text>

                </View>
                
                <View style={styles.segundoContainerPlaneta2}>
                <Avatar
                 size="large"
                rounded
                source={require('../../img/Saturno.jpg')}
                onPress={() => navigation.navigate('Saturno')}
                />
                <Text style={styles.textTitle3}>Saturno</Text>
                </View>

                <View style={styles.segundoContainerPlaneta3}>
                <Avatar
                 size="large"
                rounded
                source={require('../../img/Terra.png')}
                onPress={() => navigation.navigate('Terra')}
                />
                <Text style={styles.textTitle3}>Terra</Text>

                </View>

            </View>
              <View style={styles.terceiroContainer}>

                <View style={styles.segundoContainerPlaneta} >
                <Avatar
                 size="large"
                rounded
                source={require('../../img/Urano.jpg')}
                onPress={() => navigation.navigate('Urano')}
                />
                <Text style={styles.textTitle3}>Urano</Text>

                </View>
                
                <View style={styles.segundoContainerPlaneta2}>
                <Avatar
                 size="large"
                rounded
                source={require('../../img/Venus.jpg')}
                onPress={() => navigation.navigate('Venus')}
                />
                <Text style={styles.textTitle3}>Vênus</Text>
                </View>
       

                </View>

            </View>                 
      
        
    )
}
const styles = StyleSheet.create({
container:{
       flexDirection:'row',
       justifyContent:'center',
       
},
segundoContainer:{
    flexDirection:'row',
    justifyContent:'center',
    
},
segundoContainerPlaneta:{
    paddingTop:40,
    paddingRight:20
},
segundoContainerPlaneta2:{
    paddingTop:40,
    paddingRight:30,

},
segundoContainerPlaneta3:{
    paddingTop:40,
    paddingRight:2
},
terceiroContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'

},
container2:{
    paddingTop:20,
    paddingLeft:10
},
container3:{
    paddingTop:20,
    paddingLeft:30
},
container4:{
    paddingTop:20,
    paddingLeft:35
},
containerPlaneta:{
        paddingLeft:10,
        flexDirection:'row'
    },
textTitle:{
    paddingLeft:12
},
textTitle2:{
    paddingLeft:20
},
textTitle3:{
    paddingLeft:10
},
})


export default Planet;