import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import JewerlyPost from "../components/JewerlyPost";
import PRODUCTPOST from "../data/FakeDataJewerly";

const JewerlyScreen = (props) => {
  const JewerlyPosts = PRODUCTPOST.map((data) => (
    <JewerlyPost
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
      <View style={styles.container}>{JewerlyPosts}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default JewerlyScreen;
