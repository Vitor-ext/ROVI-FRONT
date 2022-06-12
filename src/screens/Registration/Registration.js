import React, {useState} from "react";
import styles from '../Registration/styles';
import { AppRegistry, Platform } from 'react-native';
import { stylesheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    Alert,
    CustomButton, 
    CustomButtonText } from 'react-native';
import Logoo from '../../assets/Logoo.jpg';
import Bandeira from '../../assets/Bandeira.jpg';
import Api from '../../Api';
import SignInput from "../../components/SignInput";
import SignInputPassword from "../../components/SignInputPassword";
import {useNavigation} from '@react-navigation/native';



export default () => {

    const [senhaField, setsenhaField] = useState ('');
    const [emailField, setemailField] = useState ('');
    const [nomeField, setnomeField] = useState ('');
    const [CPFField, setCPFField] = useState ('');
    const [senhaConfField, setsenhaConfField] = useState ('');
    //const onPress = () => setCount();

    const navigation = useNavigation ();

    const Press = () => {
        
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
        
    }

    const onPress = async () => {
        if (senhaField===senhaConfField){
           
        Api
            .post("/Usuario/cadastrarUsuario",{
            "nome": nomeField,
            "CPF": CPFField,
            "email": emailField,
            "senha": senhaField,
            "senhaConf": senhaConfField
            })
                .then((response) => {
                    console.log(response.data);
                    Alert.alert('Uhhhhhhhuuulll', 'Usuário Cadastrado com Sucesso');
                    navigation.navigate("SignIn");   
                })
                .catch((e) => {
                Alert.alert('Erro', 'Usuário ou senha inválidos')
                console.log(e);
                }); 
        }else {
            Alert.alert('Erro', 'As senhas devem ser iguais ! ');
        }    
     
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

                    <SignInputPassword 
                        placeholder="Digite uma Senha"
                        value={senhaField}
                        onChangeText={t=>setsenhaField(t)}
                    />

                    <SignInputPassword 
                        placeholder="Digite a Senha Novamente"
                        value={senhaConfField}
                        onChangeText={t=>setsenhaConfField(t)}
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