import { stylesheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert,
  CustomButton, 
  CustomButtonText } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from "react";
import styles from '../SplashMenu/styles';
import LottieView from 'lottie-react-native';

export default (props, params) => {

  const navigation = useNavigation();     // Variavel para nevegação entre telas

    const Press = () => {

        navigation.reset({
            routes: [{name: 'Power'}]
        });
    }

    const Bateria = () => {
      return (
          <LottieView source={require('../../assets/bateria.json')} autoPlay loop />
      );
    };


  const Apploader = () => {
    return (
        <LottieView source={require('../../assets/car.json')} autoPlay loop />

    );
  };


   

  return (

    <View style={styles.container}>

      

      <Apploader style={{width: 50, height: 100}} resizeMode="contain"/> 


        <TouchableOpacity
          style={styles.button}
          onPress={Press}
        >
          <Text style={styles.Text}>Desabilitar Carregador</Text>
        </TouchableOpacity>

        
        <View  style={styles.Image}>
          <Bateria/> 
        </View>

    </View>

  );


}