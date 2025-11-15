export interface RetrieveItem {
  text: string;
  image_base64: string;
  created_at: string;
}

export interface ApiResponse<T = any> {
  status: "success" | "error";
  data?: T;
  message?: string;
}

export interface SubmitPayload {
  user: string;
  text: string;
  file: string;
}

export interface SubmitResponse extends ApiResponse {
  status: "success" | "error";
  message: string;
}

export interface RetrieveResponse extends ApiResponse<RetrieveItem[]> {
  data: RetrieveItem[];
  status: "success" | "error";
  message?: string;
}
