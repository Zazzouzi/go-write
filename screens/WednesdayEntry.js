import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

export default function WednesdayEntry() {
    return (
        <SafeAreaView style={styles.container}>
          <View style = {styles.topContainer}>
          <Text style = {styles.text}>
            Was there a moment that derailed your day?
          </Text>
          </View>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#191259',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "FFFFFF",
    justifyContent: 'space-between',
  },
  topContainer: {
    alignitems: 'center',
    padding: 16,
  },
  
});