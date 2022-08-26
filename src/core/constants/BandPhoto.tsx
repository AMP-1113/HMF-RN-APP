import { Image } from "react-native";

interface BandPhotoProps {
  id?: number;
  name?: string;
  size?: number;
}

const TART = "Tart";

const BandPhoto = ({ id, name, size }: BandPhotoProps) => {
  return (
    <Image
      source={require("../../../assets/images/tart.jpeg")}
      style={{ width: size, height: size }}
    />
  );
};

export default BandPhoto;
