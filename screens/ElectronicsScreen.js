import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ElectronicsPost from "../components/ElectronicsPost";
import PRODUCTPOST from "../data/FakeDataElectronics";

const ElectronicsScreen = (props) => {
  const ElectronicsPosts = PRODUCTPOST.map((data) => (
    <ElectronicsPost
      image={data.image}
      title={data.title}
      description={data.description}
      price={data.price}
      key={data.id}
      onPress= {() => props.navigation.navigate('Info',{
        id: data.id,
        title:data.title,
        description: data.description,
        price: data.price,
        image: data.image
      })}
    />
  ));
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>{ElectronicsPosts}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ElectronicsScreen;
