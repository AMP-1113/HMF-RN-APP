import axios from "axios";
import { Festival } from "../models/Festival";

export function getFestival(): Promise<Festival[]> {
  return axios
    .get("https://us-central1-hmf-app-dev.cloudfunctions.net/festivalData")
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject();
    });
}
