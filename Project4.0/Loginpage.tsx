import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator'; // Correct import path

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginPage: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (name && email && password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={[styles.jobizz, styles.topText]}>Jobizz</Text>
        <Text style={[styles.welcome, styles.topText]}>Welcome Back 👋</Text>
        <Text style={[styles.loginText, styles.topText]}>Let's Log in and apply to jobs!</Text>
      </View>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or continue with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./assets/Apple.png')} style={styles.iconImage}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./assets/Google.png')} style={styles.iconImage}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('./assets/Facebook.png')} style={styles.iconImage}/>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.noAccountText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  topContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 20,
  },
  topText: {
    marginLeft: 16,
  },
  jobizz: {
    color: '#356899',
    fontSize: 24,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginText: {
    fontSize: 12,
  },
  loginForm: {
    width: 300,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: 300,
  },
  orText: {
    fontSize: 12,
    marginHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: 250,
    paddingBottom: 20,
  },
  iconButton: {
    width: 90,
    height: 50,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  noAccountText: {
    fontSize: 16,
  },
  registerText: {
    fontSize: 16,
    color: 'blue',
    marginLeft: 5,
  },
});

export default LoginPage;
