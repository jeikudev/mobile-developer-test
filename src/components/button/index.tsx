import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants";
import { styles } from "./style";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = "primary",
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? Colors.white : Colors.primary}
        />
      ) : (
        <Text style={[styles.buttonText, styles[`${variant}Text`]]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
