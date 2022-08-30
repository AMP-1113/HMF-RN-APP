import axios from "axios";
import { Band } from "../models/Band";

export function getBands(): Promise<Band[]> {
  return axios
    .get("https://us-central1-hmf-app-dev.cloudfunctions.net/bandData")
    .then((res) => res.data)
    .catch((error) => {
      reportError(new Error(`getBand failed: ${error.message}`));
      return Promise.reject();
    });
}
