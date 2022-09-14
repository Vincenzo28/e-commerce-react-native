import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function SavedPost(props) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 80, height: 80 }} source={{ uri: props.image }} />
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>{props.title}</Text>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          {props.description}
        </Text>
      </View>

      <TouchableOpacity onPress={props.onRemovePost}>
        <Image
          source={{
            uri: "https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png",
          }}
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaeaea",
    height: 130,
    width: 340,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
  },
});
