'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
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

interface EventDto {
  id: string;
  title: string;
  locationAddr: string;
  startDate: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  categories: string[];
}

const statusVariant: Record<EventDto['status'], 'default' | 'secondary' | 'destructive' | 'outline'> = {
  DRAFT: 'secondary',
  PUBLISHED: 'default',
  ACTIVE: 'default',
  COMPLETED: 'outline',
  CANCELLED: 'destructive',
};

export default function EventsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['events'],
    queryFn: () => api.get<{ data: EventDto[] }>('/events').then((r) => r.data.data),
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Eventos</h1>
        <Link href="/events/new">
          <Button>Crear evento</Button>
        </Link>
      </div>

      {isLoading && <p className="text-zinc-500">Cargando…</p>}
      {isError && <p className="text-red-600">No se pudieron cargar los eventos.</p>}

      {data && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Ubicación</TableHead>
              <TableHead>Inicio</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Categorías</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell className="text-zinc-600">{event.locationAddr}</TableCell>
                <TableCell className="text-zinc-600">
                  {new Date(event.startDate).toLocaleDateString('es-ES')}
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariant[event.status]}>{event.status}</Badge>
                </TableCell>
                <TableCell className="text-zinc-500 text-sm">
                  {event.categories.join(', ')}
                </TableCell>
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-zinc-500 py-8">
                  Sin eventos.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
