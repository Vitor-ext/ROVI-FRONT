import React, {useState} from "react";
import styles from '../Car/styles';
import Logoo from '../../assets/Logoo.jpg';
import Bandeira from '../../assets/Bandeira.jpg';
import { stylesheet, TouchableOpacity, Text, View, Image, CustomButton, CustomButtonText } from 'react-native';

import SignInput from "../../components/SignInput";
import {useNavigation} from '@react-navigation/native';


export default () => {


    const [ApelidoField, setApelidoField] = useState ('');
    const [CPFField, setCPFField] = useState ('');
    const [placaField, setplacaField] = useState ('');
    const [renavamField, setrenavamField] = useState ('');
    const [chassiField, setchassiField] = useState ('');
    const [modeloField, setmodeloField] = useState ('');
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
                <Text style={styles.Title}>VEICULO</Text>
                <Image source = {Bandeira} style = {styles.Image}/> 
            </View>
        
            <View style={styles.InputArea}>
                    
                    <SignInput 
                        placeholder="CPF"
                        value={CPFField}
                        onChangeText={t=>setCPFField(t)}
                    />
 
                    <SignInput 
                        placeholder="Apelido do Carro"
                        value={ApelidoField}
                        onChangeText={t=>setApelidoField(t)}
                    />
                    
                    <SignInput 
                        placeholder="Placa"
                        value={placaField}
                        onChangeText={t=>setPlacaField(t)}
                    />

                    <SignInput 
                        placeholder="chassi"
                        value={chassiField}
                        onChangeText={t=>setchassiField(t)}
                    />

                    <SignInput 
                        placeholder="Renavam"
                        value={renavamField}
                        onChangeText={t=>setrenavamField(t)}
                    />

                    <SignInput 
                        placeholder="Modelo"
                        value={modeloField}
                        onChangeText={t=>setmodeloField(t)}
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