# PROGRESS.md — OcioKM0

> **Instructions for Claude**: Read this file at the start of every session to regain full project context. Update it after every significant block of work.

---

## Last Updated
2026-06-18 — Session 3 complete (API fixed, web dashboard working, mobile shells done)

---

## Completed

### Architecture & Planning
- [x] `CLAUDE.md` — Full project directives (quality rules, RBAC model, memory protocol, conventions)
- [x] Tech stack selected (all free tier — see Decisions)
- [x] Database schema designed
- [x] Sub-agent strategy proposed (5 phases)

### Phase 0 — Monorepo Scaffold ✅
- [x] pnpm workspace with `allowBuilds` for sharp/bcrypt/prisma/esbuild/unrs-resolver
- [x] `apps/api` — NestJS 11 (TypeScript, CommonJS)
- [x] `apps/mobile` — Expo SDK 56 + Expo Router v3
- [x] `apps/web` — Next.js 16 + Tailwind CSS v4
- [x] `packages/shared-types` — all enums + all DTOs
- [x] `docker-compose.yml` — PostgreSQL 16 + Redis 7
- [x] All 4 packages typecheck clean

### Phase 1 — Database & Auth Foundation ✅
- [x] Prisma 7 schema: 13 models, all enums, generator → `src/generated/prisma/`
- [x] Migration `20260617210042_init` applied
- [x] Migration `20260618160803_nullable_location_coords` applied (locationLat/Lng now Float?)
- [x] Idempotent seed in Spanish: TownHall, 2 Artisans, 3 Users, 1 Event, VenueMap, participants, products, attendees, follows
- [x] `PrismaService` (NestJS, global module) with `@prisma/adapter-pg` driver adapter
- [x] Full auth module: register / login / refresh / me
- [x] JWT access (15m) + refresh (7d), bcrypt 12 rounds
- [x] Guards: `JwtAuthGuard`, `JwtRefreshGuard`, `RolesGuard`
- [x] Decorators: `@Roles()`, `@CurrentUser()`

### Phase 2 — Core API Modules ✅

**Track A — Events**
- [x] `EventsModule`: list (PUBLISHED+ACTIVE, filtered, paginated), get-by-id, create, update, publish, cancel, RSVP, venue map upsert/get
- [x] `TownHallsModule`: getMe, updateMe, `GET /town-halls/me/events` (all statuses incl. DRAFT), listArtisans, KM0 certify/revoke
- [x] `EventParticipantsModule`: apply, list-approved (public), list-all (TOWN_HALL), review, withdraw, set booth pin

**Track B — Artisans & Products**
- [x] `ArtisansModule`: list (search, km0Only filter, paginated), findOne, getMe, updateMe
- [x] `ProductsModule`: list (public), create/update/delete (ARTISAN, ownership-guarded)

**Track C — Realtime**
- [x] `RealtimeGateway`: Socket.io, join_event/leave_event rooms, broadcastAlert helper
- [x] `AlertsModule`: create (TOWN_HALL), list, Socket.io broadcast, Notification records for attendees
- [x] `NotificationsModule`: list (paginated, unreadOnly), markRead, markAllRead

### Phase 3 — Frontend Shells ✅

**API infrastructure fixes (blocking Phase 3)**
- [x] Prisma generator output moved to `src/generated/prisma/` so NestJS CLI compiles it into `dist/`
- [x] All 20 import paths updated across the API
- [x] Dev runner changed to `node --watch -r ts-node/register` (tsx/esbuild breaks NestJS decorator metadata)
- [x] CORS open in development (`origin: true` when NODE_ENV !== production)
- [x] `proxy.ts` replacing deprecated `middleware.ts` (Next.js 16 convention)

**Web dashboard (`apps/web/`)**
- [x] shadcn/ui installed (manual `components.json`, Tailwind v4 CSS variables in `globals.css`)
- [x] Zustand auth store (localStorage, login/logout/setUser)
- [x] axios client with JWT Bearer interceptor + 401 refresh
- [x] Login page — green theme, black text, Spanish, shadcn Card form
- [x] Dashboard layout — sidebar with Eventos / Artesanos nav, auth guard
- [x] Events page — calls `GET /town-halls/me/events` (shows DRAFT too), Spanish status badges
- [x] New event form — lat/lng optional, Spanish placeholders, `parseFloat` NaN fix
- [x] Artisans page — card grid, KM0 badge, client-side search
- [x] Participants page — table with Approve/Reject buttons per event

**Mobile app (`apps/mobile/`)**
- [x] Zustand auth store with SecureStore persistence
- [x] axios client with JWT Bearer interceptor + 401 refresh
- [x] Root layout with QueryClientProvider + AuthGuard (auto-redirect)
- [x] Login screen + Register screen (role picker: USER | ARTISAN)
- [x] Tab layout: Home (events), Explore, Notifications, Profile
- [x] Events tab — FlatList with EventCard, `GET /events`
- [x] Notifications tab — list, mark-read on press
- [x] Profile tab — user info, logout button

