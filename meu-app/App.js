import { View } from "react-native";
import CartaoPerfil from "./CartaoPerfil";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, gap: 12 }}>
      <CartaoPerfil nome="Ana" descricao="Gosta de robótica." destaque />
      <CartaoPerfil nome="Leo" />
    </View>
  );
}
