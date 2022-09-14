import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const JewerlyPost = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={{ marginRight: 20 }}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ marginTop: 10 }}>
            <Text>{props.title}</Text>
            <Text numberOfLines={1} style={{ marginTop: 10 }}>
              {props.description}
            </Text>
          </View>
          <View>
            <Text style={{ marginTop: 60 }}>{props.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#dddbdb",
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default JewerlyPost;
