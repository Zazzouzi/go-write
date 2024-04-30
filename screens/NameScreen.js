import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function NameScreen({ navigation }) {
  const [name, setName] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.contaienr}>
        <Text style = {styles.topContainer}>
          What's your name?
        </Text>
        <TextInput style = {styles.input} placeholder = "Enter your name" value = {name} onChangeText = {setName} />
      </View>
      
      <View style = {styles.buttonContainer}>
          <CustomButton title="Next" type = 'primary' onPress= {() => navigation.navigate("ProfilePicture", {name: name})}  />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input:{
    height: 66,
    fontsize: 20, 
    padding: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    width: '100%',

  },

});