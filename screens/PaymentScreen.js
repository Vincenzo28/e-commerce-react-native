import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";


const PaymentScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView
        style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}
      >
        <TextInput
          style={styles.input}
          placeholder="inserisci nome e cognome"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="inserisci indirizzo"
          keyboardType="default"
        />
        <View style={styles.container}>
          <Text style={{ marginBottom: 30 }}>Metodo di Pagamento</Text>
          <TextInput
            style={styles.input}
            placeholder="n° di carta "
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="intestatario"
            keyboardType="default"
          />
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <TextInput
              style={styles.littleInput}
              placeholder="mese"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.littleInput}
              placeholder="anno"
              keyboardType="numeric"
            />
          </View>
          <TextInput
            style={styles.littleInput}
            placeholder="CVC"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Grazie!')}>
          <View
            style={{ alignItems: "center", marginTop: 15, marginBottom: 20 }}
          >
            <View style={styles.button}>
              <Text>Paga</Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#B4B3B3",
    width: 350,
    height: "60%",
  },
  littleInput: {
    height: 50,
    width: "30%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    width: 250,
    backgroundColor: "#A8C686",
    borderRadius: 10,
  },
});

export default PaymentScreen;
