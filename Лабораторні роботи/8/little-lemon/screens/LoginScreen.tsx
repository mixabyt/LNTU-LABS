import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import type { Palette } from '../theme/palette';

type LoginScreenProps = {
  colors: Palette;
  onContinue: (email: string) => void;
};

export default function LoginScreen({ colors, onContinue }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleContinue() {
    const normalizedEmail = email.trim();
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!emailLooksValid) {
      setError('Введіть email у форматі name@example.com.');
      return;
    }

    if (password.length === 0) {
      setError('Введіть навчальний пароль.');
      return;
    }

    setError(null);
    Keyboard.dismiss();
    setPassword('');
    onContinue(normalizedEmail);
  }

  const inputColors = {
    color: colors.text,
    backgroundColor: colors.surface,
    borderColor: colors.border,
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.form}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <Text style={[styles.title, { color: colors.text }]}>Вхід до Little Lemon</Text>
        <Text style={[styles.paragraph, { color: colors.muted }]}>
          Навчальна форма: дані перевіряються лише локально й нікуди не надсилаються.
        </Text>

        <Text style={[styles.label, { color: colors.text }]}>Email</Text>
        <TextInput
          style={[styles.input, inputColors]}
          value={email}
          onChangeText={setEmail}
          placeholder="name@example.com"
          placeholderTextColor={colors.muted}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="Email"
        />

        <Text style={[styles.label, { color: colors.text }]}>Пароль</Text>
        <TextInput
          style={[styles.input, inputColors]}
          value={password}
          onChangeText={setPassword}
          placeholder="Пароль"
          placeholderTextColor={colors.muted}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          submitBehavior="blurAndSubmit"
          accessibilityLabel="Пароль"
        />

        {error !== null && (
          <Text style={[styles.message, { color: colors.error }]}>
            {error}
          </Text>
        )}

        <Pressable
          accessibilityRole="button"
          onPress={handleContinue}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: colors.accent },
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={[styles.buttonText, { color: colors.onAccent }]}>
            Увійти (демо)
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
  form: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 18,
  },
  message: { fontSize: 16, lineHeight: 24, marginVertical: 12 },
  button: {
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonPressed: { opacity: 0.75 },
  buttonText: { fontSize: 18, fontWeight: '600', textAlign: 'center' },
});
