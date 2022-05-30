import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from "react";
import styles from '../Splash/styles';
import LottieView from 'lottie-react-native';
import Logoo from '../../assets/Logoo.jpg';

export default () => {

  const navigation = useNavigation();     // Variavel para nevegação entre telas

  const Apploader = () => {
    return (
        <LottieView source={require('../../assets/45902-loader-newton-cradle.json')} autoPlay loop />
    );
  };

  return (

    <View style={styles.container}>

        <Apploader style={{width: 50, height: 100}} resizeMode="contain"/> 

    </View>

    /*    # Teste para Inclusão do Logo 
    
    <View style={styles.containerA}>
    <Image source= {Logoo} style={{width: 400, height: 200}} resizeMode="contain"/> 
    </View>*/


  );
}