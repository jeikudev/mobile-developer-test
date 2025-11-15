import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Layout } from "../../constants/layout";

export const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: Layout.borderRadius,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.background,
    borderWidth: Layout.borderWidth,
    borderColor: Colors.primary,
  },
  disabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  primaryText: {
    color: Colors.white,
  },
  secondaryText: {
    color: Colors.primary,
  },
});
