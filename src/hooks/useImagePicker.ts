import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert } from "react-native";

export function useImagePicker() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const pickImage = async () => {
    try {
      const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted) {
        Alert.alert("Permission Denied", "Please allow gallery access.");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
        quality: 0.8,
        allowsEditing: true,
      });

      if (!result.canceled) {
        const asset = result.assets[0];

        setImageUri(asset.uri);

        const ext = asset.uri.split(".").pop()?.toLowerCase();
        const mime =
          ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png";

        if (asset.base64) {
          setImageBase64(`data:${mime};base64,${asset.base64}`);
        }
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Image picker failed.");
    }
  };

  const reset = () => {
    setImageUri(null);
    setImageBase64(null);
  };

  return { imageUri, imageBase64, pickImage, reset };
}
