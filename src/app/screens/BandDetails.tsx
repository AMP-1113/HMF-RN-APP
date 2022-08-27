import { NavigationProp, ParamListBase, Route } from "@react-navigation/native";
import { BandStackParamList } from "../../../types";
import { Text, View } from "../../core/components/Themed";
import { LineupRootScreenPops } from "../navigation/LineupStackNavigator";

type BandDetailsScreenProps = LineupRootScreenPops<"BandDetails">;

const BandDetailsScreen = ({ route }: BandDetailsScreenProps) => {
  return (
    <View>
      <Text>Band name: {route.params.performerName}</Text>

      {route.params.members.map((member) => {
        return (
          <>
            <Text>Name: {member.name}</Text>
            <Text>Instruments: {member.instruments}</Text>
          </>
        );
      })}
    </View>
  );
};

export default BandDetailsScreen;
