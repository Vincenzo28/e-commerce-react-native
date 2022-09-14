import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import img from "../assets/logo.png";
const IntroductionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 60, fontSize: 60, fontWeight: "bold" }}>
        T.I.S.
      </Text>
      <Text style={{ marginBottom: 100, fontSize: 20, textAlign: "center" }}>
        Il miglior negozio online a tua disposizione 24h su 24h
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.navigate('Iscriviti')}>
          <View style={styles.buttonBlu}>
            <Text>Registrati</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Accedi')}>
          <View style={styles.button}>
            <Text>Accedi</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image style={{ width: 150, height: 200, marginTop:50 }} source={img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#fff'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    width: 150,
    backgroundColor: "#0DD38C",
    borderRadius: 10,
    margin: 20,
  },
  buttonBlu: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    width: 150,
    backgroundColor: "#00C2FF",
    borderRadius: 10,
    margin: 20,
  },
});

export default IntroductionScreen;
