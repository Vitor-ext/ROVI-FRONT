import React from 'react'; 
//import {createAppContainer} from "react-navigation" 
import { createStackNavigator } from '@react-navigation/stack';


import Erro from '../screens/Erro/Erro';              // Importar Telas Para o Projeto Principal
import Home from '../screens/Home/Home';              // Importar Telas Para o Projeto Principal
import SignIn from '../screens/SignIn/SignIn';              // Importar Telas Para o Projeto Principal
import Registration from '../screens/Registration/Registration';              // Importar Telas Para o Projeto Principal
import Splash from '../screens/Splash/Splash';              // Importar Telas Para o Projeto
import Car from '../screens/Car/Car';              // Importar Telas Para o Projeto


const Stack= createStackNavigator(); 
  
export default () => (
    <Stack.Navigator
            initialRouteName="Registration"  /*Definindo Tela Principal*/    
            screenOptions={{
            headerShown: false /*Ocultando Cabeçario*/  
        }}  
    >
        <Stack.Screen name="Erro" component={Erro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Car" component={Car} />
    
            
    </Stack.Navigator>   
);
