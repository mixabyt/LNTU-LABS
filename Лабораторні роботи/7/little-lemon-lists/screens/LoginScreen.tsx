import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

function isEmailFormatValid(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  let emailMessage = '';
  if (emailTouched || email !== '') {
    if (email.trim() === '') {
      emailMessage = 'Введіть email.';
    } else if (!isEmailFormatValid(email)) {
      emailMessage = 'Email має неправильний формат.';
    } else {
      emailMessage = 'Формат email правильний.';
    }
  }

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
        <Text style={styles.title}>Вхід до Little Lemon</Text>
        <Text style={styles.paragraph}>
          Навчальна форма: дані перевіряються лише локально й нікуди не надсилаються.
        </Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          onBlur={() => {
            const normalized = email.trim();
            setEmail(normalized);
            setEmailTouched(true);
          }}
          placeholder="name@example.com"
          placeholderTextColor="#9AA5A1"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="Email"
        />
        {emailMessage !== '' && (
          <Text style={isEmailFormatValid(email) ? styles.ok : styles.hint}>{emailMessage}</Text>
        )}

        <Text style={styles.label}>Пароль</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Пароль"
          placeholderTextColor="#9AA5A1"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          submitBehavior="blurAndSubmit"
          accessibilityLabel="Пароль"
        />
        <Text style={password !== '' ? styles.ok : styles.hint}>
          {password !== '' ? 'Пароль введено.' : 'Введіть пароль.'}
        </Text>
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
    color: '#F4CE14',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    color: '#EDEFEE',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  label: {
    color: '#EDEFEE',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 18,
    color: '#333333',
  },
  hint: {
    color: '#EE9972',
    marginTop: 6,
  },
  ok: {
    color: '#9BE29B',
    marginTop: 6,
  },
});
