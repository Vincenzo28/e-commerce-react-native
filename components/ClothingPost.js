import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ClothingPost = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>{props.title}</Text>
          <Text numberOfLines={1}>{props.description}</Text>
        </View>
        <View>
          <Text style={{ marginTop: 12 }}>{props.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default ClothingPost;
