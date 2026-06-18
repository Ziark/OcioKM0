import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000' });

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: unknown) => {
    if (!axios.isAxiosError(error)) return Promise.reject(error);
    const originalRequest = error.config;
    if (error.response?.status === 401 && originalRequest) {
      const refreshToken = typeof window !== 'undefined' ? localStorage.getItem('refresh_token') : null;
      if (!refreshToken) {
        if (typeof window !== 'undefined') window.location.href = '/login';
        return Promise.reject(error);
      }
      try {
        const { data } = await axios.post<{ accessToken: string; refreshToken: string }>(
          'http://localhost:3000/auth/refresh',
          {},
          { headers: { Authorization: `Bearer ${refreshToken}` } },
        );
        localStorage.setItem('access_token', data.accessToken);
        localStorage.setItem('refresh_token', data.refreshToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch {
        if (typeof window !== 'undefined') window.location.href = '/login';
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
