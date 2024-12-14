import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

const CardActions = ({ route, navigation }) => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <ScrollView 
      horizontal={true} 
      contentContainerStyle={styles.container} // Mudei para contentContainerStyle
      showsHorizontalScrollIndicator={false} // Para esconder a barra de rolagem
    >
      <View style={styles.containerSub}>
        <View style={styles.containerSubCard}>
          <TouchableOpacity>
            <Image source={require("../../assets/pix.png")} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Pagar</Text>
      </View>

      <View style={styles.containerSub}>
        <View style={styles.containerSubCard}>
          <TouchableOpacity>
            <Image source={require("../../assets/codBarras.png")} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Historico</Text>
      </View>

      <View style={styles.containerSub}>
        <View style={styles.containerSubCard}>
          <TouchableOpacity>
            <Image source={require("../../assets/receita.png")} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Despesa</Text>
      </View>

      <View style={styles.containerSub}>
        <View style={styles.containerSubCard}>
          <TouchableOpacity>
            <Image source={require("../../assets/despesa.png")} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Receita</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flexDirection: "row", // Mantenha os itens na horizontal
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1A1A1A",
    borderRadius: 20,
    padding: 5,
  },
  containerSub: {
    alignItems: "center",
    marginRight: 10, // Adiciona um pequeno espaço entre os itens
  },
  containerSubCard: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#333333",
    width: 62,
    height: 62,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
  },
  textBold: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CardActions;
