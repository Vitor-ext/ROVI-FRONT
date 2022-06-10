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
            padding: 10,
        },


        CustomButton: {
            heigth: 30,
            backgroundcolor: '#259',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },

        button: {
            alignItems: "center",
            backgroundColor: "#00003f",
            color: "#ffffff",
            padding: 10,
            borderRadius: 50,
            marginTop: 10,
          },

          Image: {
            padding: 10, 
            marginHorizontal: 150, 
            height: 50, 
            width: 80, 
            resizeMode: 'stretch', 
            flexDirection: 'row', 
        },

        Title: {
          flexDirection: 'row', 
          justifyContent: 'center', 
          color: "#ffffff", 
          fontSize: 30,
          height: 40, 
        },

          Text: {
            alignItems: "center",
            color: "#ffffff",
            fontSize: 18,
          },

});

    export default styles;