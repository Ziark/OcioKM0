# PROGRESS.md — OcioKM0

> **Instructions for Claude**: Read this file at the start of every session to regain full project context. Update it after every significant block of work.

---

## Last Updated
2026-06-18 — Phase 2 Track A complete (commit pending)

---

## Completed

### Architecture & Planning
- [x] `CLAUDE.md` — Full project directives (quality rules, RBAC model, memory protocol, conventions)
- [x] Tech stack selected (all free tier — see Decisions)
- [x] Database schema designed (see memory `project_ociokm0_schema.md`)
- [x] Sub-agent strategy proposed (5 phases, see memory `project_ociokm0_agents.md`)

### Phase 0 — Monorepo Scaffold ✅ (commit 41aef8a)
- [x] pnpm workspace with `allowBuilds` for sharp/bcrypt/prisma/esbuild/unrs-resolver
- [x] `apps/api` — NestJS 11 (TypeScript, CommonJS)
- [x] `apps/mobile` — Expo SDK 56 + Expo Router v3
- [x] `apps/web` — Next.js 16 + Tailwind CSS v4
- [x] `packages/shared-types` — all enums + all DTOs
- [x] `docker-compose.yml` — PostgreSQL 16 + Redis 7
- [x] All 4 packages typecheck clean

### Phase 1 — Database & Auth Foundation ✅ (commit 05fedf9)
- [x] Prisma 7 schema: 13 models, all enums, `prisma-client-js` generator → `generated/prisma/`
- [x] `prisma.config.ts` with datasource URL + seed config (Prisma 7 split config)
- [x] Migration `20260617210042_init` applied against PostgreSQL 16 in Docker
- [x] Idempotent seed: TownHall, 2 Artisans, 3 Users, 1 Event, VenueMap, participants, products, attendees, follows
- [x] `PrismaService` (NestJS, global module) with `@prisma/adapter-pg` driver adapter
- [x] Full auth module: register / login / refresh / me
- [x] JWT access (15m) + refresh (7d), bcrypt 12 rounds
- [x] Guards: `JwtAuthGuard`, `JwtRefreshGuard`, `RolesGuard`
- [x] Decorators: `@Roles()`, `@CurrentUser()`
- [x] ConfigModule global, ValidationPipe global, CORS configured

---

## In Progress

Nothing — ready to begin Phase 2 Track B (Artisans + Products).

---

## Pending (Ordered by Priority)

### Phase 2 — Core API Modules

**[EVENTS module]** ✅ Track A complete
- [x] `EventsModule`: list (PUBLISHED+ACTIVE, filtered by category/date/townHallId, paginated), get-by-id, create, update, publish, cancel
- [x] `TownHallsModule`: get/update own profile, list events, KM0 certify/revoke artisan
- [x] `EventParticipantsModule`: apply (ARTISAN), list-approved (public), list-all (TOWN_HALL), review, withdraw, set booth pin
- [x] Venue map: upsert (TOWN_HALL), get (public) — wired into EventsModule
- [x] RSVP: create/update/cancel attendance — wired into EventsModule
- [x] Typecheck: zero errors

**[ARTISANS module]** ✅ Track B complete
- [x] `ArtisansModule`: list (search, km0Only filter, paginated), findOne (with recent participations), getMe, updateMe
- [x] `ProductsModule`: list (public), create/update/delete (ARTISAN, ownership-guarded)
- [x] Typecheck: zero errors

**[REALTIME module]** ✅ Track C complete
- [x] `@nestjs/websockets`, `@nestjs/platform-socket.io`, `socket.io` installed
- [x] `RealtimeGateway`: Socket.io gateway, join_event/leave_event rooms, `broadcastAlert()` helper
- [x] `IoAdapter` wired into `main.ts`
- [x] `AlertsModule`: create alert (TOWN_HALL, owns event), creates Notification records for all GOING/INTERESTED attendees, emits Socket.io broadcast to `event_${id}` room; list alerts by event (public)
- [x] `NotificationsModule`: list (paginated, unreadOnly filter, returns unreadCount), markRead, markAllRead
- [x] FCM push delivery: deferred — schema has no device token field (Phase 4 item)
- [x] Typecheck: zero errors

### Phase 3 — Frontend Foundation (Parallel)

