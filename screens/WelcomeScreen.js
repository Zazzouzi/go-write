import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import CustomButton, { ButtonType } from "../components/CustomButton";


export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.topContainer}>
               <Image
                   style={styles.image}//https://i.ibb.co/Ct3g53j/dis-image.png
                   source={{ uri: "https://i.ibb.co/Ct3g53j/dis-image.png" }}
                   resizeMode="contain"
               />
               <Text style = {styles.text}> Go Write </Text> 
           </View>

           <View style = {styles.buttonContainer}>
               <CustomButton title="New Journal" type = {ButtonType.PRIMARY} onPress= {() => navigation.navigate('Name')} />
               <CustomButton title="Access Journal" type = {ButtonType.SECONDARY} onPress= {() => navigation.navigate('Journal')} />
           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: 'white',
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 10,
      },
      topContainer: {
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
      },
      text: {
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 45,
      },
      buttonContainer: {
        paddingHorizonatal: 16,
        height: 126,
        width: '100%',
        justifyContent: "space-between",
      },
     
  
});

