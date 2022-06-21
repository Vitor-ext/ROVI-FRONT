import React, {useState} from "react";
import styles from './styles';
import carro_ele from '../../assets/carro_ele.png';
import Bandeira from '../../assets/Bandeira.jpg';
import { stylesheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    Alert,
    CustomButton, 
    CustomButtonText } from 'react-native';

import SignInput from "../../components/SignInput";
import {useNavigation} from '@react-navigation/native';


export default () => {

    const navigation = useNavigation ();

    const onPress = () => {

        // Escrever Json para Carga = 1 
        navigation.reset({
            routes: [{name: 'SplashMenu'}]
        });
    }

    return (
        
        <View style={styles.container}>

            <View style={styles.containerA}>
                <Text style={styles.Title}>POWER</Text>
                <Image source = {Bandeira} style = {styles.Image}/> 
            </View>

            <View >
                <Image source = {carro_ele} style = {styles.Carga}/> 
            </View>
            
            <View style={styles.Consumo} >
                <Text style={styles.TitleConsumo}>35%</Text>
            </View>
    

            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.Text}>Habilitar Carregador</Text>
            </TouchableOpacity>


        </View>


    );

}