import { StyleSheet, Image } from "react-native";

import { Text, View } from "../../core/components/Themed";
import { RootTabScreenProps } from "../../../types";
import Spacer from "../../core/components/Spacer";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/hmf-logo.png")}
        style={{ height: 200, width: 200 }}
      />
      <Spacer height={20} />
      <View style={{ width: "75%" }}>
        <Text style={styles.title}>
          World’s largest local music festival – hosted in Detroit’s beloved
          enclave of Hamtramck
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "justify",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
