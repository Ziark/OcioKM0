# PROGRESS.md — OcioKM0

> **Instructions for Claude**: Read this file at the start of every session to regain full project context. Update it after every significant block of work.

---

## Last Updated
2026-06-17 — Phase 0 Monorepo Scaffold complete

---

## Completed

### Architecture & Planning
- [x] `CLAUDE.md` — Full project directives (quality rules, RBAC model, memory protocol, conventions)
- [x] Tech stack selected (NestJS + Prisma + PostgreSQL + Redis + Expo + Next.js 15 + Mapbox + FCM + Cloudinary + Open-Meteo + Render + Vercel + Expo EAS — all free tiers)
- [x] Database schema designed (see PROGRESS.md Decisions and memory file `project_ociokm0_schema.md`)
- [x] Sub-agent strategy proposed (5 phases, see memory file `project_ociokm0_agents.md`)

### Phase 0 — Monorepo Scaffold ✅ COMPLETE
- [x] pnpm workspace initialized (`pnpm-workspace.yaml`, root `package.json`, `tsconfig.base.json`)
- [x] `apps/api` — NestJS 11 (TypeScript, pnpm, Swagger-ready)
- [x] `apps/mobile` — Expo SDK 56 with Expo Router v3 (file-based routing, React 19, React Native 0.85.3)
- [x] `apps/web` — Next.js 16 with App Router, Tailwind CSS v4, TypeScript
- [x] `packages/shared-types` — All enums (Role, EventStatus, ParticipantStatus, AlertType, AttendeeStatus, NotificationType) + all DTOs (UserDto, EventDto, ArtisanDto, etc.) + EventFilterParams
- [x] `docker-compose.yml` — PostgreSQL 16 + Redis 7 (both with health checks)
- [x] `.gitignore` — Covers node_modules, .env, dist, Expo/RN artifacts, Next.js artifacts
- [x] `.env.example` files for all 3 apps
- [x] `apps/mobile/src/types/css.d.ts` — CSS module type declarations for Expo web target
- [x] `git init` — repository initialized
- [x] `pnpm install` — all 5 workspace packages installed successfully
- [x] TypeScript check — all 4 packages typecheck clean with zero errors

---

## In Progress

Nothing currently in progress. Phase 0 is fully complete.

---

## Pending (Ordered by Priority)

### Phase 1 — Database & Auth Foundation (Sequential: DB then Auth)

**[Agent DB]** Prisma schema + migration + seed:
- [ ] Install Prisma in `apps/api`: `pnpm --filter api add prisma @prisma/client`
- [ ] Create `apps/api/prisma/schema.prisma` (full schema — see Decisions below)
- [ ] Configure `DATABASE_URL` in `apps/api/.env`
- [ ] Run `prisma migrate dev --name init`
- [ ] Write `apps/api/prisma/seed.ts` (1 TownHall, 2 Artisans, 1 Event, 3 Users)
- [ ] Add Prisma service to NestJS (`apps/api/src/common/prisma.service.ts`)

**[Agent AUTH]** (after DB migration runs):
- [ ] Install auth packages: `@nestjs/jwt @nestjs/passport passport passport-local passport-jwt bcrypt`
- [ ] Create `apps/api/src/auth/` module (register, login, refresh, me endpoints)
- [ ] Create `apps/api/src/auth/guards/jwt-auth.guard.ts`
- [ ] Create `apps/api/src/auth/guards/roles.guard.ts`
- [ ] Create `apps/api/src/auth/decorators/roles.decorator.ts`
- [ ] Create `apps/api/src/auth/decorators/current-user.decorator.ts`
- [ ] JWT access token (15m) + refresh token (7d) pattern
- [ ] Password hashing with bcrypt

### Phase 2 — Core API Modules (Parallel after Phase 1)

**[Agent EVENTS]**:
- [ ] `apps/api/src/events/` module — CRUD with status lifecycle
- [ ] `apps/api/src/town-halls/` module — TownHall profile
- [ ] `apps/api/src/event-participants/` module — join/approve/reject

**[Agent ARTISANS]**:
- [ ] `apps/api/src/artisans/` module — profile + KM0 flag
- [ ] `apps/api/src/products/` module — products within event participation

