import React, { useState } from "react";
import { Layout, ButtonV1, InputV1 } from "./Function";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";

export const SignInScreen = ({ navigation }) => {
  const [verificationEmail, setVerificationEmail] = React.useState('')
  const [verificationPassword, setVerificationPassword] = React.useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = React.useState(false)

  const getUsers = async () => {
    const users = await AsyncStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  const onPressSignIn = async () => {
    const users = await getUsers()
    const user = users.find(element => element.email === verificationEmail && element.password === verificationPassword)
    if (user) {
      setVerificationEmail('')
      setVerificationPassword('')
      navigation.navigate('ToDoScreen');
    }
    else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
      setVerificationEmail('')
      setVerificationPassword('')
    }


  }
  React.useEffect(() => {
    setButtonDisabled(!(verificationEmail.trim() !== "" && verificationPassword.trim() !== ""));
  }, [verificationEmail, verificationPassword]);

  return (
    <Layout>
      <InputV1
        placeholder={"Email"}
        value={verificationEmail}
        onChangeText={(text) => setVerificationEmail(text)}
      />
      <InputV1
        placeholder={"Password"}
        value={verificationPassword}
        onChangeText={(text) => setVerificationPassword(text)}
      />
      <ButtonV1
        title={"Войти"}
        onPress={() => onPressSignIn()}
        disabled={buttonDisabled}
      />
      {error && (
        <View style={{
          width: 230,
          height: 50,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
          <Text style={{
            color: 'white',
            fontWeight: 'bold',
          }}>Вы ввели неверные данные</Text>
        </View>
      )}
    </Layout>
  );
};
