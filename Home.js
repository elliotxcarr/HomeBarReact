import React, { useState } from 'react'
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, ImageBackground, PixelRatio} from 'react-native';
import { TouchableHighlight,ScrollView, Dimensions,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const elements =
 [{url: require('./assets/beer.jpg'), title:'Beers',id:1},
{url:require('./assets/wine2.jpg'), title:'Wines',id:2},
{url:require('./assets/cocktails.jpg'),title:'Cocktails',id:3},
{url:require('./assets/nonalc.png'),title:'Non-Alcoholic',id:4},
{url:require('./assets/bartender.jpg'),title:'Create Your Own',id:5}]



var windowWidth = Dimensions.get('window').width;


const Home =()=>{

   
   
    
    
    return(

        <View style={styles.container}>
            <View style={styles.toolbar}>
                
                <TouchableHighlight style={styles.backArrow}   >
                
                 <Icon name="search-circle-outline"  size={50} color="lightgreen" /> 
                </TouchableHighlight>
                
                <Image style={styles.logo} source={require('./assets/logo.png')}/>

                <StatusBar style='auto'/>
            </View>
            
            <View style={styles.carousel}>

            <ScrollView pagingEnabled horizontal>

                {elements.map((element,index)=>(
                    <ImageBackground key={index} style={styles.card}>
                    <Image
                    key={index}
                    source={element.url}
                    style={styles.images}/>
                    
                        <Text key={element.title} style={styles.cardtext}>{element.title}</Text>
                    
                    
                    </ImageBackground>
                ))}
                
                </ScrollView>

               
            </View>
            
            
        </View>
          
          )
}


export default Home



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#35353D'
    },
    toolbar:{
        width:'100%',
        height:70,
        backgroundColor:'#62626D',
        alignItems:'center',
        justifyContent:'center',
        elevation:50
    },
    logo:{
        height: 50,
        width: 150,
        
    },
    backArrow:{
        position:'absolute',
        left:20,
        
    },
    
    carousel:{
        
        alignItems:'center',
        top:20,
        
        elevation:0,
        
    },
    images:{
        width: windowWidth - 14,
        height:200,
    
        
        borderRadius:15
    },
    card:{
        width:windowWidth - 14,
        backgroundColor:'#62626D',
        marginEnd:7,
        marginStart:7,
        borderRadius:15
        
    },
    cardtext:{
        color:'white',
        fontSize:40,
        padding:15
    },
    scrollThing:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        alignSelf:'center'
    },
    scrollText:{
        color:'#35353D', padding:5
    },
    activeScrollText:{
        color:'white', padding:5
    }
})

