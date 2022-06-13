import React, {useState} from "react";
import styles from '../Car/styles';
import Logoo from '../../assets/Logoo.jpg';
import Bandeira from '../../assets/Bandeira.jpg';
import { stylesheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    Alert,
    CustomButton, 
    CustomButtonText } from 'react-native';
import Api from '../../Api';
import SignInput from "../../components/SignInput";
import {useNavigation} from '@react-navigation/native';
//import tblUsuarioId from "../SignIn/SignIn";

export default () => {


    const [ApelidoField, setApelidoField] = useState ('');
    const [CPFField, setCPFField] = useState ('');
    const [placaField, setplacaField] = useState ('');
    const [marcaField, setmarcaField] = useState ('');
    const [chassiField, setchassiField] = useState ('');
    const [modeloField, setmodeloField] = useState ('');
    
    //const onPress = () => setCount();

    const navigation = useNavigation ();


    const onPress = () => {
        
            Api
                .post("veiculo/cadastrarVeiculo",{
                    "nome_veiculo":ApelidoField,
                    "placa_veiculo":placaField,
                    "chassi_veiculo":chassiField,
                    "modelo_veiculo":modeloField,
                    "marca_veiculo":marcaField,
                    "CPF":CPFField
                })
                    .then((response) => {
                        console.log(response.data);
                        Alert.alert('Uhhhhhhhuuulll', 'Veiculo Cadastrado com Sucesso');
                        navigation.navigate("Menu");   
                    })
                    .catch((e) => {
                    Alert.alert('Erro', 'Dados inválidos')
                    console.log(e);
            }); 

    }

    const Press = () => {

        navigation.reset({
            routes: [{name: 'Menu'}]
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
                        onChangeText={t=>setplacaField(t)}
                    />

                    <SignInput 
                        placeholder="chassi"
                        value={chassiField}
                        onChangeText={t=>setchassiField(t)}
                    />

                    <SignInput 
                        placeholder="Marca"
                        value={marcaField}
                        onChangeText={t=>setmarcaField(t)}
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
                onPress={Press}
            >
                <Text style={styles.Text}>Cancelar</Text>
            </TouchableOpacity>

        </View>


    );

}