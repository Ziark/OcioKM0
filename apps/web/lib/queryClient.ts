'use client';

import { QueryClient } from '@tanstack/react-query';

let client: QueryClient | null = null;

export function getQueryClient(): QueryClient {
  if (typeof window === 'undefined') {
    return new QueryClient({ defaultOptions: { queries: { retry: 1, staleTime: 30_000 } } });
  }
  if (!client) {
    client = new QueryClient({ defaultOptions: { queries: { retry: 1, staleTime: 30_000 } } });
  }
  return client;
}
