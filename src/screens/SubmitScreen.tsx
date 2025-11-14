import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../components/button";
import { useImagePicker } from "../hooks/useImagePicker";
import { useSubmitForm } from "../hooks/useSubmitForm";

export default function SubmitScreen({ navigation }: any) {
  const [title, setTitle] = useState("");
  const { imageUri, imageBase64, pickImage, reset } = useImagePicker();
  const { submit, loading } = useSubmitForm();

  const handleSubmit = async () => {
    const ok = await submit(title, imageBase64);
    if (ok) {
      setTitle("");
      reset();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Submission</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
        editable={!loading}
      />

      <Text style={styles.label}>Image</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.preview} />
        ) : (
          <Text style={styles.placeholder}>Tap to pick image</Text>
        )}
      </TouchableOpacity>

      <Button title="Submit" onPress={handleSubmit} disabled={loading} />
      <Button
        title="View Submission"
        onPress={() => navigation.navigate("View")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff", flexGrow: 1 },
  heading: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
  label: { marginTop: 12, marginBottom: 6, fontSize: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  placeholder: { color: "#666" },
  preview: { width: "100%", height: "100%", resizeMode: "cover" },
});
