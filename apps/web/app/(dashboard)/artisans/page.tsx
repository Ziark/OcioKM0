'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import api from '@/lib/api';

interface ArtisanDto {
  id: string;
  businessName: string;
  description?: string;
  categories: string[];
  km0Certified: boolean;
  logoUrl?: string;
}

export default function ArtisansPage() {
  const [search, setSearch] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['artisans'],
    queryFn: () => api.get<{ data: ArtisanDto[] }>('/artisans').then((r) => r.data.data),
  });

  const filtered = (data ?? []).filter((a) =>
    a.businessName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Artesanos</h1>

      <Input
        placeholder="Buscar por nombre…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 max-w-sm"
      />

      {isLoading && <p className="text-zinc-500">Cargando…</p>}
      {isError && <p className="text-red-600">No se pudieron cargar los artesanos.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((artisan) => (
          <Card key={artisan.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-base">{artisan.businessName}</CardTitle>
                {artisan.km0Certified && (
                  <Badge variant="secondary">KM0</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {artisan.description && (
                <p className="text-sm text-zinc-500 mb-3 line-clamp-2">{artisan.description}</p>
              )}
              <div className="flex flex-wrap gap-1">
                {artisan.categories.map((cat) => (
                  <Badge key={cat} variant="outline" className="text-xs">
                    {cat}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
        {!isLoading && filtered.length === 0 && (
          <p className="col-span-full text-center text-zinc-500 py-8">Sin artesanos.</p>
        )}
      </div>
    </div>
  );
}
