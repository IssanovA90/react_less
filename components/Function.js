import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

export const Layout = (props) => {
  const { children, style } = props;
  return <View style={{
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    gap: 20,
    ...style,
  }}>{children}</View>;
};

export const InputV1 = (props) => {
  const { onChangeText, value, placeholder } = props;
  return (
    <TextInput
      style={{
        borderWidth: 1,
        borderRadius: 5,
        width: 210,
        height: 40,
        padding: 10,
      }}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export const ButtonV1 = (props) => {
  const { title, onPress, disabled } = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "blue",
        width: 210, height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

      }}
      onPress={onPress} disabled={disabled}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: 'bold'
        }}
      >{title}</Text>
    </TouchableOpacity>
  );
};

