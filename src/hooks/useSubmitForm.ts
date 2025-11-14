import { useState } from "react";
import { Alert } from "react-native";
import { submitForm } from "../api";

export function useSubmitForm() {
  const [loading, setLoading] = useState(false);

  const validate = (title: string, image: string | null) => {
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

  const submit = async (title: string, image: string | null) => {
    if (!validate(title, image)) return;

    setLoading(true);
    try {
      const res = await submitForm(title.trim(), image!);

      if (res?.status === "success") {
        Alert.alert("Success", res.message || "Submitted.");
        return true;
      } else {
        Alert.alert("Server Error", res?.message || "Unexpected response.");
        return false;
      }
    } catch (err: any) {
      console.error(err);
      Alert.alert("Submit Failed", err?.message || "Network error.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
}
