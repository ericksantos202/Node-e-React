import { StyleSheet, Text, View } from "react-native";

export default function CartaoPerfil({
  nome,
  descricao = "Sem descrição",
  destaque = false,
}) {
  return (
    <View style={[styles.cartao, destaque && styles.destaque]}>
      <Text style={styles.nome}>{nome}</Text>
      <Text>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: { backgroundColor: "#dbeafe", padding: 16 },
  destaque: { borderWidth: 3, borderColor: "#f97316" },
  nome: { fontSize: 22, fontWeight: "bold" },
});
