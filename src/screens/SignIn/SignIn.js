import React, {useState} from "react";
import styles from './styles';
import Bandeira from '../../assets/Bandeira.jpg';
import { stylesheet, TouchableOpacity, Text, View, Image, CustomButton, CustomButtonText } from 'react-native';

import SignInput from "../../components/SignInput";
import SignInputPassword from "../../components/SignInputPassword";
import {useNavigation} from '@react-navigation/native';
import Api from '../../Api';


export default () => {


    const [senhaField, setsenhaField] = useState ('');
    const [emailField, setemailField] = useState ('');
    //const onPress = () => setCount();

    const navigation = useNavigation ();

    const onPress = () => {
        
        if(emailField != '' && senhaField != '') {

            let json = await Api.SignIn(emailField, senhaField);

            if(json.token) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'Menu'}]
                });
            } else {
                alert('E-mail e/ou senha errados!');
            }

        } else {
            alert("Preencha os campos!");
        }    
    }

    const Click = () => {

        navigation.reset({
            routes: [{name: 'Registration'}]
            
        });
    }

 
    return (
        
        <View style={styles.container}>

            <View style={styles.containerA}>
                <Text style={styles.Title}>LOGIN</Text>
                <Image source = {Bandeira} style = {styles.Image}/> 
            </View>
        
            <View style={styles.InputArea} >
                    
                <SignInput 
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t=>setemailField(t)}
                />

                <SignInputPassword
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

            
            <TouchableOpacity 
                onPress={Click} 
                style={styles.Button} 
            >

                <View style={styles.SignMessageButton}>
                    <Text style={styles.Text}>Don´t you have an account ?</Text>
                </View>

                <View style={styles.SignMessageButtonTextBold}>
                    <Text style={styles.Text}>Create new account !!!</Text>
                </View>

            </TouchableOpacity>



        </View>


    );

}