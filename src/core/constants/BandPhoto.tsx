import { Image } from "react-native";
import { ref, getDownloadURL } from "firebase/storage";
import {storage} from '../../../firebase';
import { useEffect, useState } from "react";

interface BandPhotoProps {
  id?: number;
  name?: string;
  size?: number;
}

// have to write a switch statment for bands

const handgrenades = 'handgrenades.jpg';
const tart = 'tart.jpeg';


const BandPhoto = ({ id, name, size }: BandPhotoProps) => {
  const [url, setURL ] = useState<string>();

  useEffect(() => {
    const getBandPhoto = async () => {
      const bandPhotosRef = ref(storage, `band-photos/${tart}`);
      await getDownloadURL(bandPhotosRef).then((convertedURL) => {
        setURL(convertedURL);
      })
    }
    getBandPhoto();
  })

  return (
    <Image
      source={{uri: url}}
      style={{ width: size, height: size }}
    />
  );
};

export default BandPhoto;

