import React from "react";
import { Image, Text, View } from "react-native";
import { RetrieveItem } from "../../types";
import { styles } from "./styles";

interface SubmissionCardProps {
  submission: RetrieveItem;
}

export default function SubmissionCard({ submission }: SubmissionCardProps) {
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return "Invalid date";
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{submission.text}</Text>
      <Image
        source={{ uri: submission.image_base64 }}
        style={styles.image}
        resizeMode="cover"
        onError={() => console.log("Error loading image")}
      />
      <Text style={styles.date}>
        Submitted on {formatDate(submission.created_at)}
      </Text>
    </View>
  );
}