**[Agent REALTIME]**:
- [ ] Install `@nestjs/websockets socket.io firebase-admin`
- [ ] `apps/api/src/notifications/` module — FCM + notification CRUD
- [ ] `apps/api/src/alerts/` module — broadcast to event attendees
- [ ] Socket.io gateway for real-time delivery

### Phase 3 — Frontend Foundation (Parallel with Phase 2)

**[Agent MOBILE-SHELL]**:
- [ ] Install NativeWind v4, Zustand, TanStack Query, expo-secure-store, @tanstack/react-query
- [ ] Replace template screens with OcioKM0 app structure
- [ ] Auth screens: `src/app/(auth)/login.tsx`, `(auth)/register.tsx`, `(auth)/role-select.tsx`
- [ ] Tab screens: `src/app/(tabs)/index.tsx` (home), `(tabs)/explore.tsx` (map), `(tabs)/profile.tsx`
- [ ] Auth store (Zustand) with token persistence
- [ ] API client (TanStack Query + fetch)

**[Agent WEB-SHELL]**:
- [ ] Install shadcn/ui, Recharts, react-map-gl, Zustand, TanStack Query
- [ ] Dashboard layout with sidebar: events, artisans, analytics, alerts
- [ ] Auth middleware (JWT cookie)
- [ ] Dashboard placeholder pages

### Phase 4 — Feature Modules
- [ ] Venue Map (Konva.js pin editor on web + viewer on mobile)
- [ ] Smart Search + Recommendation Engine
- [ ] Analytics Dashboard (Recharts charts)
- [ ] Weather alerts (Open-Meteo)
- [ ] QR Code system per artisan booth
- [ ] Favorites & Following
- [ ] Geolocation routing (Mapbox Directions)

### Phase 5 — Polish
- [ ] Offline caching (AsyncStorage + background sync)
- [ ] i18n (ca/es/en) via react-i18next
- [ ] Accessibility (WCAG 2.1 basics)
- [ ] Social sharing (WhatsApp deep links)
- [ ] Test suite (Vitest + Supertest for API, Jest for mobile)

---

## Decisions Made

| Decision | Choice | Rationale |
|---|---|---|
| Repository structure | pnpm monorepo | Single developer, shared types, single git history |
| Mobile framework | Expo SDK 56 + Expo Router v3 | TypeScript throughout, file-based routing, FCM via expo-notifications |
| Admin dashboard | Next.js 16 (App Router) | Rich desktop analytics, SSR, shadcn/ui, Tailwind v4 |
| Backend framework | NestJS 11 | TypeScript, RBAC-ready, WebSocket gateway, Swagger built-in |
| ORM | Prisma | Type-safe, excellent migrations, schema-first |
| Database | PostgreSQL 16 | Complex queries, JSON fields, array columns |
| Cache / PubSub | Redis 7 | Session store, notification pub/sub, rate limiting |
| Maps | Mapbox | Better free tier than Google Maps, better rural OSM data |
| Push Notifications | Firebase FCM | Cross-platform (iOS + Android), free Spark plan |
| File Storage | Cloudinary | Image CDN + transformation, free tier (no CC) |
| Weather | Open-Meteo | Completely free, no API key, EU-accurate |
| Email | Resend | Free tier (3k/month), no CC |
| Venue map editor | react-konva (Konva.js) | Canvas-based pin placement, achievable for TFG |
| Recommendation engine | Content-based filtering | Achievable for TFG without ML infrastructure |
| API Deployment | Render (free tier) | Free web service hosting, no CC required |
| Web Deployment | Vercel (free hobby) | Native Next.js support, no CC required |
| Mobile Build | Expo EAS (free tier) | 30 builds/month, sufficient for TFG |
| All services | 100% free tier | No payment required for TFG development or demo |

---

## Key File Locations

| Resource | Path |
|---|---|
| Root workspace config | `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json` |
| NestJS API | `apps/api/src/` |
| Expo Mobile | `apps/mobile/src/` |
| Next.js Web | `apps/web/app/` |
| Shared Types/Enums | `packages/shared-types/src/` |
| Docker (local dev) | `docker-compose.yml` |
| Environment templates | `apps/*/. env.example` |

---

## Next Session Start Checklist
1. Read this file ✓
2. Run `docker compose up -d` to start PostgreSQL + Redis
3. Copy `apps/api/.env.example` → `apps/api/.env` and fill in values
4. Begin Phase 1: install Prisma and write the schema
