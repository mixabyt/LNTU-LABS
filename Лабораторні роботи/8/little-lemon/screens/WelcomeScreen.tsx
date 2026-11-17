import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import type { Palette } from '../theme/palette';

type WelcomeScreenProps = {
  colors: Palette;
  email: string;
  onExit: () => void;
};

export default function WelcomeScreen({ colors, email, onExit }: WelcomeScreenProps) {
  const [name, setName] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="Логотип Little Lemon"
        />

        <Text style={[styles.title, { color: colors.text }]}>Ласкаво просимо до Little Lemon</Text>
        <Text style={[styles.notice, { color: colors.muted }]}>
          Дані перевірено локально. Відкрито навчальний екран для {email}
        </Text>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          Little Lemon — невелике сімейне бістро середземноморської кухні. Представтеся, і ми
          привітаємо вас особисто.
        </Text>

        <Text style={[styles.label, { color: colors.text }]}>Ваше ім’я</Text>
        <TextInput
          style={[
            styles.input,
            { color: colors.text, backgroundColor: colors.surface, borderColor: colors.border },
          ]}
          value={name}
          onChangeText={setName}
          placeholder="Наприклад, Максим"
          placeholderTextColor={colors.muted}
          accessibilityLabel="Ваше ім’я"
        />
        <Text style={[styles.greeting, { color: colors.text }]}>
          {name.trim() ? `Вітаємо, ${name.trim()}!` : 'Введіть ім’я.'}
        </Text>

        <Pressable
          accessibilityRole="button"
          onPress={onExit}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: colors.accent },
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={[styles.buttonText, { color: colors.onAccent }]}>
            Повернутися до форми
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  logo: {
    width: 120,
    height: 140,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notice: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 18,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
  },
  button: {
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonPressed: { opacity: 0.75 },
  buttonText: { fontSize: 18, fontWeight: '600', textAlign: 'center' },
});
