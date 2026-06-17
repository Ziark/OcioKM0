import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, Role, EventStatus, ParticipantStatus, AttendeeStatus } from '../generated/prisma';
import * as bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env['DATABASE_URL'] });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const SALT_ROUNDS = 12;

async function main() {
  console.log('🌱 Seeding database...');

  // ─── Town Hall ───────────────────────────────────────────────────────────
  const townHallUser = await prisma.user.upsert({
    where: { email: 'ajuntament@vilanova.cat' },
    update: {},
    create: {
      email: 'ajuntament@vilanova.cat',
      passwordHash: await bcrypt.hash('password123', SALT_ROUNDS),
      role: Role.TOWN_HALL,
      verified: true,
      profile: { create: { displayName: 'Ajuntament de Vilanova' } },
      townHall: {
        create: {
          name: 'Ajuntament de Vilanova del Camí',
          municipality: 'Vilanova del Camí',
          province: 'Barcelona',
          verified: true,
        },
      },
    },
    include: { townHall: true },
  });

  // ─── Artisans ────────────────────────────────────────────────────────────
  const artisan1User = await prisma.user.upsert({
    where: { email: 'ceramiques@example.com' },
    update: {},
    create: {
      email: 'ceramiques@example.com',
      passwordHash: await bcrypt.hash('password123', SALT_ROUNDS),
      role: Role.ARTISAN,
      verified: true,
      profile: { create: { displayName: 'Can Terrissa' } },
      artisan: {
        create: {
          businessName: 'Can Terrissa',
          description: 'Ceràmica artesanal feta a mà des de 1985',
          categories: ['ceramics', 'crafts'],
          km0Certified: true,
          verifiedById: townHallUser.townHall!.id,
        },
      },
    },
    include: { artisan: true },
  });

  const artisan2User = await prisma.user.upsert({
    where: { email: 'mel@example.com' },
    update: {},
    create: {
      email: 'mel@example.com',
      passwordHash: await bcrypt.hash('password123', SALT_ROUNDS),
      role: Role.ARTISAN,
      verified: true,
      profile: { create: { displayName: 'Mel de la Muntanya' } },
      artisan: {
        create: {
          businessName: 'Mel de la Muntanya',
          description: 'Mel ecològica i productes d\'abella locals',
          categories: ['food', 'organic'],
          km0Certified: true,
          verifiedById: townHallUser.townHall!.id,
        },
      },
    },
    include: { artisan: true },
  });

  // ─── Regular Users ────────────────────────────────────────────────────────
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: 'anna@example.com' },
      update: {},
      create: {
        email: 'anna@example.com',
        passwordHash: await bcrypt.hash('password123', SALT_ROUNDS),
        role: Role.USER,
        verified: true,
        profile: { create: { displayName: 'Anna Garcia' } },
        preferences: {
          create: {
            favoriteCategories: ['ceramics', 'food'],
            maxDistanceKm: 25,
            language: 'ca',
          },
        },
      },
    }),
    prisma.user.upsert({
      where: { email: 'marc@example.com' },
      update: {},
      create: {
        email: 'marc@example.com',
        passwordHash: await bcrypt.hash('password123', SALT_ROUNDS),
        role: Role.USER,
        verified: true,
        profile: { create: { displayName: 'Marc Puig' } },
        preferences: {
          create: {
            favoriteCategories: ['food', 'organic'],
            language: 'ca',
          },
        },
      },
    }),
    prisma.user.upsert({
      where: { email: 'laura@example.com' },
      update: {},
      create: {
        email: 'laura@example.com',
        passwordHash: await bcrypt.hash('password123', SALT_ROUNDS),
        role: Role.USER,
        verified: true,
        profile: { create: { displayName: 'Laura Soler' } },
      },
    }),
  ]);

  // ─── Event ────────────────────────────────────────────────────────────────
  const event = await prisma.event.upsert({
    where: { id: 'seed-event-001' },
    update: {},
    create: {
      id: 'seed-event-001',
      townHallId: townHallUser.townHall!.id,
      title: 'Fira de Primavera de Vilanova del Camí 2026',
      description: 'La tradicional fira de primavera amb artesans locals, productes km0 i activitats per a tota la família.',
      startDate: new Date('2026-04-25T09:00:00Z'),
      endDate: new Date('2026-04-27T20:00:00Z'),
      locationLat: 41.5667,
      locationLng: 1.8833,
      locationAddr: 'Plaça de la Vila, Vilanova del Camí, Barcelona',
      status: EventStatus.PUBLISHED,
      categories: ['fair', 'crafts', 'food', 'km0'],
      maxAttendees: 500,
    },
  });

  // ─── Venue Map ───────────────────────────────────────────────────────────
  await prisma.venueMap.upsert({
    where: { eventId: event.id },
    update: {},
    create: {
      eventId: event.id,
      imageUrl: 'https://placehold.co/1200x800/e8f4e8/2d5a2d?text=Planta+Fira',
      widthPx: 1200,
      heightPx: 800,
      zones: [
        { id: 'zone-a', label: 'Zona A - Artesania', x: 5, y: 10, w: 40, h: 35 },
        { id: 'zone-b', label: 'Zona B - Alimentació', x: 55, y: 10, w: 40, h: 35 },
        { id: 'zone-c', label: 'Zona C - Activitats', x: 5, y: 55, w: 90, h: 35 },
      ],
    },
  });

  // ─── Event Participants ───────────────────────────────────────────────────
  const participant1 = await prisma.eventParticipant.upsert({
    where: { eventId_artisanId: { eventId: event.id, artisanId: artisan1User.artisan!.id } },
    update: {},
    create: {
      eventId: event.id,
      artisanId: artisan1User.artisan!.id,
      status: ParticipantStatus.APPROVED,
      boothCode: 'A-01',
      positionX: 15.0,
      positionY: 20.0,
    },
  });

  const participant2 = await prisma.eventParticipant.upsert({
    where: { eventId_artisanId: { eventId: event.id, artisanId: artisan2User.artisan!.id } },
    update: {},
    create: {
      eventId: event.id,
      artisanId: artisan2User.artisan!.id,
      status: ParticipantStatus.APPROVED,
      boothCode: 'B-01',
      positionX: 65.0,
      positionY: 20.0,
    },
  });

  // ─── Products ─────────────────────────────────────────────────────────────
  await Promise.all([
    prisma.eventProduct.createMany({
      skipDuplicates: true,
      data: [
        { participantId: participant1.id, name: 'Plat de terrissa gran', description: 'Plat decoratiu fet a mà, cuit a llenya', price: 45.0, category: 'ceramics', km0Certified: true },
        { participantId: participant1.id, name: 'Bol de ceràmica', description: 'Bol multiús, verd olivera', price: 18.0, category: 'ceramics', km0Certified: true },
        { participantId: participant2.id, name: 'Mel de bosc (500g)', description: 'Mel de flors de bosc, recollida a mà', price: 9.50, category: 'food', km0Certified: true },
        { participantId: participant2.id, name: 'Pack degustació mel', description: '3 varietats de mel artesanal de la comarca', price: 22.0, category: 'food', km0Certified: true },
      ],
    }),
  ]);

  // ─── Attendees ────────────────────────────────────────────────────────────
  await prisma.eventAttendee.createMany({
    skipDuplicates: true,
    data: [
      { eventId: event.id, userId: users[0].id, status: AttendeeStatus.GOING },
      { eventId: event.id, userId: users[1].id, status: AttendeeStatus.INTERESTED },
      { eventId: event.id, userId: users[2].id, status: AttendeeStatus.GOING },
    ],
  });

  // ─── Follows ──────────────────────────────────────────────────────────────
  await prisma.userFollow.createMany({
    skipDuplicates: true,
    data: [
      { userId: users[0].id, artisanId: artisan1User.artisan!.id },
      { userId: users[0].id, eventId: event.id },
      { userId: users[1].id, artisanId: artisan2User.artisan!.id },
    ],
  });

  console.log('✅ Seed complete');
  console.log('─── Demo credentials ───────────────────────');
  console.log('Town Hall:  ajuntament@vilanova.cat / password123');
  console.log('Artisan 1:  ceramiques@example.com / password123');
  console.log('Artisan 2:  mel@example.com        / password123');
  console.log('User 1:     anna@example.com        / password123');
  console.log('User 2:     marc@example.com        / password123');
  console.log('────────────────────────────────────────────');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
