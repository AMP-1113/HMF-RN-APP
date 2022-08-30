import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { MonoText, MonoTextBold } from "../../core/components/StyledText";
import { Text, View } from "../../core/components/Themed";
import { LineupRootScreenProps } from "../navigation/LineupStackNavigator";
import BandPhoto from "../../core/components/BandPhoto";
import Spacer from "../../core/components/Spacer";

type BandDetailsScreenProps = LineupRootScreenProps<"BandDetails">;

const ShowDetailsButton = () => {
  return (
    <TouchableOpacity>
      <View style={{ borderWidth: 1, padding: 4, borderRadius: 4 }}>
        <MonoTextBold style={{ fontWeight: "700" }}>
          Friday | Ant Hall | 9:30pm
        </MonoTextBold>
      </View>
    </TouchableOpacity>
  );
};

const BandDetailsScreen = ({ route }: BandDetailsScreenProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MonoTextBold style={{ fontSize: 24 }}>
          {route.params.performerName}
        </MonoTextBold>
        <BandPhoto size={100} name={route.params.performerName} />
        <ShowDetailsButton />
        <MonoTextBold>Indie-Punk</MonoTextBold>
        <Spacer height={16}/>
        <MonoTextBold>BIO</MonoTextBold>
        <MonoTextBold>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </MonoTextBold>
        {route.params.members.map((member) => {
          return (
            <>
              <MonoTextBold>MEMBERS</MonoTextBold>
              <MonoText>Name: {member.name}</MonoText>
              <MonoText>Instrument: {member.instruments}</MonoText>
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
