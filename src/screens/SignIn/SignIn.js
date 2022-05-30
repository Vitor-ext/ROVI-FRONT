import React, {useState} from "react";
import styles from './styles';
import Logoo from '../../assets/Logoo.jpg';
import Bandeira from '../../assets/Bandeira.jpg';
import { stylesheet, TouchableOpacity, Text, View, Image, CustomButton, CustomButtonText } from 'react-native';

import SignInput from "../../components/SignInput";
import {useNavigation} from '@react-navigation/native';


export default () => {


    const [senhaField, setsenhaField] = useState ('');
    const [emailField, setemailField] = useState ('');
    const onPress = () => setCount();

    const navigation = useNavigation ();

    const handleSignClick = () => {
        
        navigation.reset({
            routes: [{name: 'Home'}]
        });
        
    }

    const handleMessageButtonClick = () => {

        navigation.reset({
            routes: [{name: 'Erro'}]
        });
    }

    return (
        
        <View style={styles.container}>

            <View style={styles.containerA}>
                <Text style={styles.Title}>LOGIN</Text>
                <Image source = {Bandeira} style = {styles.Image}/> 
            </View>
        
            <View style={styles.InputArea}>
                    
                <SignInput 
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t=>setemailField(t)}
                />

                <SignInput 
                    placeholder="Senha"
                    value={senhaField}
                    onChangeText={t=>setsenhaField(t)}
                />

            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.Text}>Login</Text>
            </TouchableOpacity>

            
            <View style={styles.Button} OnPress={handleMessageButtonClick}>

                <View 
                    style={styles.SignMessageButton}>
                        <Text style={styles.Text}>Don´t you have an account ?</Text>
                </View>

                <View 
                    style={styles.SignMessageButtonTextBold}>
                        <Text style={styles.Text}>Create new account !!!</Text>
                </View>

            </View>

        </View>


    );

}