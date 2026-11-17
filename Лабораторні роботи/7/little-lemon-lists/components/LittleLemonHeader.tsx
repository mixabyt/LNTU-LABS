import { StyleSheet, Text, View } from 'react-native';

export function LittleLemonHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Little Lemon</Text>
      <Text style={styles.subtitle}>Середземноморське бістро</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F4CE14',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  title: {
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#495E57',
    fontSize: 16,
  },
});
