import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { Palette } from '../theme/palette';
import { LittleLemonFooter } from './LittleLemonFooter';

type ScreenLayoutProps = {
  colors: Palette;
  // Нижній відступ безпечної зони потрібен, коли під екраном немає панелі вкладок.
  safeBottom: boolean;
  children: ReactNode;
};

export function ScreenLayout({ colors, safeBottom, children }: ScreenLayoutProps) {
  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: colors.background }]}
      edges={safeBottom ? ['bottom'] : []}
    >
      <View style={styles.content}>{children}</View>
      <LittleLemonFooter colors={colors} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
