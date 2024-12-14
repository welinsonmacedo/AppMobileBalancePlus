import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CardBalance = ({ route, navigation }) => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <View style={styles.containerSub}>
      
        <Text style={styles.textBold}>Saldo</Text>
      
      <View style={styles.containerValue}>
        <Text style={styles.text}>{showBalance ? "R$ 100,00" : "**********"}</Text>

        <TouchableOpacity onPress={toggleBalanceVisibility}>
          <Ionicons
            name={showBalance ? "eye" : "eye-off"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSub: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 20,
    padding: 15,
    paddingLeft: 30,
  },
  containerValue: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
 
    marginBottom: 10,
  },
  text: {
    color: "#fff",
  },
  textBold: {
    color: "#fff",
    fontWeight:"bold"
  },
});

export default CardBalance;
