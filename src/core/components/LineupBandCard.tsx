import { Text, View } from "../../core/components/Themed";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Band } from "../models/Band";
import BandPhoto from "./BandPhoto";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface LineupBandCardProps {
  band: Band;
  action: () => void; 
}

const LineupBandCard = ({ band, action }: LineupBandCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <BandPhoto size={100} />
      <Text style={{ fontSize: 20 }}>{band.performerName} </Text>
      <MaterialCommunityIcons name="chevron-right" size={50} color="black" />
    </TouchableOpacity>
  );
}; 

export default LineupBandCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: 'center'
  },
});
