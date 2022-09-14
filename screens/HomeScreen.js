import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Abbigliamento')}>
        <View style={styles.productContainer}>
          <Text style={styles.title}>Abbigliamento</Text>
          <Image
            style={{ height: 170, width: 170, marginBottom: 5, marginTop: 5 }}
            source={{
              uri: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Elettronica')}>
        <View style={styles.productContainer}>
          <Text style={styles.title}>Elettronica</Text>
          <Image
            style={{
              height: 170,
              width: 170,
              marginLeft: 28,
              marginBottom: 5,
              marginTop: 5,
            }}
            source={{
              uri: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Gioielleria')}>
        <View style={styles.productContainer}>
          <Text style={styles.title}>Gioielleria</Text>
          <Image
            style={{
              height: 170,
              width: 170,
              marginLeft: 30,
              marginBottom: 5,
              marginTop: 5,
            }}
            source={{
              uri: "https://images.pexels.com/photos/94843/pexels-photo-94843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
  },
});

export default HomeScreen;
