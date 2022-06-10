import AsyncStorage from '@react-native-community/async-storage';
import { add } from 'react-native-reanimated';

const ROVI_API = 'http://Localhost4000';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${ROVI_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();        
        return json;
    },
    SignIn: async (email, senha) => {
        const req = await fetch(`${ROVI_API}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, senha})
        });
        const json = await req.json();        
        return json;
    },
    Registration: async (nome, CPF, email, senha, senhaConf) => {
        const req = await fetch(`${ROVI_API}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome, CPF, email, senha, senhaConf})
        });
        const json = await req.json();        
        return json;
    },

    Cartao: async (numero, titular, CPF, validade, CVV, apelido) => {
        const req = await fetch(`${ROVI_API}/cartao`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({numero, titular, CPF, validade, CVV, apelido})
        });
        const json = await req.json();        
        return json;
    },

    Car: async (nome_Veiculo, placa_Veiculo, chassi_Veiculo, modelo_Veiculo, marca_Veiculoo, CPF) => {
        const req = await fetch(`${ROVI_API}/car`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome_Veiculo, placa_Veiculo, chassi_Veiculo, modelo_Veiculo, marca_Veiculoo, CPF})
        });
        const json = await req.json();        
        return json;
    },


};