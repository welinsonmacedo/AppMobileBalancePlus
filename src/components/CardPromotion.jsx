import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const { width } = Dimensions.get("window");

const CardPromotion = ({ route, navigation }) => {

  return (
    <ScrollView
      style={styles.container} 
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer} 
    >
      <View style={styles.containerContent}>
        <Text style={styles.promotionText}>Promoção 1</Text>
      </View>  

      <View style={styles.containerContent}>
        <Text style={styles.promotionText}>Promoção 2</Text>
      </View>
      
      <View style={styles.containerContent}>
        <Text style={styles.promotionText}>Promoção 3</Text>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.promotionText}>Promoção 3</Text>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.promotionText}>Promoção 3</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    padding: 5,
   
  },
  contentContainer: {
    width:"100%",
    flexDirection: "row", 
     justifyContent:"space-between"
  },
  containerContent: {
    width:156, 
    height: 172,
    backgroundColor: "#333333",
    padding: 10,
    marginRight: 10, 
    justifyContent: "center", 
    alignItems: "center",
  },
  promotionText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CardPromotion;
