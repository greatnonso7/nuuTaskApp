/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {normalColors} from '../../../colors';
import {hp} from '../../../shared/responsive-dimension';
import {sharedImages} from '../../../images';
import LabelledInput from '../../../shared/labelledInput';

const Login = props => {
  const {goBack} = props.navigation;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorsEmail, setErrorEmail] = React.useState(false);
  const [errorsPassword, setErrorPassword] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.logoContainer}>
          <Image
            source={sharedImages.logo}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <LabelledInput
            label="Email address"
            autoCapitalize="none"
            value={email}
            containerStyle={{
              borderColor: errorsEmail
                ? normalColors.red
                : 'rgba(0, 141, 203, 0.3)',
            }}
            onChangeText={text => setEmail(text)}
            placeholder="Email address"
          />

          <LabelledInput
            label="Password"
            autoCapitalize="none"
            value={password}
            containerStyle={{
              borderColor: errorsEmail
                ? normalColors.red
                : 'rgba(0, 141, 203, 0.3)',
            }}
            onChangeText={text => setPassword(text)}
            placeholder="Enter New Password"
          />

          <TouchableOpacity style={styles.loginButton} onPress={() => true}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
