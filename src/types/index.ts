export type SubmitResponse = {
  status: string;
  message?: string;
};

export type RetrieveItem = {
  text: string;
  image_base64: string;
  created_at?: string;
};

export type RetrieveResponse = {
  status: string;
  data: RetrieveItem[];
};
