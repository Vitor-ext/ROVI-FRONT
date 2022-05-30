import React, {useState} from "react";
import styles from '../Registration/styles';
import Logoo from '../../assets/Logoo.jpg';
import Bandeira from '../../assets/Bandeira.jpg';
import { stylesheet, TouchableOpacity, Text, View, Image, CustomButton, CustomButtonText } from 'react-native';

import SignInput from "../../components/SignInput";
import {useNavigation} from '@react-navigation/native';


export default () => {


    const [senhaField, setsenhaField] = useState ('');
    const [emailField, setemailField] = useState ('');
    const [nomeField, setnomeField] = useState ('');
    const [CPFField, setCPFField] = useState ('');
    const [placaField, setplacaField] = useState ('');
    const [renavamField, setrenavamField] = useState ('');
    const [chassiField, setchassiField] = useState ('');
    const [senhacofField, setsenhacofField] = useState ('');
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
                <Text style={styles.Title}>CADASTRO</Text>
                <Image source = {Bandeira} style = {styles.Image}/> 
            </View>
        
            <View style={styles.InputArea}>
                    
            <SignInput 
                        placeholder="Nome Completo"
                        value={nomeField}
                        onChangeText={t=>setnomeField(t)}
                    />

                    <SignInput 
                        placeholder="CPF"
                        value={CPFField}
                        onChangeText={t=>setCPFField(t)}
                    />
                    
                    <SignInput 
                        placeholder="Email"
                        value={emailField}
                        onChangeText={t=>setemailField(t)}
                    />

                    <SignInput 
                        placeholder="Digite uma Senha"
                        value={senhaField}
                        onChangeText={t=>setsenhaField(t)}
                    />

                    <SignInput 
                        placeholder="Digite a Senha Novamente"
                        value={senhacofField}
                        onChangeText={t=>setsenhacofField(t)}
                    />

            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.Text}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.Text}>Cancelar</Text>
            </TouchableOpacity>

        </View>


    );

}