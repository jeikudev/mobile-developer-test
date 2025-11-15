import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "../components/button";
import { useRetrieve } from "../hooks/useRetrieve";

export default function ViewSubmissionScreen() {
  const { data, error, loading, load } = useRetrieve();

  if (loading)
    return <ActivityIndicator style={{ marginTop: 40 }} size="large" />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>View Submission</Text>

      {error && (
        <>
          <Text style={styles.error}>{error}</Text>
          <Button title="Retry" onPress={load} />
        </>
      )}

      {data.length ? (
        data.map((item, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.text}>{item.text}</Text>
            <Image style={styles.image} source={{ uri: item.image_base64 }} />
            <Text style={styles.date}>{item.created_at}</Text>
          </View>
        ))
      ) : (
        <Text>No submissions yet.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff", flexGrow: 1 },
  heading: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
  card: {
    borderWidth: 1,
    borderColor: "#eee",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  text: { fontSize: 16, marginBottom: 10 },
  image: { width: "100%", height: 220, borderRadius: 8 },
  date: { marginTop: 6, fontSize: 12, color: "#666" },
  error: { color: "red", marginBottom: 12 },
});
