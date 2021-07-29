import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import {useState} from 'react';

const Tela = styled.View`
  background-color: #F5CFA4;
  flex: 1;
  align-items: center;
`;
const Titulo = styled.Text`
  margin-top: 30px;
  font-size: 25px;
  
`;
const Input = styled.TextInput`
  padding-left:10px;
  width: 90%;
  background-color: #D99D68;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
 
`;
const Entrada = styled.View`
  width:100%;
  margin-top:10px;
  align-items: center;
`;

const Resultado = styled.View`
  background-color: #D99D68;
  margin-top: 10px;
  width: 100%;
  align-items: center;
`;
const TituloResultado = styled.Text`
  font-size: 20px;
`;
const ItemResultado = styled.Text`
  font-size: 16px;
`;
const BtnView = styled.View`
  width: 80%;
  
  margin-top:20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const BtnCalcular = styled.Button`
  
`;
export default function App() {
  const[conta, alteraConta]= useState();
  const[gorjeta, alteraGorjeta]=useState("0");
  return (
    <Tela>
     <Titulo>Calculadora Gorjeta</Titulo>
      <Entrada>
        <Input keyboardType="numeric" value={conta} onChangeText={function altera(altera){alteraConta(altera)}} placeholder="Digite o valor da conta"/>
      </Entrada> 
      <BtnView>
        <BtnCalcular color= '#B3B379' title= "10%" onPress={() =>{alteraGorjeta(0.1)}}/>
        <BtnCalcular color= '#B3B379' title= "15%" onPress={() =>{alteraGorjeta(0.15)}}/>
        <BtnCalcular color= '#B3B379' title= "20%" onPress={() =>{alteraGorjeta(0.2)}}/>
       </BtnView>
     <Resultado>
        <TituloResultado> Valor da conta </TituloResultado>
        <ItemResultado> R${parseFloat(conta).toFixed(2)} </ItemResultado>
        <TituloResultado> Valor da gorjeta ({parseFloat(100*gorjeta)}%)</TituloResultado>
        <ItemResultado>R${(conta *gorjeta).toFixed(2)} </ItemResultado>
        <TituloResultado> Valor total</TituloResultado>
        <ItemResultado> R${(conta*parseFloat(1+gorjeta)).toFixed(2)} </ItemResultado>
        </Resultado> 

    </Tela>
  );
}
