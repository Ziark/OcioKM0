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
      profile: { create: { displayName: 'Ayuntamiento de Vilanova' } },
      townHall: {
        create: {
          name: 'Ayuntamiento de Vilanova del Camí',
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
          description: 'Cerámica artesanal hecha a mano desde 1985',
          categories: ['ceramica', 'artesania'],
          km0Certified: true,
          verifiedById: townHallUser.townHall!.id,
        },
      },
    },
    include: { artisan: true },
  });

  // Update description if artisan already existed
  if (artisan1User.artisan) {
    await prisma.artisan.update({
      where: { id: artisan1User.artisan.id },
      data: { description: 'Cerámica artesanal hecha a mano desde 1985', categories: ['ceramica', 'artesania'] },
    });
  }

  const artisan2User = await prisma.user.upsert({
    where: { email: 'mel@example.com' },
    update: {},
    create: {
      email: 'mel@example.com',
      passwordHash: await bcrypt.hash('password123', SALT_ROUNDS),
      role: Role.ARTISAN,
      verified: true,
      profile: { create: { displayName: 'Miel de la Montaña' } },
      artisan: {
        create: {
          businessName: 'Miel de la Montaña',
          description: 'Miel ecológica y productos de abeja locales',
          categories: ['alimentacion', 'ecologico'],
          km0Certified: true,
          verifiedById: townHallUser.townHall!.id,
        },
      },
    },
    include: { artisan: true },
  });

  if (artisan2User.artisan) {
    await prisma.artisan.update({
      where: { id: artisan2User.artisan.id },
      data: {
        businessName: 'Miel de la Montaña',
        description: 'Miel ecológica y productos de abeja locales',
        categories: ['alimentacion', 'ecologico'],
      },
    });
  }

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
        profile: { create: { displayName: 'Anna García' } },
        preferences: {
          create: {
            favoriteCategories: ['ceramica', 'alimentacion'],
            maxDistanceKm: 25,
            language: 'es',
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
            favoriteCategories: ['alimentacion', 'ecologico'],
            language: 'es',
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
    update: {
      title: 'Feria de Primavera de Vilanova del Camí 2026',
      description: 'La tradicional feria de primavera con artesanos locales, productos km0 y actividades para toda la familia.',
      categories: ['feria', 'artesania', 'alimentacion', 'km0'],
    },
    create: {
      id: 'seed-event-001',
      townHallId: townHallUser.townHall!.id,
      title: 'Feria de Primavera de Vilanova del Camí 2026',
      description: 'La tradicional feria de primavera con artesanos locales, productos km0 y actividades para toda la familia.',
      startDate: new Date('2026-04-25T09:00:00Z'),
      endDate: new Date('2026-04-27T20:00:00Z'),
      locationLat: 41.5667,
      locationLng: 1.8833,
      locationAddr: 'Plaza de la Vila, Vilanova del Camí, Barcelona',
      status: EventStatus.PUBLISHED,
      categories: ['feria', 'artesania', 'alimentacion', 'km0'],
      maxAttendees: 500,
    },
  });

  // ─── Venue Map ───────────────────────────────────────────────────────────
  await prisma.venueMap.upsert({
    where: { eventId: event.id },
    update: {},
    create: {
      eventId: event.id,
      imageUrl: 'https://placehold.co/1200x800/e8f4e8/2d5a2d?text=Plano+Feria',
      widthPx: 1200,
      heightPx: 800,
      zones: [
        { id: 'zone-a', label: 'Zona A - Artesanía', x: 5, y: 10, w: 40, h: 35 },
        { id: 'zone-b', label: 'Zona B - Alimentación', x: 55, y: 10, w: 40, h: 35 },
        { id: 'zone-c', label: 'Zona C - Actividades', x: 5, y: 55, w: 90, h: 35 },
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
        { participantId: participant1.id, name: 'Plato de barro grande', description: 'Plato decorativo hecho a mano, cocido en horno de leña', price: 45.0, category: 'ceramica', km0Certified: true },
        { participantId: participant1.id, name: 'Cuenco de cerámica', description: 'Cuenco multiusos, color verde oliva', price: 18.0, category: 'ceramica', km0Certified: true },
        { participantId: participant2.id, name: 'Miel de bosque (500g)', description: 'Miel de flores silvestres, recogida a mano', price: 9.50, category: 'alimentacion', km0Certified: true },
        { participantId: participant2.id, name: 'Pack degustación miel', description: '3 variedades de miel artesanal de la comarca', price: 22.0, category: 'alimentacion', km0Certified: true },
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

  console.log('✅ Seed completado');
  console.log('─── Credenciales de demo ───────────────────────');
  console.log('Ayuntamiento:  ajuntament@vilanova.cat / password123');
  console.log('Artesano 1:    ceramiques@example.com  / password123');
  console.log('Artesano 2:    mel@example.com         / password123');
  console.log('Usuario 1:     anna@example.com        / password123');
  console.log('Usuario 2:     marc@example.com        / password123');
  console.log('────────────────────────────────────────────────');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