**[MOBILE-SHELL]**:
- [ ] Install NativeWind v4, Zustand, TanStack Query, expo-secure-store
- [ ] Expo Router file tree: `(auth)/login`, `(auth)/register`, `(tabs)/index`, `(tabs)/explore`, `(tabs)/profile`
- [ ] Auth Zustand store + token persistence
- [ ] API client hook (TanStack Query)

**[WEB-SHELL]**:
- [ ] Install shadcn/ui, Recharts, react-map-gl, Zustand, TanStack Query
- [ ] Sidebar layout, auth middleware, dashboard placeholders
- [ ] Event list page, artisan list page

### Phase 4 — Feature Modules
- [ ] Venue Map (react-konva editor + mobile viewer)
- [ ] Smart Search + recommendation engine (content-based)
- [ ] Analytics Dashboard (Recharts)
- [ ] Weather alerts (Open-Meteo)
- [ ] QR code system per artisan booth
- [ ] Favorites / Follow system

### Phase 5 — Polish
- [ ] Offline caching (AsyncStorage + background sync)
- [ ] i18n (ca/es/en)
- [ ] Accessibility (WCAG 2.1 basics)
- [ ] Test suite (Vitest + Supertest, Jest mobile)

---

## Decisions Made

| Decision | Choice | Rationale |
|---|---|---|
| Repository structure | pnpm monorepo | Single developer, shared types, single git history |
| Mobile framework | Expo SDK 56 + Expo Router v3 | TypeScript, file-based routing, FCM via expo-notifications |
| Admin dashboard | Next.js 16 (App Router) | SSR, shadcn/ui, Tailwind v4, analytics-ready |
| Backend framework | NestJS 11 | TypeScript, RBAC-ready, WebSocket gateway |
| ORM | Prisma 7 (`prisma-client-js` generator) | Type-safe, migrations, schema-first |
| Prisma 7 engine | `@prisma/adapter-pg` driver adapter | Prisma 7 removed binary engine; WASM client requires driver adapter |
| Database | PostgreSQL 16 | Complex queries, JSON fields, array columns |
| Cache / PubSub | Redis 7 | Session store, notification pub/sub |
| Maps | Mapbox | Better free tier, better rural OSM data |
| Push Notifications | Firebase FCM | Cross-platform, free Spark plan |
| File Storage | Cloudinary | Image CDN + transformation, free no-CC tier |
| Weather | Open-Meteo | Completely free, no API key |
| Email | Resend | Free tier (3k/month), no CC |
| Venue map editor | react-konva | Canvas-based pin placement |
| API Deployment | Render (free tier) | No CC required |
| Web Deployment | Vercel (free hobby) | Native Next.js |
| Mobile Build | Expo EAS (free tier) | 30 builds/month |

---

## Critical Implementation Notes

- **Prisma 7 + NestJS**: `prisma-client-js` generator outputs to `generated/prisma/`. WASM client engine requires `@prisma/adapter-pg` — pass `new PrismaPg(pool)` to `new PrismaClient({ adapter })`. Pool must be ended in `onModuleDestroy`.
- **TypeScript isolatedModules**: Interface types used in decorated method signatures must use `import type { ... }` (TS1272).
- **pnpm 11 allowBuilds**: `pnpm-workspace.yaml` must have `allowBuilds` for `sharp`, `unrs-resolver`, `bcrypt`, `@prisma/engines`, `prisma`, `esbuild`.
- **Docker Compose v2**: No `version:` key in `docker-compose.yml`.
- **Seed command**: Configured in `prisma.config.ts` `migrations.seed` field (not package.json in Prisma 7). Also kept in package.json `"prisma": { "seed": "tsx prisma/seed.ts" }` for `npx prisma db seed` fallback.

---

## Key File Locations

| Resource | Path |
|---|---|
| Root workspace config | `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json` |
| NestJS API | `apps/api/src/` |
| Prisma schema + migrations | `apps/api/prisma/` |
| Generated Prisma client | `apps/api/generated/prisma/` |
| Expo Mobile | `apps/mobile/src/` |
| Next.js Web | `apps/web/app/` |
| Shared Types/Enums | `packages/shared-types/src/` |
| Docker (local dev) | `docker-compose.yml` |
| API env | `apps/api/.env` |

---

## Next Session Start Checklist
1. Read this file ✓
2. Run `docker compose up -d` (PostgreSQL 16 + Redis 7)
3. `cd apps/api && pnpm exec prisma db seed` (idempotent — safe to re-run)
4. Begin Phase 2: Events, Artisans, Realtime modules
