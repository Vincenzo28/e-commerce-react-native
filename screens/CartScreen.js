import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import SavedPost from "../components/SavedPost";
import EmptyCart from "../components/EmptyCart";
import GoToPay from "../components/GoToPay";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removePost } from "../store/actions/removePost";

const CartScreen = () => {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);
  const savedPostList = useSelector((state) => state.savedPost);

  useEffect(() => {
    changeScreen();
  });

  const myPosts = savedPostList.savedItems.map((post) => (
    <SavedPost
      onRemovePost={() => dispatch(removePost(post.key))}
      title={post.title}
      image={post.image}
      description={post.description}
      key={post.key}
    />
  ));

  function changeScreen() {
    if (myPosts.length > 0) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }
  const screen = isSaved ? myPosts : <EmptyCart />;
  const button = isSaved ? <GoToPay /> : null;
  return (
    <ScrollView style={{ paddingTop: 80, backgroundColor: "#fff" }}>
      <View style={styles.container}>{screen}</View>
      <View>{button}</View>
    </ScrollView>
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

export default CartScreen;
