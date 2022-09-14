import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons'; 

const HeaderButton = (props) => {
  return (
    <TouchableOpacity style={{marginRight: 5}} onPress={props.onPressRight}>
        <View>
        <SimpleLineIcons name="logout" size={24} color="black" />
        </View>
    </TouchableOpacity>
  );
};

export default HeaderButton;
