import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

interface EventDto {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  locationAddr: string;
  status: string;
  categories: string[];
  coverImageUrl?: string;
}

interface EventsResponse {
  data: EventDto[];
  total: number;
}

function EventCard({ event }: { event: EventDto }) {
  const start = new Date(event.startDate).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.title}>{event.title}</Text>
        <View style={[styles.badge, event.status === 'ACTIVE' && styles.badgeActive]}>
          <Text style={styles.badgeText}>{event.status}</Text>
        </View>
      </View>
      <Text style={styles.addr}>{event.locationAddr}</Text>
      <Text style={styles.date}>{start}</Text>
    </View>
  );
}

export default function EventsScreen() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['events'],
    queryFn: () => api.get<EventsResponse>('/events').then((r) => r.data.data),
  });

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
        <Text style={styles.errorText}>No se pudieron cargar los eventos.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Eventos</Text>
      <FlatList
        data={data ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Sin eventos disponibles.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  heading: { fontSize: 22, fontWeight: '700', padding: 16 },
  list: { padding: 12, gap: 12 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, elevation: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  title: { fontSize: 16, fontWeight: '700', flex: 1, marginRight: 8 },
  badge: { backgroundColor: '#e0e0e0', borderRadius: 4, paddingHorizontal: 8, paddingVertical: 2 },
  badgeActive: { backgroundColor: '#c8e6c9' },
  badgeText: { fontSize: 11, fontWeight: '600', color: '#444' },
  addr: { fontSize: 13, color: '#666', marginTop: 2 },
  date: { fontSize: 12, color: '#999', marginTop: 4 },
  errorText: { color: '#d32f2f' },
  empty: { textAlign: 'center', color: '#999', marginTop: 40 },
});
