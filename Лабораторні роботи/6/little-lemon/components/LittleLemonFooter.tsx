import { StyleSheet, Text, View } from 'react-native';

export function LittleLemonFooter() {
  const year = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© {year} Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F4CE14',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  text: {
    color: '#333333',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
