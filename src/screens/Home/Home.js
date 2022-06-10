import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Logoo from '../../assets/Logoo.jpg';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from "react";
import styles from './styles';

export default () => {

  const navigation = useNavigation();     // Variavel para nevegação entre telas

return (

  <View style={styles.container}>

        <Image source= {Logoo} style={{width: 400, height: 200}} resizeMode="contain"/> 

  </View>

);
}