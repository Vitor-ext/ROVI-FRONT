import React from "react";
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';


const styles  = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex:1,   
        },

        containerA: {
            flexDirection: 'row', 
            height: 40, 
            margin: 10, 
            marginTop: 30,
            alignItems: "center",
            backgroundColor: "#00003f",
            padding: 30,
            },


        InputArea: {
            padding: 40,
        },


        CustomButton: {
            heigth: 40,
            backgroundcolor: '#259',
            borderradius: 30,
            justifycontent: 'center',
            alignitems: 'center',
        },

        Button: {
            heigth: 40,
            backgroundcolor: '#259',
            borderradius: 30,
            justifycontent: 'center',
            alignitems: 'center',
        },

        button: {
            alignItems: "center",
            backgroundColor: "#00003f",
            color: "#FFF",
            padding: 10,
            borderRadius: 50,
            marginTop: 20,
          },


        CustomButtonText: {
            fontsize: 18,
            color: '#FFF',
            margintop: 15,
            marginbottom: 20,
            justifycontent: 'center',
            alignitems: 'center',
        }, 
 

        SignMessageButton: {
            marginTop: 10,
            flexdirection: 'row',
            justifyContent: 'center', 
            color: '#808080',
            alignItems: 'center',
            
        },


        SignMessageButtonText: {
            fontSize: 18,
            color: '#FFF',
            marginRigth: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
  

        SignMessageButtonTextBold: {
            fontSize:  16,
            marginLeft: 5,
            fontWeight: 'bold',
            color: '#FFF',
            alignItems: "center",
            justifyContent: 'center',
        },

        Image: {
            padding: 10, 
            margin: 150, 
            height: 50, 
            width: 80, 
            resizeMode: 'stretch', 
            flexDirection: 'row', 
        },

        Carga: {
            height: 350, 
            width: 400, 
            alignItems: "center",
            resizeMode: 'stretch', 
            flexDirection: 'row', 
        },

        Consumo: {
            height: 80, 
            width: 80, 
            borderRadius: 50,
            backgroundColor: "#00003f",
            alignItems: 'center',
            resizeMode: 'stretch',  
            flexDirection: 'row',
            justifyContent: 'center',
        },

        Title: {
            flexDirection: 'row', 
            justifyContent: 'center', 
            color: "#ffffff", 
            fontSize: 30,
            height: 40, 

          },

          TitleConsumo: {
            flexDirection: 'row', 
            justifyContent: 'center', 
            color: "#ffffff", 
            fontSize: 30,
            height: 40, 
            alignItems: "center",
            justifyContent: 'center',
          },

          Text: {
            alignItems: "center",
            color: "#ffffff",
            fontSize: 18,
          },

});

    export default styles;