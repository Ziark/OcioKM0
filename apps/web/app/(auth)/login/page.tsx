'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import api from '@/lib/api';
import { useAuthStore, type UserDto } from '@/store/auth.store';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserDto;
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await api.post<LoginResponse>('/auth/login', { email, password });
      login(data.accessToken, data.refreshToken, data.user);
      router.push('/events');
    } catch {
      setError('Email o contraseña incorrectos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm shadow-xl border-2 border-zinc-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl font-bold text-center text-zinc-900">OcioKM0</CardTitle>
        <p className="text-center text-sm text-zinc-500 mt-1">Inicia sesión en tu cuenta</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Entrando…' : 'Entrar'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
