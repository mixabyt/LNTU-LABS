import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export default function WelcomeScreen() {
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
        <Text style={styles.title}>Ласкаво просимо до Little Lemon</Text>
        <Text style={styles.paragraph}>
          Little Lemon — невелике сімейне бістро середземноморської кухні. Представтеся, і ми
          привітаємо вас особисто.
        </Text>

        <Text style={styles.label}>Ваше ім’я</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Наприклад, Максим"
          placeholderTextColor="#9AA5A1"
          accessibilityLabel="Ваше ім’я"
        />

        <Text style={styles.greeting}>
          {name.trim() ? `Вітаємо, ${name.trim()}!` : 'Введіть ім’я.'}
        </Text>
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
  title: {
    color: '#F4CE14',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  paragraph: {
    color: '#EDEFEE',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  label: {
    color: '#EDEFEE',
    fontSize: 16,
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
  greeting: {
    color: '#EE9972',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
  },
});
