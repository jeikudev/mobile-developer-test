import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Layout } from "../../constants/layout";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: Layout.borderRadius,
    padding: Layout.padding,
    marginBottom: 16,
    ...Layout.shadow,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 12,
    lineHeight: 24,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    backgroundColor: Colors.border,
  },
  date: {
    fontSize: 14,
    color: Colors.textMuted,
    marginTop: 8,
    fontStyle: "italic",
  },
});
