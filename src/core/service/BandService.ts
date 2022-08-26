import { firebaseAPIKey } from '../../../ignore';
import axios from "axios";
import {Band} from "../models/Band";

// const firebaseConfig = {
//   apiKey: firebaseAPIKey,
//   authDomain: "hmf-app-dev.firebaseapp.com",
//   projectId: "hmf-app-dev",
//   storageBucket: "hmf-app-dev.appspot.com",
//   messagingSenderId: "812684204526",
//   appId: "1:812684204526:web:9a30559bf8c46d6c2c96ff",
//   measurementId: "G-1F34KPR5QS"
// };

export function getBands(): Promise<Band[]> {
    return axios.get("https://us-central1-hmf-app-dev.cloudfunctions.net/bandData").then((res => res.data));
}