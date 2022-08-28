import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { BandStackParamList } from "../../../types";
import BandDetailsScreen from "../screens/BandDetails";
import LineupScreen from "../screens/LineupScreen";

export type LineupRootScreenProps<Screen extends keyof BandStackParamList> =
  NativeStackScreenProps<BandStackParamList, Screen>;

const Stack = createNativeStackNavigator<BandStackParamList>();

function BandStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lineup"
        component={LineupScreen}
        options={() => ({
          title: "Lineup",
        })}
      />
      <Stack.Screen
        name="BandDetails"
        component={BandDetailsScreen}
        options={({ navigation }) => ({
          title: "Band Details",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialCommunityIcons name={"arrow-left"} size={30} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default BandStackNavigator;
