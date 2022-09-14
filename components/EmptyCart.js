import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import img from '../assets/sadFace.png'
const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Image source={img} style={{ width: 200, height: 150 }} />
      </View>

      <View>
        <Text style={{ fontSize: 20 }}>Nessun articolo nel carrello.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:150
  },
});

export default EmptyCart;
