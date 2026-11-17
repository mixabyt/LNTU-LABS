import { StyleSheet, Text, View } from 'react-native';
import type { Palette } from '../theme/palette';

type LittleLemonHeaderProps = {
  colors: Palette;
};

export function LittleLemonHeader({ colors }: LittleLemonHeaderProps) {
  return (
    <View style={[styles.header, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
      <Text style={[styles.title, { color: colors.text }]}>Little Lemon</Text>
      <Text style={[styles.subtitle, { color: colors.muted }]}>Середземноморське бістро</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});
