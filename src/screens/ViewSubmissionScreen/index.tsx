import React from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import Button from "../../components/button";
import SubmissionCard from "../../components/SubmissionCard";
import { Colors } from "../../constants";
import { useRetrieve } from "../../hooks/useRetrieve";
import { styles } from "./styles";

export default function ViewSubmissionScreen() {
  const { data, error, loading, load } = useRetrieve();

  const handleRetry = () => {
    load();
  };

  const handleRefresh = () => {
    load();
  };

  if (error && !data.length) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorIcon}>⚠️</Text>
        <Text style={styles.errorTitle}>Unable to Load Submissions</Text>
        <Text style={styles.errorMessage}>{error}</Text>
        <Button title="Try Again" onPress={handleRetry} variant="primary" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl
          refreshing={loading && data.length > 0}
          onRefresh={handleRefresh}
          colors={[Colors.primary]}
        />
      }
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>My Submissions</Text>

      {error && data.length > 0 && (
        <View style={styles.inlineError}>
          <Text style={styles.inlineErrorText}>{error}</Text>
        </View>
      )}

      {data.length > 0 ? (
        <View style={styles.submissionsList}>
          {data.map((item, index) => (
            <SubmissionCard key={index} submission={item} />
          ))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateIcon}>📭</Text>
          <Text style={styles.emptyStateTitle}>No Submissions Yet</Text>
          <Text style={styles.emptyStateText}>
            Create your first post to see it here!
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
