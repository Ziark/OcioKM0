import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import api from '@/lib/api';

type Role = 'USER' | 'ARTISAN';

export default function RegisterScreen() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('USER');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setError('');
    setLoading(true);
    try {
      await api.post('/auth/register', { displayName, email, password, role });
      router.replace('/(auth)/login');
    } catch {
      setError('No se pudo crear la cuenta. Comprueba los datos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.card}>
        <Text style={styles.title}>Crear cuenta</Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={displayName}
          onChangeText={setDisplayName}
          placeholder="Tu nombre"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="tu@email.com"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="••••••••"
        />

        <Text style={styles.label}>Tipo de cuenta</Text>
        <View style={styles.roleRow}>
          {(['USER', 'ARTISAN'] as Role[]).map((r) => (
            <TouchableOpacity
              key={r}
              style={[styles.roleBtn, role === r && styles.roleBtnActive]}
              onPress={() => setRole(r)}>
              <Text style={[styles.roleBtnText, role === r && styles.roleBtnTextActive]}>
                {r === 'USER' ? 'Visitante' : 'Artesano'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => void handleRegister()}
          disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Creando…' : 'Crear cuenta'}</Text>
        </TouchableOpacity>

        <Link href="/(auth)/login" style={styles.link}>
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center' },
  card: { width: '85%', backgroundColor: '#fff', borderRadius: 12, padding: 24, elevation: 4 },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 4, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 16, fontSize: 15 },
  roleRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  roleBtn: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, alignItems: 'center' },
  roleBtnActive: { borderColor: '#1a73e8', backgroundColor: '#e8f0fe' },
  roleBtnText: { color: '#555', fontWeight: '500' },
  roleBtnTextActive: { color: '#1a73e8', fontWeight: '700' },
  button: { backgroundColor: '#1a73e8', borderRadius: 8, padding: 14, alignItems: 'center', marginTop: 4 },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  link: { marginTop: 16, textAlign: 'center', color: '#1a73e8' },
  error: { color: '#d32f2f', marginBottom: 12, textAlign: 'center' },
});
