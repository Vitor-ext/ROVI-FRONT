import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from "react";
import styles from '../Splash/styles';
import LottieView from 'lottie-react-native';

export default (props, params) => {

  const navigation = useNavigation();     // Variavel para nevegação entre telas
  const [estado, setEstado]= useState(false);

  const transicao = (props, params) => {
    console.log(params.rota)
    setEstado(true)
    if (params.rota=='Menu'){
      navigation.reset({
        routes: [{name: 'Menu'}]
  
    });
    } else if (props.rota=='Registration'){
      navigation.reset({
        routes: [{name: 'Registration'}]
  
    });
    }
  }

  useEffect(() =>{
    transicao(props, params)
  },[]);

  const Apploader = () => {
    return (
        <LottieView source={require('../../assets/45902-loader-newton-cradle.json')} autoPlay loop />
    );
  };

  return (

    <View style={styles.container}>
        {(estado)?
        <Apploader style={{width: 50, height: 100}} resizeMode="contain"/> 
        : <></>
      }

    </View>

  );
}