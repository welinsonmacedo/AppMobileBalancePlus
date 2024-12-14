import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CardMain = ({ route, navigation }) => {


 

  return (
    <View style={styles.container}>
      
    
      
      <View style={styles.containerContent}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 20,
    padding: 25,

  },
  containerContent: {
    width:"80%",
    height:148,
    backgroundColor:"#333333",
  },
 
});

export default CardMain;
