import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import CustomButton, { ButtonType } from "../components/CustomButton";


export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: 'white',
        alignItems: 'center',
        justifyContent: "space-between",
      },
      topContainer: {
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
      },
      text: {
        fontsize: 24,
        color: 'red',
        fontweight: 'bold',
        textTransform: 'uppercase',
      },
      buttonContainer: {
        paddignHorizonatal: 16,
        height: 126,
        width: '100%',
        justifyContent: "space-between",
      },
     
  
});