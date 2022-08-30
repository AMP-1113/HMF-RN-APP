import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Image, FlatList } from "react-native";
import LineupBandCard from "../../core/components/LineupBandCard";
import Spacer from "../../core/components/Spacer";
import { MonoTextBold } from "../../core/components/StyledText";
import { Text, View } from "../../core/components/Themed";
import { Band } from "../../core/models/Band";
import { getBands } from "../../core/service/BandService";

interface LineupScreenProps {
  navigation: NavigationProp<ParamListBase>;
}
interface FlatListParams {
  item: Band;
}

const LineupScreen = ({ navigation }: LineupScreenProps) => {
  const [bands, setBands] = useState<Band[]>([]);
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    getBands()
      .then((results) => {
        setBands(results);
      })
  }, []);

  const LineupScreenHeader = () => {
    return (
      <View style={styles.header}>
        <Spacer height={10} />
        <Image
          source={require("../../../assets/images/hmf-logo.png")}
          style={styles.logo}
        />
        <Spacer height={10} />
        <MonoTextBold style={{ fontSize: 24 }}>2022 Lineup</MonoTextBold>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    );
  };

  const renderBand = ({ item }: FlatListParams) => {
    return (
      <View>
        <LineupBandCard
          band={item}
          action={() => {
            navigation.navigate("BandDetails", item);
          }}
        />
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={LineupScreenHeader}
      data={bands}
      renderItem={renderBand}
      refreshing={isReloading}
    />
  );
};

export default LineupScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    alignItems: "center",
  },
  logo: {
    height: 180,
    width: 180,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
