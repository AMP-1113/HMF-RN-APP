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

const handgrenades = 'handgrenades';
const tart = 'tart';


const BandPhoto = ({ id, name, size }: BandPhotoProps) => {
  const [url, setURL ] = useState<string>();
  const lowercaseName = name?.toLowerCase();
  

  useEffect(() => {
    const getBandPhoto = async () => {
      const bandPhotosRef = ref(storage, `band-photos/${lowercaseName}.png`);
      await getDownloadURL(bandPhotosRef).then((convertedURL) => {
        setURL(convertedURL);
      })
      .catch((error) => {
        reportError(new Error(`Photo could not be found: ${error.message}`))
        return Promise.reject();
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

