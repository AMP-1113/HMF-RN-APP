import { Text, View } from "../../core/components/Themed";
import { StyleSheet, Image } from "react-native";
import { Band } from "../models/Band";
import BandPhoto from "../constants/BandPhoto";

interface LineupBandCardProps {
  band: Band;
}

const LineupBandCard = ({ band }: LineupBandCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{band.performerName} </Text>
      <BandPhoto size={50} />
    </View>
  );
};

export default LineupBandCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
