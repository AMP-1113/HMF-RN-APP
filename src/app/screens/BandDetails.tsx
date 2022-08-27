import { Text, View } from "../../core/components/Themed";
import { Band } from "../../core/models/Band";

interface BandDetailsScreenProps {
    band: Band;
}

const BandDetailsScreen = ({band}: BandDetailsScreenProps) => {
    return(
        <View>
            <Text>{band.performerName}</Text>
        </View>
    );
};

export default BandDetailsScreen;