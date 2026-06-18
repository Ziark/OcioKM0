import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';
import api from '@/lib/api';

export interface UserDto {
  id: string;
  email: string;
  role: string;
  profile?: { displayName: string; avatarUrl?: string };
}

interface AuthState {
  user: UserDto | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  login: (accessToken: string, refreshToken: string, user: UserDto) => Promise<void>;
  logout: () => Promise<void>;
  setTokens: (accessToken: string, refreshToken: string) => void;
  hydrate: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: true,

  login: async (accessToken, refreshToken, user) => {
    await SecureStore.setItemAsync('access_token', accessToken);
    await SecureStore.setItemAsync('refresh_token', refreshToken);
    set({ user, accessToken, refreshToken });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync('access_token');
    await SecureStore.deleteItemAsync('refresh_token');
    set({ user: null, accessToken: null, refreshToken: null });
    router.replace('/(auth)/login');
  },

  setTokens: (accessToken, refreshToken) => {
    void SecureStore.setItemAsync('access_token', accessToken);
    void SecureStore.setItemAsync('refresh_token', refreshToken);
    set({ accessToken, refreshToken });
  },

  hydrate: async () => {
    try {
      const accessToken = await SecureStore.getItemAsync('access_token');
      const refreshToken = await SecureStore.getItemAsync('refresh_token');
      if (accessToken && refreshToken) {
        const { data } = await api.get<UserDto>('/auth/me', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        set({ user: data, accessToken, refreshToken });
      }
    } catch {
      // tokens invalid or expired — stay logged out
    } finally {
      set({ isLoading: false });
    }
  },
}));