---

## In Progress

Nothing — Phase 3 complete. Ready to start Phase 4 (feature modules) or extend Phase 3 with detail screens.

---

## Pending (Ordered by Priority)

### Short-term — needed for a usable demo

- [ ] **Mobile: event detail screen** `app/event/[id].tsx` — full event info, RSVP button (USER), apply button (ARTISAN), participant list
- [ ] **Mobile: artisan detail screen** `app/artisan/[id].tsx` — business info, KM0 badge, products list
- [ ] **Mobile: artisan profile section** — ARTISAN-specific view on profile tab (GET /artisans/me)
- [ ] **Web: publish event button** — currently events can only be created as DRAFT; need publish action in the events table
- [ ] **Web: link from events table to participants** — click event row → go to `/participants/[eventId]`

### Phase 4 — Feature Modules

- [ ] Venue Map editor (web, react-konva) — TownHall uploads floor plan image, places zones
- [ ] Venue Map viewer (mobile) — ARTISANs place their booth pin (x%, y%)
- [ ] Smart search / recommendation engine (content-based filtering by categories + distance)
- [ ] Analytics dashboard for TownHall (Recharts — attendee counts, RSVP trends)
- [ ] Weather alerts integration (Open-Meteo API, triggered alert when bad weather)
- [ ] QR code per artisan booth (mobile scanner)
- [ ] Firebase FCM push notifications (device token registration + delivery)

### Phase 5 — Polish

- [ ] Offline caching (AsyncStorage + background sync on mobile)
- [ ] i18n (ca / es / en) — currently hardcoded Spanish
- [ ] Accessibility (WCAG 2.1 basics)
- [ ] Test suite (Vitest + Supertest for API, Jest for mobile)
- [ ] Deployment (Render for API, Vercel for web, Expo EAS for mobile)

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
| Event lat/lng | Optional (Float?) | Not all organizers have GPS data; can be added when editing |

---

## Critical Implementation Notes

- **Prisma 7 + NestJS dev**: Generator output is in `src/generated/prisma/` (inside sourceRoot). `ts-node/register` is used instead of `nest start --watch` because tsx/esbuild does not emit `emitDecoratorMetadata`, which NestJS DI requires. Dev script: `node --watch -r ts-node/register -r tsconfig-paths/register src/main.ts`
- **Next.js 16 proxy**: `middleware.ts` renamed to `proxy.ts` and function renamed from `middleware` to `proxy` (Next.js 16 convention change).
- **shadcn + Tailwind v4**: shadcn uses `hsl(var(--primary))` CSS variables. Must define all variables in `:root {}` AND map them in `@theme inline {}` in `globals.css`. shadcn `init` is interactive (arrow-key prompts) — write `components.json` manually then use `shadcn add --yes`.
- **CORS**: `origin: true` in development mirrors the request origin (allows any localhost variant). Production uses `FRONTEND_URL` env var.
- **TypeScript isolatedModules**: Interface types in decorated method signatures must use `import type { ... }` (TS1272).
- **pnpm 11 allowBuilds**: `pnpm-workspace.yaml` must list `sharp`, `unrs-resolver`, `bcrypt`, `@prisma/engines`, `prisma`, `esbuild`.

---

## Demo Credentials

| Role | Email | Password |
|---|---|---|
| Ayuntamiento | ajuntament@vilanova.cat | password123 |
| Artesano 1 | ceramiques@example.com | password123 |
| Artesano 2 | mel@example.com | password123 |
| Usuario 1 | anna@example.com | password123 |
| Usuario 2 | marc@example.com | password123 |

---

## Key File Locations

| Resource | Path |
|---|---|
| Root workspace config | `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json` |
| NestJS API | `apps/api/src/` |
| Prisma schema + migrations | `apps/api/prisma/` |
| Generated Prisma client | `apps/api/src/generated/prisma/` |
| API dev script | `node --watch -r ts-node/register -r tsconfig-paths/register src/main.ts` |
| Expo Mobile | `apps/mobile/src/` |
| Next.js Web | `apps/web/app/` |
| Shared Types/Enums | `packages/shared-types/src/` |
| Docker (local dev) | `docker-compose.yml` |
| API env | `apps/api/.env` |

---

## Next Session Start Checklist
1. Read this file ✓
2. Run `docker compose up -d` (PostgreSQL 16 + Redis 7)
3. Terminal 1: `pnpm --filter api dev` (API on port 3000)
4. Terminal 2: from `apps/web/` → `npx next dev -p 3001` (Web on port 3001)
5. Login at http://localhost:3001/login with `ajuntament@vilanova.cat` / `password123`
6. Begin next priority: mobile event detail screen (`app/event/[id].tsx`)
