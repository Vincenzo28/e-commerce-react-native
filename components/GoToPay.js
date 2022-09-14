import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoToPay = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Pagamento')}>
      <View style={{ alignItems: "center", marginTop: 40, marginBottom: 20 }}>
        <View style={styles.button}>
          <Text>Procedi con il pagamento</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    width: 250,
    backgroundColor: "#A8C686",
    borderRadius: 10,
  },
});

export default GoToPay;
