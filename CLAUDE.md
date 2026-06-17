# CLAUDE.md — OcioKM0

This file provides authoritative guidance to Claude Code when working in this repository.
All directives here OVERRIDE default behavior and MUST be followed exactly.

---

## Project Identity

**OcioKM0** is a local event management platform for fairs, festivals, and municipal events in rural/urban environments. Built as a Software Development Final Degree Project (TFG).

- **Primary language:** TypeScript (strict mode) across all apps
- **Architecture:** pnpm monorepo — `apps/api`, `apps/mobile`, `apps/web`, `packages/shared-types`
- **Tech Stack:** NestJS · PostgreSQL · Prisma · Expo (React Native) · Next.js 15 · Mapbox · Firebase FCM · Redis

---

## Quality Rules (MANDATORY)

1. **Verify before declaring done.** Every implementation must compile, have no TypeScript errors, and pass logic review before you mark it complete. Run `tsc --noEmit` or the relevant typecheck script.

2. **Read before writing.** Always read and understand existing code in the affected module before implementing anything new. Never assume — check.

3. **100% confidence rule.** DO NOT implement anything unless you are certain it is correct. If in doubt about a library API, a schema relationship, or a side effect — stop and ask or research first.

4. **No speculative code.** Do not add features, abstractions, error handling, or comments beyond what the current task requires. Three similar lines is better than a premature abstraction.

5. **Type safety always.** Never use `any`. Use Prisma-generated types from `packages/shared-types` wherever possible. Validate all external inputs at boundaries.

6. **Security first.** Never introduce SQL injection, XSS, IDOR, or insecure direct references. Always authorize before allowing data access. Row-level checks must match the authenticated user's role.

---

## Memory System (MANDATORY)

### Session Start Protocol
Upon starting ANY new session in this repository:
1. Read `PROGRESS.md` at the project root to regain full context.
2. Read `CLAUDE.md` (this file) to reload all directives.
3. Do not proceed with work until both files have been read.

### Session End Protocol
Before ending any session or completing a significant block of work:
1. Update `PROGRESS.md` with the current state organized as:
   - **Completed**: What was finished (with file paths)
   - **In Progress**: What is partially done and what remains
   - **Pending**: What has not been started yet
   - **Decisions Made**: Architectural or design decisions taken and their rationale
2. Commit `PROGRESS.md` along with any code changes.

### Update Trigger
Update `PROGRESS.md` after every significant block of work — not just at session end.

---

## RBAC Model

| Role | Permissions |
|---|---|
| `SUPER_ADMIN` | Full platform access, manage town halls |
| `TOWN_HALL` | Create/manage events, validate artisans, send alerts, view analytics |
| `ARTISAN` | Manage own profile/products, join events (pending approval), place booth pins |
| `USER` | RSVP, follow artisans/events, view venue map, receive notifications |

Guards live in `apps/api/src/auth/guards/`. Always use `@Roles()` decorator + `RolesGuard` for protected endpoints.

---

## Key Domain Concepts

- **Event Matrix**: An event created by a Town Hall that artisans join as participants. The Town Hall controls event lifecycle; artisans manage their booth within it.
- **KM0**: Artisans/products with local provenance certification. Displayed as a badge in UI.
- **Venue Map**: A floor plan image uploaded by the Town Hall. Artisans place interactive pins (x%, y% coordinates) to mark their exact booth location.
- **Alert System**: Town Halls can push real-time alerts (weather, cancellation, schedule change) to all attendees of an event via FCM + WebSocket.

---

## File Naming Conventions

- NestJS: `kebab-case.module.ts`, `kebab-case.service.ts`, `kebab-case.controller.ts`
- Expo: `PascalCase.tsx` for screens and components
- Next.js: `page.tsx`, `layout.tsx` per App Router conventions
- Prisma: PascalCase model names, camelCase fields
- Shared types: `PascalCase.types.ts`

---

## Commit Convention

```
type(scope): short description

Types: feat | fix | refactor | test | docs | chore
Scopes: api | mobile | web | db | shared | infra
```

---

## Do Not

- Do not push to remote without explicit user instruction
- Do not run database migrations without verifying the schema change is intentional
- Do not install new packages without mentioning it and explaining why
- Do not generate functional code for a feature until the architecture for that feature is approved
