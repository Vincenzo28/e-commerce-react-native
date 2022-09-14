import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import img from "../assets/happyFace.png";
import {clearCart} from '../store/actions/clearCart'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const PaymentSuccess = () => {
const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(clearCart())
  },)

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 100, justifyContent:'center', alignItems:'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 100 }}>
          Pagamento avvenuto con successo!
        </Text>
        <Image source={img} style={{ width: 200, height: 150 }} />
      </View>

      <View>
        <Text style={{ fontSize: 15, width: 380, textAlign: "center" }}>
          Presto riceverai un’ email con le informazioni riguardo la consegna.
        </Text>
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
  },
});

export default PaymentSuccess;
