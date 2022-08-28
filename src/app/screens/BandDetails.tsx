import { ScrollView, StyleSheet } from "react-native";
import { MonoTextBold } from "../../core/components/StyledText";
import { Text, View } from "../../core/components/Themed";
import { LineupRootScreenProps } from "../navigation/LineupStackNavigator";

type BandDetailsScreenProps = LineupRootScreenProps<"BandDetails">;

const BandDetailsScreen = ({ route }: BandDetailsScreenProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MonoTextBold style={{ fontSize: 24 }}>
          {route.params.performerName}
        </MonoTextBold>

        {route.params.members.map((member) => {
          return (
            <>
              <Text>Name: {member.name}</Text>
              <Text>Instruments: {member.instruments}</Text>
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default BandDetailsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
