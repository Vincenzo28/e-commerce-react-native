import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ClothingPost from "../components/ClothingPost";
import PRODUCTPOST from "../data/FakeDataClothing";

const ClothingScreen = (props) => {
  const ClothingPosts = PRODUCTPOST.map((data) => (
    <ClothingPost
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
    <ScrollView style={{flex:1, backgroundColor:'#fff'}}>
      <View style={styles.container}>{ClothingPosts}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row',
    flexWrap: 'wrap'
  },
});

export default ClothingScreen;
