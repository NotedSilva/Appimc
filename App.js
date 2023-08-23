import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import React,{useState} from 'react';
import img1 from './assets/imc.png';


export default function App() {



  const [altura,setAltura]=useState('');
  const [peso,setPeso]=useState('');
  const calcular = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    const imc = weight / (height * height);

    if (imc <= 18.5)
      return Alert.alert(
        "Abaixo do peso!",
        `Seu IMC é  ${imc.toFixed(2)} e está abaixo do peso`
      )
    if (imc >= 18.6 && imc <= 24.9)
       return Alert.alert(
        "Peso ideal",
        `Seu IMC é  ${imc.toFixed(2)} e é considerado ideal`
       )
    if (imc >= 25 && imc <= 29.9)
       return Alert.alert(
        "Levemente acima do peso",
        `Seu IMC é  ${imc.toFixed(2)} e é considerado levemente acima do peso`
       )
    if (imc >= 30 && imc <= 34.9)
       return Alert.alert(
        "obesidade Grau 1",
        `Seu IMC é  ${imc.toFixed(2)} e é obesidade grau 1`
       )
    if (imc >= 35 && imc <= 39.9)
       return Alert.alert(
        "obesidade Grau 2 (Severa)",
        `Seu IMC é  ${imc.toFixed(2)} e é obesidade grau 2 (Severa)`
       )
    if (imc >= 40)
       return Alert.alert(
        "obesidade Grau 3 (Mórbida)",
        `Seu IMC é  ${imc.toFixed(2)} e é obesidade grau 2 (Mórbida)`
       )
  }
  

  return (

    
    <SafeAreaView style={styles.container}>

    <View style={styles.logoContainer}>
      <Image style={styles.logoImage} source={img1} resizeMode="contain" />
      </View>

      <Text style={styles.paragraph}>
        Calculadora IMC </Text>

        <View style={styles.inputContainer}>

        <TextInput
          style={styles.display}
          placeholder='Insira sua altura:'
          placeholderTextColor="#000000"
          keyboardType="numeric"
          value={(altura)}
          onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
        ></TextInput>

         <TextInput
          style={styles.display}
          placeholder='Insira seu peso:'
          placeholderTextColor="#000000"
          keyboardType="numeric"
          value={(peso)}
          onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}
        ></TextInput>

          </View>

          <TouchableOpacity
          onPress={calcular}
          style= {styles.btn}
            ><Text style={styles.btntxt}> Calcular </Text
          ></TouchableOpacity>
      
        
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#84b6f4',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  display: {
    borderWidth: 3,
    borderRadius: 8,
    padding: 10,
    height: 55,
    marginTop: 10,
    paddingHorizontal: 16,
    width: '70%',
    borderColor: '#b2e2f2',
  },
  btn: {
    backgroundColor: '#c3dff9',
    alignItems: 'center',
    padding: 10,
    width: '80%',
    marginTop: 16,
    borderRadius: 10,
  },
  btntxt: {
    color: '#5086c1',
    fontSize: 20,
  },
   inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
   logoContainer: {
    marginTop: -100,
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
