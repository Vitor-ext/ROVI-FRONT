import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Bandeira from '../../assets/Bandeira.jpg';
import Logoo from '../../assets/Logoo.jpg';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from "react";
import LottieView from 'lottie-react-native';

export default () => {

  const navigation = useNavigation();     // Variavel para nevegação entre telas

  

const styles = StyleSheet.create({
  container: {
    margintop:10,
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  containerA: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    margintop:50,
  },

}); 

return (

  <View style={styles.container}>

        <Image source= {Logoo} style={{width: 400, height: 200}} resizeMode="contain"/> 

  </View>

);
}