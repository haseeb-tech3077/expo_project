import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Product Explorer</Text>
      <Text style={styles.name}>Abdul Haseeb</Text>
      <Text style={styles.roll}>Roll No: i233077</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  name: { fontSize: 20, fontWeight: '600' },
  roll: { fontSize: 16, marginTop: 4 },
});