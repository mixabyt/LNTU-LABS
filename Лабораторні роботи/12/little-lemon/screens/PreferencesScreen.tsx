import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaults, readPreferences, removePreferences, writePreferences, type Preferences } from '../storage/preferences';
import { useAppColors } from '../theme/useAppColors';

const labels: Record<keyof Preferences, string> = {
  pushNotifications: 'Push-сповіщення',
  emailMarketing: 'Маркетингові листи',
  latestNews: 'Новини ресторану',
};
const keys: (keyof Preferences)[] = [
  'pushNotifications', 'emailMarketing', 'latestNews',
];
const message = (e: unknown) => e instanceof Error ? e.message : 'Невідома помилка.';

export default function PreferencesScreen() {
  const colors = useAppColors();
  const [draft, setDraft] = useState<Preferences>({ ...defaults });
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [attempt, setAttempt] = useState(0);
  // ref блокує повторне натискання ще до наступного рендеру.
  const lock = useRef(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);
  useEffect(() => {
    let active = true;
    setReady(false); setNotice(''); setBusy(true);
    async function restore() {
      try {
        const saved = await readPreferences();
        if (active) { setDraft(saved); setReady(true); }
      } catch (e: unknown) {
        // Зіпсований запис не перезаписуємо мовчки стандартними значеннями.
        if (active) setNotice(message(e));
      } finally { if (active) setBusy(false); }
    }
    void restore();
    // AsyncStorage не має AbortSignal. Ігноруємо результат неактуального читання.
    return () => { active = false; };
  }, [attempt]);

  async function persist(reset: boolean) {
    if (lock.current) return;
    lock.current = true; setBusy(true); setNotice('');
    try {
      if (reset) await removePreferences();
      else await writePreferences(draft);
      // Інтерфейс повідомляє про успіх тільки після await.
      if (mounted.current) {
        if (reset) setDraft({ ...defaults });
        setReady(true);
        setNotice(reset ? 'Власний ключ видалено. Діють стандартні значення.' : 'Налаштування збережено.');
      }
    } catch (e: unknown) {
      if (mounted.current) setNotice(message(e));
    } finally {
      lock.current = false;
      if (mounted.current) setBusy(false);
    }
  }
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.page}>
        <Text style={[styles.heading, { color: colors.text }]}>Налаштування Little Lemon</Text>
        <Text style={{ color: colors.muted }}>Змініть параметри й натисніть «Зберегти».</Text>
        {busy && <ActivityIndicator accessibilityLabel="Робота зі сховищем" color={colors.accent} />}
        {ready && keys.map(key => (
          <View key={key} style={[styles.row, { borderColor: colors.border }]}>
            <Text style={{ color: colors.text, fontSize: 16 }}>{labels[key]}</Text>
            <Switch accessibilityLabel={labels[key]} value={draft[key]} disabled={busy}
              onValueChange={value => setDraft(prev => ({ ...prev, [key]: value }))} />
          </View>
        ))}
        {notice !== '' && <Text accessibilityLiveRegion="polite" style={[styles.notice, { color: colors.text }]}>{notice}</Text>}
        <Button title="Зберегти" color={colors.accent} disabled={!ready || busy} onPress={() => { void persist(false); }} />
        <Button title="Скинути власні налаштування" disabled={busy} onPress={() => { void persist(true); }} />
        {!ready && !busy && <Button title="Повторити читання" onPress={() => setAttempt(n => n + 1)} />}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 }, page: { padding: 20, gap: 14 },
  heading: { fontSize: 26, fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10, paddingVertical: 8, borderBottomWidth: 1 },
  notice: { paddingVertical: 12 },
});
