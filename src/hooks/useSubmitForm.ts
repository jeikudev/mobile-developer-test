import { useState } from "react";
import { Alert } from "react-native";
import { submitForm } from "../api";
import { SubmitResponse } from "../types";

export function useSubmitForm() {
  const [loading, setLoading] = useState(false);

  const validate = (title: string, image: string | null): boolean => {
    if (!title.trim()) {
      Alert.alert("Validation Error", "Title is required.");
      return false;
    }
    if (!image) {
      Alert.alert("Validation Error", "Image is required.");
      return false;
    }
    return true;
  };

  const submit = async (
    title: string,
    image: string | null
  ): Promise<boolean> => {
    if (!validate(title, image)) return false;

    setLoading(true);
    try {
      const res: SubmitResponse = await submitForm(title.trim(), image!);

      if (res?.status === "success") {
        Alert.alert("Success", res.message || "Submitted successfully.");
        return true;
      } else {
        Alert.alert(
          "Server Error",
          res?.message || "Unexpected response from server."
        );
        return false;
      }
    } catch (err: any) {
      console.error("Submit error:", err);
      const errorMessage =
        err.response?.data?.message || err.message || "Network error occurred.";
      Alert.alert("Submit Failed", errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
}
