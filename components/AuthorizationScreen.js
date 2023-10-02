import React from "react";
import { ButtonV1, Layout } from "./Function";
import { StyleSheet } from "react-native";

export const AuthorizationScreen = ({ navigation }) => {
    return (
        <Layout style={styles.layout}>
            <ButtonV1 title={"Регистрация"}
                onPress={() =>
                    navigation.navigate('SignUpScreen')} />
            <ButtonV1 title={"Вход"}
                onPress={() =>
                    navigation.navigate('SignInScreen')} />
        </Layout>
    )
}
const styles = StyleSheet.create({
    layout:{
        
    }
})




