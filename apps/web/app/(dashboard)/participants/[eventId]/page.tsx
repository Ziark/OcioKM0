'use client';

import { useParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import api from '@/lib/api';

interface ParticipantDto {
  id: string;
  artisan: { businessName: string };
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  boothCode?: string;
}

export default function ParticipantsPage() {
  const params = useParams();
  const eventId = params.eventId as string;
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['participants', eventId],
    queryFn: () =>
      api.get<{ data: ParticipantDto[] }>(`/events/${eventId}/participants`).then((r) => r.data.data),
  });

  const review = async (participantId: string, status: 'APPROVED' | 'REJECTED') => {
    await api.patch(`/events/${eventId}/participants/${participantId}/review`, { status });
    await queryClient.invalidateQueries({ queryKey: ['participants', eventId] });
  };

  const statusVariant: Record<ParticipantDto['status'], 'default' | 'secondary' | 'destructive'> = {
    PENDING: 'secondary',
    APPROVED: 'default',
    REJECTED: 'destructive',
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Participantes del evento</h1>

      {isLoading && <p className="text-zinc-500">Cargando…</p>}
      {isError && <p className="text-red-600">No se pudieron cargar los participantes.</p>}

      {data && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Artesano</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Booth</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.artisan.businessName}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[p.status]}>{p.status}</Badge>
                </TableCell>
                <TableCell className="text-zinc-500">{p.boothCode ?? '—'}</TableCell>
                <TableCell>
                  {p.status === 'PENDING' && (
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => void review(p.id, 'APPROVED')}>
                        Aprobar
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => void review(p.id, 'REJECTED')}>
                        Rechazar
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-zinc-500 py-8">
                  Sin participantes.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
