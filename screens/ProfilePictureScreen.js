import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";

export default function ProfilePictureScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        // Insert text views and profile picture image
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          type="primary"
          onPress={() => {
            navigation.navigate("Location");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
// styles
});