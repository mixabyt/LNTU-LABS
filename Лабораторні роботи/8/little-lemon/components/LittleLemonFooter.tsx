import { StyleSheet, Text, View } from 'react-native';
import type { Palette } from '../theme/palette';

type LittleLemonFooterProps = {
  colors: Palette;
};

export function LittleLemonFooter({ colors }: LittleLemonFooterProps) {
  const year = new Date().getFullYear();

  return (
    <View style={[styles.footer, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
      <Text style={[styles.text, { color: colors.text }]}>© {year} Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
  },
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
