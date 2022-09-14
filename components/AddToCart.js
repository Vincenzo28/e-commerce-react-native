import { View, Text, StyleSheet } from "react-native";

const AddToCart = () => {
  return (
    <View style={styles.button}>
      <Text>Aggiungi al carrello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    width: 250,
    backgroundColor: "#edad0e",
    borderRadius: 10,
  },
});

export default AddToCart;
