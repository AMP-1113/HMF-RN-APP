import { StyleSheet, Image, ScrollView } from "react-native";
import { Text, View } from "../../core/components/Themed";
import { RootTabScreenProps } from "../../../types";
import Spacer from "../../core/components/Spacer";
import { getBands } from "../../core/service/BandService";
import { useEffect, useState } from "react";
import Band from "../../core/models/Band";
import { MonoText } from "../../core/components/StyledText";
import Venue from "../../core/models/Venue";
import { getVenues } from "../../core/service/VenueService";

const HomeScreen = ({ navigation }: RootTabScreenProps<"TabOne">) => {
  const [band, setBands] = useState<Band[]>([]);
  const [venue, setVenues] = useState<Venue[]>([]);

  useEffect(() => {
    getBands().then((results) => {
      setBands(results);
    });

    getVenues().then((results) => {
      setVenues(results);
    });

    console.log(band, venue);
  }, []);

  interface BandDisplayProps {
    performerName: string;
    members: string;
    genre: string;
  }

  const BandDisplay = ({ performerName, members, genre }: BandDisplayProps) => {
    return (
      <View style={{ borderWidth: 1 }}>
        <MonoText> Artist: {performerName} </MonoText>
        <MonoText> Members: {members} </MonoText>
        <MonoText> Genre: {genre} </MonoText>
      </View>
    );
  };

  interface VenueDisplayProps {
    venueName: string;
    address: string;
    phoneNumber: string;
  }

  const VenueDisplay = ({
    venueName,
    address,
    phoneNumber,
  }: VenueDisplayProps) => {
    return (
      <View style={{ borderWidth: 1 }}>
        <MonoText> Name: {venueName} </MonoText>
        <MonoText> Address: {address} </MonoText>
        <MonoText> Phone: {phoneNumber} </MonoText>
      </View>
    );
  };

  return (
    <ScrollView>
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
          <Spacer height={30} />
          <MonoText style={{ fontSize: 20 }}>2022 Lineup</MonoText>
          <View>
            {band.map((item, index) => {
              return (
                <>
                  <BandDisplay
                    performerName={item.performerName}
                    members={item.members}
                    genre={item.genre}
                  />
                  <Spacer height={10} />
                </>
              );
            })}
          </View>
          <View>
            {venue.map((item, index) => {
              return (
                <>
                  <VenueDisplay
                    venueName={item.venueName}
                    address={item.address}
                    phoneNumber={item.venuePhone}
                  />
                  <Spacer height={10} />
                </>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

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
