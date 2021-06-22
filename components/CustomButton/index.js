import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function CustomButton({ type, content }) {
  const btnColor = type==="primary"? "#333": "white";
  const textColor = type==="primary"? "white": "#333";

  return (
    <Pressable>
      <View style={[styles.btn, {backgroundColor: btnColor}]}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 40,
    paddingVertical: 16,
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textTransform: "uppercase",
    
  }
})