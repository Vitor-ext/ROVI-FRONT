import React, {useState} from "react";
import styles from './styles';
import carro_ele from '../../assets/carro_ele.png';
import Bandeira from '../../assets/Bandeira.jpg';
import { stylesheet, TouchableOpacity, Text, View, Image, CustomButton, CustomButtonText } from 'react-native';

import SignInput from "../../components/SignInput";
import {useNavigation} from '@react-navigation/native';


export default () => {


    const [senhaField, setsenhaField] = useState ('');
    const [emailField, setemailField] = useState ('');
   // const onPress = () => setCount();

    const navigation = useNavigation ();

    const Press = () => {
        
        navigation.reset({
            routes: [{name: 'Erro'}]
        });
        
    }

    const onPress = () => {

        navigation.reset({
            routes: [{name: 'Splash'}]
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

            <TouchableOpacity
                style={styles.button}
                onPress={Press}
            >
                <Text style={styles.Text}>Desligar Carregador</Text>
            </TouchableOpacity>

        </View>


    );

}