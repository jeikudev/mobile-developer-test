import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../components/button";
import { useImagePicker } from "../../hooks/useImagePicker";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import { styles } from "./styles";

export default function SubmitScreen({ navigation }: any) {
  const [title, setTitle] = useState("");
  const { imageUri, imageBase64, pickImage, reset } = useImagePicker();
  const { submit, loading } = useSubmitForm();

  const handleSubmit = async () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a title");
      return;
    }

    if (!imageBase64) {
      Alert.alert("Error", "Please select an image");
      return;
    }

    const ok = await submit(title, imageBase64);
    if (ok) {
      Alert.alert("Success", "Submission sent successfully!");
      setTitle("");
      reset();
    }
  };

  const handleViewSubmissions = () => {
    navigation.navigate("View");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Create New Post</Text>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Title *</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter your post title"
            placeholderTextColor="#94a3b8"
            editable={!loading}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Image *</Text>
          <TouchableOpacity
            style={styles.imagePicker}
            onPress={pickImage}
            disabled={loading}
          >
            {imageUri ? (
              <View style={styles.imageContainer}>
                <Image source={{ uri: imageUri }} style={styles.preview} />
                <View style={styles.imageOverlay}>
                  <Text style={styles.changeImageText}>Change Image</Text>
                </View>
              </View>
            ) : (
              <View style={styles.placeholderContainer}>
                <Text style={styles.placeholderIcon}>📷</Text>
                <Text style={styles.placeholderText}>
                  Tap to select an image
                </Text>
                <Text style={styles.placeholderSubtext}>
                  JPEG, PNG supported
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <Button
          title="Submit Post"
          onPress={handleSubmit}
          disabled={loading || !title.trim() || !imageBase64}
          loading={loading}
          variant="primary"
        />

        <Button
          title="View My Submissions"
          onPress={handleViewSubmissions}
          disabled={loading}
          variant="secondary"
        />
      </View>
    </ScrollView>
  );
}
