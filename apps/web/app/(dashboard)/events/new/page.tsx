'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import api from '@/lib/api';

export default function NewEventPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    locationAddr: '',
    locationLat: '',
    locationLng: '',
    categories: '',
  });

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await api.post('/events', {
        ...form,
        locationLat: parseFloat(form.locationLat),
        locationLng: parseFloat(form.locationLng),
        categories: form.categories.split(',').map((c) => c.trim()).filter(Boolean),
      });
      router.push('/events');
    } catch {
      setError('No se pudo crear el evento. Revisa los datos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Crear evento</h1>
      <Card>
        <CardHeader>
          <CardTitle>Datos del evento</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
            {error && <p className="text-sm text-red-600">{error}</p>}

            {(
              [
                { id: 'title', label: 'Nombre', type: 'text' },
                { id: 'description', label: 'Descripción', type: 'text' },
                { id: 'startDate', label: 'Fecha inicio', type: 'datetime-local' },
                { id: 'endDate', label: 'Fecha fin', type: 'datetime-local' },
                { id: 'locationAddr', label: 'Dirección', type: 'text' },
                { id: 'locationLat', label: 'Latitud', type: 'number' },
                { id: 'locationLng', label: 'Longitud', type: 'number' },
                { id: 'categories', label: 'Categorías (separadas por coma)', type: 'text' },
              ] as { id: keyof typeof form; label: string; type: string }[]
            ).map(({ id, label, type }) => (
              <div key={id} className="space-y-1">
                <Label htmlFor={id}>{label}</Label>
                <Input
                  id={id}
                  type={type}
                  value={form[id]}
                  onChange={set(id)}
                  required={id !== 'categories'}
                  step={type === 'number' ? 'any' : undefined}
                />
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <Button type="submit" disabled={loading}>
                {loading ? 'Guardando…' : 'Crear'}
              </Button>
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
