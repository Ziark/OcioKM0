'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAuthStore } from '@/store/auth.store';
import api from '@/lib/api';
import type { UserDto } from '@/store/auth.store';

const navItems = [
  { label: 'Eventos', href: '/events' },
  { label: 'Artesanos', href: '/artisans' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, login, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.replace('/login');
      return;
    }
    if (!user) {
      api.get<UserDto>('/auth/me')
        .then((r) => {
          const accessToken = localStorage.getItem('access_token') ?? '';
          const refreshToken = localStorage.getItem('refresh_token') ?? '';
          login(accessToken, refreshToken, r.data);
        })
        .catch(() => router.replace('/login'));
    }
  }, []);

  const displayName = user?.profile?.displayName ?? user?.email ?? '…';

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r bg-zinc-50 flex flex-col py-6 px-4 shrink-0">
        <p className="text-lg font-bold mb-6 px-2">OcioKM0</p>
        <Separator className="mb-4" />
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-200 ${
                pathname.startsWith(item.href) ? 'bg-zinc-200 text-zinc-900' : 'text-zinc-600'
              }`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Separator className="mb-4" />
        <div className="px-2 space-y-2">
          <p className="text-xs font-medium text-zinc-500 truncate">{displayName}</p>
          <Button variant="outline" size="sm" className="w-full" onClick={logout}>
            Cerrar sesión
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
