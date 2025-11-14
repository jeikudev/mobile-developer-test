import axios from "axios";
import { API_BASE_URL, USER } from "../constants";

export const submitForm = async (text: string, fileBase64: string) => {
  const url = `${API_BASE_URL}/api/form/submit`;
  const payload = {
    user: USER,
    text,
    file: fileBase64,
  };
  const res = await axios.post(url, payload, { timeout: 15000 });
  return res.data;
};

export const retrieveSubmissions = async () => {
  const url = `${API_BASE_URL}/api/retrieve/${encodeURIComponent(USER)}`;
  const res = await axios.get(url, { timeout: 15000 });
  return res.data;
};
