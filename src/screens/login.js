import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginPress = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Check if the email is verified 
        if (user.emailVerified) {
          // Proceed with login
          navigation.navigate('HomeScreen');
        } else {
          // Email not verified, display error message
          setMessage("Please verify your email before logging in.");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Image source={require("../../assets/Home/QuizzyKids.png")} style={styles.image} />
          <TextInput
            style={styles.input}
            placeholder="Email ID"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Text style={styles.errorMessage}>{message}</Text>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegisterPress}>
            <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerLink}>Register</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8e44ad',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#341f97',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
  },
  registerLink: {
    color: '#341f97',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
