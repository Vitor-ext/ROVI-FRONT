import React, {useState} from "react";
import styles from '../Menu/styles';
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


export default () => {

    const [Id] = useState ('');
    const navigation = useNavigation ();

    const onPress1 = (req) => {
        Api
          .get("/Veiculo/listarVeiculoUser",{
            //Ids: Veiculos.tblUsuarioId
    })
      .then((response) => {
         console.log(response.data);
         navigation.navigate("Menu");
      })
      .catch((e) => {
        Alert.alert('Erro', 'Usuário ou senha inválidos')
        console.log(e);
      });
    }

    const onPress2 = () => {
        
        navigation.reset({
            routes: [{name: 'Card'}]
        });
        
    }

    const onPress3 = () => {
        
        navigation.reset({
            routes: [{name: 'Car'}]
        });
        
    }

    const onPress4 = () => {
        
        navigation.reset({
            routes: [{name: 'Erro'}]
        });
        
    }

    const onPress5 = () => {
        
        navigation.reset({
            routes: [{name: 'Erro'}]
        });
        
    }

    const onPress6 = () => {
        
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
        
    }



    return (
        
        <View style={styles.container}>
            

            <View style={styles.containerA}>
                <Text style={styles.Title}>Menu</Text>
                <Image source = {Bandeira} style = {styles.Image}/> 
            </View>
                    

            <TouchableOpacity
                style={styles.button}
                onPress={onPress1}
            >
                <Text style={styles.Text}>Carregar Veiculo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress2}
            >
                <Text style={styles.Text}>Cadastrar Cartão</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.button}
                onPress={onPress3}
            >
                <Text style={styles.Text}>Cadastrar Veiculo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress4}
            >
                <Text style={styles.Text}>Melhor Trajeto</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress5}
            >
                <Text style={styles.Text}>Configuração</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress6}
            >
                <Text style={styles.Text}>Sair</Text>
            </TouchableOpacity>

        </View>


    );

}