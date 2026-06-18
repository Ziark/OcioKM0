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
      const lat = form.locationLat !== '' ? parseFloat(form.locationLat) : undefined;
      const lng = form.locationLng !== '' ? parseFloat(form.locationLng) : undefined;
      await api.post('/events', {
        title: form.title,
        description: form.description,
        startDate: form.startDate,
        endDate: form.endDate,
        locationAddr: form.locationAddr,
        ...(lat !== undefined && { locationLat: lat }),
        ...(lng !== undefined && { locationLng: lng }),
        categories: form.categories.split(',').map((c) => c.trim()).filter(Boolean),
      });
      router.push('/events');
    } catch {
      setError('No se pudo crear el evento. Revisa los datos.');
    } finally {
      setLoading(false);
    }
  };

  const fields: { id: keyof typeof form; label: string; type: string; placeholder: string; required: boolean }[] = [
    { id: 'title',       label: 'Nombre',                        type: 'text',           placeholder: 'Ej: Feria de verano 2026',            required: true  },
    { id: 'description', label: 'Descripción',                   type: 'text',           placeholder: 'Ej: Mercado artesanal en la plaza mayor', required: true  },
    { id: 'startDate',   label: 'Fecha de inicio',               type: 'datetime-local', placeholder: '',                                    required: true  },
    { id: 'endDate',     label: 'Fecha de fin',                  type: 'datetime-local', placeholder: '',                                    required: true  },
    { id: 'locationAddr',label: 'Dirección',                     type: 'text',           placeholder: 'Ej: Plaça Major 1, 43800 Valls',      required: true  },
    { id: 'locationLat', label: 'Latitud (opcional)',             type: 'number',         placeholder: 'Ej: 41.2833',                         required: false },
    { id: 'locationLng', label: 'Longitud (opcional)',            type: 'number',         placeholder: 'Ej: 1.5167',                          required: false },
    { id: 'categories',  label: 'Categorías (separadas por coma)', type: 'text',         placeholder: 'Ej: feria, artesanía, música',        required: false },
  ];

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

            {fields.map(({ id, label, type, placeholder, required }) => (
              <div key={id} className="space-y-1">
                <Label htmlFor={id} className="text-black">{label}</Label>
                <Input
                  id={id}
                  type={type}
                  value={form[id]}
                  onChange={set(id)}
                  placeholder={placeholder}
                  required={required}
                  step={type === 'number' ? 'any' : undefined}
                  className="text-black placeholder:text-zinc-400"
                />
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <Button type="submit" className="bg-green-700 hover:bg-green-800 text-white" disabled={loading}>
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
