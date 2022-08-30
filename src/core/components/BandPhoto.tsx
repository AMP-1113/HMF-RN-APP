import { Image } from "react-native";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { useEffect, useState } from "react";
import { bandPhotoFileNames } from "../constants/BandPhotoNames";

interface BandPhotoProps {
  id?: number;
  name?: string;
  size?: number;
}

// have to write a switch statment for bands

const getBandName = (bandName: string) => {
  switch (bandName.toUpperCase()) {
    case "TART":
      return bandPhotoFileNames.tart;
    case "HANDGRENADES":
      return bandPhotoFileNames.handgrenades;
    case "AMEERA BANDY":
      return bandPhotoFileNames.ameeraBandy;
    case "ATMIG":
      return bandPhotoFileNames.atmig;
    case "ACT CASUAL":
      return bandPhotoFileNames.actCasual
    case "GOLD CRAYON":
      return bandPhotoFileNames.goldCrayon
    default:
      return "default";
  }
};

const BandPhoto = ({ id, name, size }: BandPhotoProps) => {
  const [url, setURL] = useState<string>();
  let lowercaseName = name?.toLowerCase();

  useEffect(() => {
    const getBandPhoto = async () => {
      if (lowercaseName !== undefined) {
        const bandPhotosRef = ref(
          storage,
          `band-photos/${getBandName(name!)}.png`
        );
        await getDownloadURL(bandPhotosRef).then((convertedURL) => {
          setURL(convertedURL);
        });
      } else {
        lowercaseName = "default";
      }
    };
    getBandPhoto();
  });

  return <Image source={{ uri: url }} style={{ width: size, height: size }} />;
};

export default BandPhoto;
