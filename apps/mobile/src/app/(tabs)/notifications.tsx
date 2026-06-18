import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

interface NotificationDto {
  id: string;
  type: string;
  title: string;
  body: string;
  read: boolean;
  createdAt: string;
}

interface NotificationsResponse {
  data: NotificationDto[];
  unreadCount: number;
}

export default function NotificationsScreen() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notifications'],
    queryFn: () => api.get<NotificationsResponse>('/notifications').then((r) => r.data),
  });

  const markRead = async (id: string) => {
    await api.patch(`/notifications/${id}/read`);
    await queryClient.invalidateQueries({ queryKey: ['notifications'] });
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#1a73e8" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>No se pudieron cargar las notificaciones.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Notificaciones</Text>
        {(data?.unreadCount ?? 0) > 0 && (
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{data?.unreadCount}</Text>
          </View>
        )}
      </View>
      <FlatList
        data={data?.data ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, !item.read && styles.itemUnread]}
            onPress={() => void markRead(item.id)}>
            <Text style={[styles.title, !item.read && styles.titleUnread]}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            {!item.read && <Text style={styles.unreadDot}>● No leído</Text>}
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Sin notificaciones.</Text>}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 8 },
  heading: { fontSize: 22, fontWeight: '700' },
  countBadge: { backgroundColor: '#1a73e8', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 2 },
  countText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  list: { padding: 12, gap: 8 },
  item: { backgroundColor: '#fff', borderRadius: 10, padding: 14, elevation: 1 },
  itemUnread: { borderLeftWidth: 3, borderLeftColor: '#1a73e8' },
  title: { fontSize: 15, fontWeight: '500', marginBottom: 4 },
  titleUnread: { fontWeight: '700' },
  body: { fontSize: 13, color: '#555' },
  unreadDot: { marginTop: 6, fontSize: 11, color: '#1a73e8', fontWeight: '600' },
  errorText: { color: '#d32f2f' },
  empty: { textAlign: 'center', color: '#999', marginTop: 40 },
});
