import React, { useState } from "react";
import { Layout, InputV1, ButtonV1 } from "./Function";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);


    const getUsers = async () => {
        const users = await AsyncStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    };

    const generateId = () => {
        const currentDate = new Date();
        return +currentDate;
    };

    const saveNewUser = async (user) => {
        const users = await getUsers();
        users.push(user);
        await AsyncStorage.setItem('users', JSON.stringify(users));
        console.log(users);

    };

    const onPressRegisterButton = () => {
        const user = {
            email: email,
            password: password,
            id: generateId(),
        };
        setEmail("")
        setPassword("")
        saveNewUser(user);
        navigation.navigate('SignInScreen');


    };

    React.useEffect(() => {
        setButtonDisabled(!(email.trim() !== "" && password.trim() !== ""));
    }, [email, password]);

    return (
        <Layout>
            <InputV1
                placeholder={"Email"}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <InputV1
                placeholder={"Password"}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <ButtonV1
                title={"Зарегистрироваться"}
                onPress={() => onPressRegisterButton()}
                disabled={buttonDisabled}
            />
        </Layout>
    );
};
