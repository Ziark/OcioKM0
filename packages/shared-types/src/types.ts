import { AlertType, AttendeeStatus, EventStatus, NotificationType, ParticipantStatus, Role } from './enums';

// ─── Auth ────────────────────────────────────────────────────────────────────

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: Role;
  iat?: number;
  exp?: number;
}

// ─── User ────────────────────────────────────────────────────────────────────

export interface UserDto {
  id: string;
  email: string;
  role: Role;
  verified: boolean;
  createdAt: string;
  profile?: UserProfileDto;
}

export interface UserProfileDto {
  id: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
}

// ─── Town Hall ───────────────────────────────────────────────────────────────

export interface TownHallDto {
  id: string;
  userId: string;
  name: string;
  municipality: string;
  province: string;
  logoUrl?: string;
  verified: boolean;
}

// ─── Artisan ─────────────────────────────────────────────────────────────────

export interface ArtisanDto {
  id: string;
  userId: string;
  businessName: string;
  description?: string;
  categories: string[];
  km0Certified: boolean;
  logoUrl?: string;
  websiteUrl?: string;
}

// ─── Event ───────────────────────────────────────────────────────────────────

export interface EventDto {
  id: string;
  townHallId: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  locationLat: number;
  locationLng: number;
  locationAddr: string;
  status: EventStatus;
  categories: string[];
  coverImageUrl?: string;
  maxAttendees?: number;
  isTemplate: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Event Participant ───────────────────────────────────────────────────────

export interface EventParticipantDto {
  id: string;
  eventId: string;
  artisanId: string;
  artisan?: ArtisanDto;
  status: ParticipantStatus;
  boothCode?: string;
  positionX?: number;
  positionY?: number;
  products?: EventProductDto[];
}

export interface EventProductDto {
  id: string;
  participantId: string;
  name: string;
  description?: string;
  price?: number;
  category: string;
  km0Certified: boolean;
  imageUrl?: string;
}

// ─── Venue Map ───────────────────────────────────────────────────────────────

export interface VenueMapDto {
  id: string;
  eventId: string;
  imageUrl: string;
  widthPx: number;
  heightPx: number;
  zones?: VenueZone[];
}

export interface VenueZone {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

// ─── Alert ───────────────────────────────────────────────────────────────────

export interface AlertDto {
  id: string;
  eventId: string;
  townHallId: string;
  type: AlertType;
  title: string;
  message: string;
  severity: 1 | 2 | 3;
  createdAt: string;
}

// ─── Notification ────────────────────────────────────────────────────────────

export interface NotificationDto {
  id: string;
  recipientId: string;
  type: NotificationType;
  title: string;
  body: string;
  data?: Record<string, string>;
  read: boolean;
  createdAt: string;
}

// ─── Attendee ────────────────────────────────────────────────────────────────

export interface EventAttendeeDto {
  id: string;
  eventId: string;
  userId: string;
  status: AttendeeStatus;
  createdAt: string;
}

// ─── API Response Wrappers ───────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ─── Search / Filter ─────────────────────────────────────────────────────────

export interface EventFilterParams {
  query?: string;
  categories?: string[];
  startDate?: string;
  endDate?: string;
  lat?: number;
  lng?: number;
  radiusKm?: number;
  status?: EventStatus;
  page?: number;
  limit?: number;
}
