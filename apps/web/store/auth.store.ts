'use client';

import { create } from 'zustand';

export interface UserDto {
  id: string;
  email: string;
  role: 'USER' | 'ARTISAN' | 'TOWN_HALL' | 'SUPER_ADMIN';
  profile?: { displayName: string; avatarUrl?: string };
}

interface AuthState {
  user: UserDto | null;
  accessToken: string | null;
  login: (accessToken: string, refreshToken: string, user: UserDto) => void;
  logout: () => void;
  setUser: (user: UserDto) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,

  login: (accessToken, refreshToken, user) => {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    set({ user, accessToken });
  },

  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    set({ user: null, accessToken: null });
    window.location.href = '/login';
  },

  setUser: (user) => set({ user }),
}));
