import React, {useState} from "react";
import styles from './styles';
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
import Api from "../../Api";
import SignInput from "../../components/SignInput";
import {useNavigation} from '@react-navigation/native';


export default () => {


    const [ApelidoField, setApelidoField] = useState ('');
    const [CPFField, setCPFField] = useState ('');
    const [NumeroField, setNumeroField] = useState ('');
    const [TitularField, setTitularField] = useState ('');
    const [ValidadeField, setValidadeField] = useState ('');
    const [CVVField, setCVVField] = useState ('');
    //const onPress = () => setCount();

    const navigation = useNavigation ();

    const onPress = () => {
        
            Api
                .post("/Cartao/cadastrarCartao",{
                    "apelido":ApelidoField,
                    "CPF":CPFField,
                    "numero":NumeroField,
                    "titular":TitularField,
                    "validade":ValidadeField,
                    "CVV":CVVField
                })
                    .then((response) => {
                        console.log(response.data);
                        Alert.alert('Uhhhhhhhuuulll', 'Cartão Cadastrado com Sucesso');
                        navigation.navigate("Menu");   
                    })
                    .catch((e) => {
                    Alert.alert('Erro', 'Dados inválidos')
                    console.log(e);
            }); 
        
    }

    const onPress1 = () => {

        navigation.reset({
            routes: [{name: 'Menu'}]
        });
    }

    return (
        
        <View style={styles.container}>
            

            <View style={styles.containerA}>
                <Text style={styles.Title}>CARTÃO</Text>
                <Image source = {Bandeira} style = {styles.Image}/> 
            </View>
        
            <View style={styles.InputArea}>
                    

                    <SignInput 
                        placeholder="Numero"
                        value={NumeroField}
                        onChangeText={t=>setNumeroField(t)}
                    />

                    <SignInput 
                        placeholder="Titular"
                        value={TitularField}
                        onChangeText={t=>setTitularField(t)}
                    />

                    <SignInput 
                        placeholder="CPF"
                        value={CPFField}
                        onChangeText={t=>setCPFField(t)}
                    />

                    <SignInput 
                        placeholder="Validade"
                        value={ValidadeField}
                        onChangeText={t=>setValidadeField(t)}
                    />

                    <SignInput 
                        placeholder="CVV"
                        value={CVVField}
                        onChangeText={t=>setCVVField(t)}
                    />
 
                    <SignInput 
                        placeholder="Apelido do Cartão"
                        value={ApelidoField}
                        onChangeText={t=>setApelidoField(t)}
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
                onPress={onPress1}
            >
                <Text style={styles.Text}>Cancelar</Text>
            </TouchableOpacity>

        </View>


    );

}