import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Meu Guia de Estudos</Text>
      <Text>Organização das aulas da semana</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 16,
    backgroundColor: "#fcfcfc",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1e3a8a",
  },
});
