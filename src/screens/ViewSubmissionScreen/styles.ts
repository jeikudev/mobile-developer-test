import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Layout } from "../../constants/layout";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    flexGrow: 1,
    padding: Layout.padding,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 24,
    textAlign: "center",
  },
  submissionsList: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  emptyStateText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Layout.padding,
    backgroundColor: Colors.background,
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  errorMessage: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  inlineError: {
    backgroundColor: "#fef2f2",
    borderLeftWidth: 4,
    borderLeftColor: Colors.error,
    padding: 12,
    marginBottom: 16,
    borderRadius: 4,
  },
  inlineErrorText: {
    color: Colors.error,
    fontSize: 14,
  },
});
