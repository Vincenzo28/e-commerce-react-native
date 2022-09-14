import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { signup } from "../store/actions/authUser";
import { useDispatch } from "react-redux";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onPressSignup = () => {
    dispatch(signup(email, password));
    setEmail('')
    setPassword('')
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>SIGNUP</Text>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          keyboardType="email-address"
          value={email}
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          placeholder="email"
        />
        <Text style={styles.title}>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          placeholder="password"
        />
      </View>

      <View
        style={{
          marginTop: 100,
          marginLeft: 105,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={onPressSignup} style={styles.button}>
          <View>
            <Text>Registrati</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 50,
            borderBottomWidth: 1,
            borderColor: "#00c2ff",
          }}
          onPress={() => navigation.navigate("Accedi")}
        >
          <Text style={{ fontSize: 20, color: "#00c2ff" }}>Vai al login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 350,
    height: 40,
    padding: 5,
    marginTop: 10,
    borderRadius: "5px",
  },
  title: {
    fontSize: 20,
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: "flex-start",
    paddingLeft: 20,
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    width: 150,
    backgroundColor: "#00C2FF",
    borderRadius: 10,
  },
});

export default SignUp;
