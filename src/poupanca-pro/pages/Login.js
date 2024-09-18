import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function LoginScreen({navigatation}) {
  return (
    <ImageBackground
      source={{ uri: 'https://url_da_sua_imagem_de_fundo_aqui' }}
      style={styles.background}
    >
      <View style={styles.container}>       
        <Image 
          source={{ uri: 'https://url_do_logo_trybewallet' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Poupança Pro</Text>       
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
        />       
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ExpenseScreen')}  // Função de navegação
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0D6EFD',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0D6EFD',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
