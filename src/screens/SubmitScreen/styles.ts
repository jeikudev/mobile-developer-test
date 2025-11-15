import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Layout } from "../../constants/layout";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    padding: Layout.padding,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 32,
    textAlign: "center",
  },
  form: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    borderWidth: Layout.borderWidth,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: Layout.borderRadius,
    fontSize: 16,
    color: Colors.text,
  },
  imagePicker: {
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: "dashed",
    borderRadius: Layout.borderRadius,
    overflow: "hidden",
    backgroundColor: Colors.card,
  },
  imageContainer: {
    position: "relative",
  },
  preview: {
    width: "100%",
    height: 200,
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 8,
    alignItems: "center",
  },
  changeImageText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "600",
  },
  placeholderContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  placeholderIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 4,
  },
  placeholderSubtext: {
    fontSize: 12,
    color: Colors.textMuted,
    textAlign: "center",
  },
});
