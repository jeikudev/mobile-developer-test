import axios from "axios";
import { API_BASE_URL, USER } from "../constants";
import { RetrieveResponse, SubmitPayload, SubmitResponse } from "../types";

const resolveUrl = (path: string) => {
  return `${API_BASE_URL}${path}`;
};

export const submitForm = async (
  title: string,
  base64: string
): Promise<SubmitResponse> => {
  const payload: SubmitPayload = {
    user: USER,
    text: title,
    file: base64,
  };

  return axios
    .post<SubmitResponse>(resolveUrl("/api/form/submit"), payload, {
      timeout: 15000,
    })
    .then((res) => res.data);
};

export const retrieveSubmissions = async (): Promise<RetrieveResponse> => {
  return axios
    .get<RetrieveResponse>(resolveUrl(`/api/retrieve/${USER}`), {
      timeout: 15000,
    })
    .then((res) => res.data);
};

axios.interceptors.request.use((config) => {
  console.log("Request →", config.url);
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log("Response Error →", err.message);
    return Promise.reject(err);
  }
);
