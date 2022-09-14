import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { savePost } from "../store/actions/savePost";
import { useState } from "react";
import AddToCart from "../components/AddToCart";

const ProductPage = ({ route }) => {
  const image = route.params.image;
  const title = route.params.title;
  const description = route.params.description;
  const price = route.params.price;

  let number = 1;
  const [count, setCount] = useState(number);
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);

  // Logica per aggiungere nel carrello
  const onPressSave = () => {
    const postToSave = {
      image: route.params.image,
      title: route.params.title,
      description: route.params.description,
      key: route.params.id,
    };

    dispatch(savePost(postToSave));
    setIsSaved(true);
  };
  const button = isSaved ? (
    <TouchableOpacity disabled={true}>
      <View style={styles.button}>
        <Text>Prodotto aggiunto</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <AddToCart />
  );

  // Logica per aumentare o diminuire la quantità del prodotto
  const onPressIncrease = () => {
    setCount(count + 1);
  };
  const onPressDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text style={{ margin: 10, fontWeight: "600", fontSize: 22 }}>
        {title}
      </Text>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={{ margin: 10, fontSize: 20 }}>{description}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ margin: 10, fontWeight: "600", fontSize: 25 }}>
          {price}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "centre",
            marginRight: 20,
          }}
        >
          <TouchableOpacity
            style={{ marginRight: 20, borderWidth: 1, padding: 10 }}
            onPress={onPressDecrease}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={{ marginRight: 20 }}>{count}</Text>
          <TouchableOpacity
            style={{ borderWidth: 1, padding: 10 }}
            onPress={onPressIncrease}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{ margin: 10, fontSize: 16 }}>Resi GRATUITI</Text>
      <Text style={{ marginLeft: 10, fontSize: 16 }}>
        Tutti i prezzi includono l'IVA.
      </Text>
      <TouchableOpacity onPress={onPressSave}>
        <View style={{ alignItems: "center", marginTop: 25, marginBottom: 20 }}>
          {button}
        </View>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          margin: 20,
          borderWidth: 1,
          borderColor: "grey",
        }}
      >
        <View style={{ borderBottomColor: "grey", borderBottomWidth: 1 }}>
          <Text style={{ margin: 10, fontSize: 15 }}>
            Venduto e spedito da T.I.S.
          </Text>
        </View>
        <View>
          <Ionicons style={{ margin: 10 }} name="car" size={24} color="black" />
          <Text style={{ margin: 10, fontSize: 15 }}>
            1-3 giorni lavorativi
          </Text>
          <Text style={{ margin: 10, fontSize: 15 }}>Consegna gratis</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    margin: 5,
  },
  image: {
    width: 380,
    height: 380,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    width: 250,
    backgroundColor: "orange",
    borderRadius: 10,
  },
});

export default ProductPage;
