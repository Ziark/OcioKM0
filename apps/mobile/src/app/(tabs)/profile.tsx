import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { useAuthStore, type UserDto } from '@/store/auth.store';

export default function ProfileScreen() {
  const logout = useAuthStore((s) => s.logout);
  const { data, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: () => api.get<UserDto>('/auth/me').then((r) => r.data),
  });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#1a73e8" />
      </View>
    );
  }

  const displayName = data?.profile?.displayName ?? data?.email ?? '—';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{displayName.charAt(0).toUpperCase()}</Text>
        </View>
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.email}>{data?.email}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>{data?.role}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => void logout()}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 24 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 24, alignItems: 'center', elevation: 2 },
  avatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#1a73e8', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  avatarText: { color: '#fff', fontSize: 28, fontWeight: '700' },
  name: { fontSize: 20, fontWeight: '700', marginBottom: 4 },
  email: { fontSize: 14, color: '#666', marginBottom: 12 },
  roleBadge: { backgroundColor: '#e8f0fe', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 4 },
  roleText: { color: '#1a73e8', fontWeight: '600', fontSize: 13 },
  logoutBtn: { marginTop: 24, backgroundColor: '#fff', borderWidth: 1, borderColor: '#d32f2f', borderRadius: 8, padding: 14, alignItems: 'center' },
  logoutText: { color: '#d32f2f', fontWeight: '700', fontSize: 15 },
});
