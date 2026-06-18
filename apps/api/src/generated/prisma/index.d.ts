
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model TownHall
 * 
 */
export type TownHall = $Result.DefaultSelection<Prisma.$TownHallPayload>
/**
 * Model Artisan
 * 
 */
export type Artisan = $Result.DefaultSelection<Prisma.$ArtisanPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventParticipant
 * 
 */
export type EventParticipant = $Result.DefaultSelection<Prisma.$EventParticipantPayload>
/**
 * Model EventProduct
 * 
 */
export type EventProduct = $Result.DefaultSelection<Prisma.$EventProductPayload>
/**
 * Model VenueMap
 * 
 */
export type VenueMap = $Result.DefaultSelection<Prisma.$VenueMapPayload>
/**
 * Model EventAttendee
 * 
 */
export type EventAttendee = $Result.DefaultSelection<Prisma.$EventAttendeePayload>
/**
 * Model UserFollow
 * 
 */
export type UserFollow = $Result.DefaultSelection<Prisma.$UserFollowPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ARTISAN: 'ARTISAN',
  TOWN_HALL: 'TOWN_HALL',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const EventStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const ParticipantStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ParticipantStatus = (typeof ParticipantStatus)[keyof typeof ParticipantStatus]


export const AlertType: {
  WEATHER: 'WEATHER',
  CANCELLATION: 'CANCELLATION',
  SCHEDULE_CHANGE: 'SCHEDULE_CHANGE',
  GENERAL: 'GENERAL'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]


export const AttendeeStatus: {
  INTERESTED: 'INTERESTED',
  GOING: 'GOING',
  ATTENDED: 'ATTENDED'
};

export type AttendeeStatus = (typeof AttendeeStatus)[keyof typeof AttendeeStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type ParticipantStatus = $Enums.ParticipantStatus

export const ParticipantStatus: typeof $Enums.ParticipantStatus

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

export type AttendeeStatus = $Enums.AttendeeStatus

export const AttendeeStatus: typeof $Enums.AttendeeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.townHall`: Exposes CRUD operations for the **TownHall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TownHalls
    * const townHalls = await prisma.townHall.findMany()
    * ```
    */
  get townHall(): Prisma.TownHallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artisan`: Exposes CRUD operations for the **Artisan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artisans
    * const artisans = await prisma.artisan.findMany()
    * ```
    */
  get artisan(): Prisma.ArtisanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventParticipant`: Exposes CRUD operations for the **EventParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventParticipants
    * const eventParticipants = await prisma.eventParticipant.findMany()
    * ```
    */
  get eventParticipant(): Prisma.EventParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventProduct`: Exposes CRUD operations for the **EventProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventProducts
    * const eventProducts = await prisma.eventProduct.findMany()
    * ```
    */
  get eventProduct(): Prisma.EventProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venueMap`: Exposes CRUD operations for the **VenueMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenueMaps
    * const venueMaps = await prisma.venueMap.findMany()
    * ```
    */
  get venueMap(): Prisma.VenueMapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventAttendee`: Exposes CRUD operations for the **EventAttendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventAttendees
    * const eventAttendees = await prisma.eventAttendee.findMany()
    * ```
    */
  get eventAttendee(): Prisma.EventAttendeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFollow`: Exposes CRUD operations for the **UserFollow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFollows
    * const userFollows = await prisma.userFollow.findMany()
    * ```
    */
  get userFollow(): Prisma.UserFollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProfile: 'UserProfile',
    TownHall: 'TownHall',
    Artisan: 'Artisan',
    Event: 'Event',
    EventParticipant: 'EventParticipant',
    EventProduct: 'EventProduct',
    VenueMap: 'VenueMap',
    EventAttendee: 'EventAttendee',
    UserFollow: 'UserFollow',
    Notification: 'Notification',
    Alert: 'Alert',
    UserPreferences: 'UserPreferences'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "townHall" | "artisan" | "event" | "eventParticipant" | "eventProduct" | "venueMap" | "eventAttendee" | "userFollow" | "notification" | "alert" | "userPreferences"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      TownHall: {
        payload: Prisma.$TownHallPayload<ExtArgs>
        fields: Prisma.TownHallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TownHallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TownHallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload>
          }
          findFirst: {
            args: Prisma.TownHallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TownHallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload>
          }
          findMany: {
            args: Prisma.TownHallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload>[]
          }
          create: {
            args: Prisma.TownHallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload>
          }
          createMany: {
            args: Prisma.TownHallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TownHallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload>[]
          }
          delete: {
            args: Prisma.TownHallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload>
          }
          update: {
            args: Prisma.TownHallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload>
          }
          deleteMany: {
            args: Prisma.TownHallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TownHallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TownHallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload>[]
          }
          upsert: {
            args: Prisma.TownHallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TownHallPayload>
          }
          aggregate: {
            args: Prisma.TownHallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTownHall>
          }
          groupBy: {
            args: Prisma.TownHallGroupByArgs<ExtArgs>
            result: $Utils.Optional<TownHallGroupByOutputType>[]
          }
          count: {
            args: Prisma.TownHallCountArgs<ExtArgs>
            result: $Utils.Optional<TownHallCountAggregateOutputType> | number
          }
        }
      }
      Artisan: {
        payload: Prisma.$ArtisanPayload<ExtArgs>
        fields: Prisma.ArtisanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtisanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtisanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          findFirst: {
            args: Prisma.ArtisanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtisanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          findMany: {
            args: Prisma.ArtisanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>[]
          }
          create: {
            args: Prisma.ArtisanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          createMany: {
            args: Prisma.ArtisanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtisanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>[]
          }
          delete: {
            args: Prisma.ArtisanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          update: {
            args: Prisma.ArtisanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          deleteMany: {
            args: Prisma.ArtisanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtisanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtisanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>[]
          }
          upsert: {
            args: Prisma.ArtisanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          aggregate: {
            args: Prisma.ArtisanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtisan>
          }
          groupBy: {
            args: Prisma.ArtisanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtisanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtisanCountArgs<ExtArgs>
            result: $Utils.Optional<ArtisanCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventParticipant: {
        payload: Prisma.$EventParticipantPayload<ExtArgs>
        fields: Prisma.EventParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findFirst: {
            args: Prisma.EventParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findMany: {
            args: Prisma.EventParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          create: {
            args: Prisma.EventParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          createMany: {
            args: Prisma.EventParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          delete: {
            args: Prisma.EventParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          update: {
            args: Prisma.EventParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          deleteMany: {
            args: Prisma.EventParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          upsert: {
            args: Prisma.EventParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          aggregate: {
            args: Prisma.EventParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventParticipant>
          }
          groupBy: {
            args: Prisma.EventParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantCountAggregateOutputType> | number
          }
        }
      }
      EventProduct: {
        payload: Prisma.$EventProductPayload<ExtArgs>
        fields: Prisma.EventProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload>
          }
          findFirst: {
            args: Prisma.EventProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload>
          }
          findMany: {
            args: Prisma.EventProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload>[]
          }
          create: {
            args: Prisma.EventProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload>
          }
          createMany: {
            args: Prisma.EventProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload>[]
          }
          delete: {
            args: Prisma.EventProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload>
          }
          update: {
            args: Prisma.EventProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload>
          }
          deleteMany: {
            args: Prisma.EventProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload>[]
          }
          upsert: {
            args: Prisma.EventProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventProductPayload>
          }
          aggregate: {
            args: Prisma.EventProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventProduct>
          }
          groupBy: {
            args: Prisma.EventProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventProductCountArgs<ExtArgs>
            result: $Utils.Optional<EventProductCountAggregateOutputType> | number
          }
        }
      }
      VenueMap: {
        payload: Prisma.$VenueMapPayload<ExtArgs>
        fields: Prisma.VenueMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload>
          }
          findFirst: {
            args: Prisma.VenueMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload>
          }
          findMany: {
            args: Prisma.VenueMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload>[]
          }
          create: {
            args: Prisma.VenueMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload>
          }
          createMany: {
            args: Prisma.VenueMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueMapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload>[]
          }
          delete: {
            args: Prisma.VenueMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload>
          }
          update: {
            args: Prisma.VenueMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload>
          }
          deleteMany: {
            args: Prisma.VenueMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueMapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload>[]
          }
          upsert: {
            args: Prisma.VenueMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueMapPayload>
          }
          aggregate: {
            args: Prisma.VenueMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenueMap>
          }
          groupBy: {
            args: Prisma.VenueMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueMapGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueMapCountArgs<ExtArgs>
            result: $Utils.Optional<VenueMapCountAggregateOutputType> | number
          }
        }
      }
      EventAttendee: {
        payload: Prisma.$EventAttendeePayload<ExtArgs>
        fields: Prisma.EventAttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventAttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventAttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findFirst: {
            args: Prisma.EventAttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventAttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findMany: {
            args: Prisma.EventAttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          create: {
            args: Prisma.EventAttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          createMany: {
            args: Prisma.EventAttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventAttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          delete: {
            args: Prisma.EventAttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          update: {
            args: Prisma.EventAttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          deleteMany: {
            args: Prisma.EventAttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventAttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventAttendeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          upsert: {
            args: Prisma.EventAttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          aggregate: {
            args: Prisma.EventAttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventAttendee>
          }
          groupBy: {
            args: Prisma.EventAttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventAttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeCountAggregateOutputType> | number
          }
        }
      }
      UserFollow: {
        payload: Prisma.$UserFollowPayload<ExtArgs>
        fields: Prisma.UserFollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          findFirst: {
            args: Prisma.UserFollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          findMany: {
            args: Prisma.UserFollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>[]
          }
          create: {
            args: Prisma.UserFollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          createMany: {
            args: Prisma.UserFollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>[]
          }
          delete: {
            args: Prisma.UserFollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          update: {
            args: Prisma.UserFollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          deleteMany: {
            args: Prisma.UserFollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFollowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>[]
          }
          upsert: {
            args: Prisma.UserFollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFollowPayload>
          }
          aggregate: {
            args: Prisma.UserFollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFollow>
          }
          groupBy: {
            args: Prisma.UserFollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFollowCountArgs<ExtArgs>
            result: $Utils.Optional<UserFollowCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    townHall?: TownHallOmit
    artisan?: ArtisanOmit
    event?: EventOmit
    eventParticipant?: EventParticipantOmit
    eventProduct?: EventProductOmit
    venueMap?: VenueMapOmit
    eventAttendee?: EventAttendeeOmit
    userFollow?: UserFollowOmit
    notification?: NotificationOmit
    alert?: AlertOmit
    userPreferences?: UserPreferencesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    attendances: number
    follows: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
    follows?: boolean | UserCountOutputTypeCountFollowsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type TownHallCountOutputType
   */

  export type TownHallCountOutputType = {
    events: number
    alerts: number
  }

  export type TownHallCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TownHallCountOutputTypeCountEventsArgs
    alerts?: boolean | TownHallCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * TownHallCountOutputType without action
   */
  export type TownHallCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHallCountOutputType
     */
    select?: TownHallCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TownHallCountOutputType without action
   */
  export type TownHallCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * TownHallCountOutputType without action
   */
  export type TownHallCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type ArtisanCountOutputType
   */

  export type ArtisanCountOutputType = {
    participants: number
    followers: number
  }

  export type ArtisanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ArtisanCountOutputTypeCountParticipantsArgs
    followers?: boolean | ArtisanCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes
  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanCountOutputType
     */
    select?: ArtisanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }

  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    participants: number
    attendees: number
    alerts: number
    follows: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | EventCountOutputTypeCountParticipantsArgs
    attendees?: boolean | EventCountOutputTypeCountAttendeesArgs
    alerts?: boolean | EventCountOutputTypeCountAlertsArgs
    follows?: boolean | EventCountOutputTypeCountFollowsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountFollowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowWhereInput
  }


  /**
   * Count Type EventParticipantCountOutputType
   */

  export type EventParticipantCountOutputType = {
    products: number
  }

  export type EventParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | EventParticipantCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * EventParticipantCountOutputType without action
   */
  export type EventParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipantCountOutputType
     */
    select?: EventParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventParticipantCountOutputType without action
   */
  export type EventParticipantCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.Role
    verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    townHall?: boolean | User$townHallArgs<ExtArgs>
    artisan?: boolean | User$artisanArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    follows?: boolean | User$followsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "verified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    townHall?: boolean | User$townHallArgs<ExtArgs>
    artisan?: boolean | User$artisanArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    follows?: boolean | User$followsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      townHall: Prisma.$TownHallPayload<ExtArgs> | null
      artisan: Prisma.$ArtisanPayload<ExtArgs> | null
      attendances: Prisma.$EventAttendeePayload<ExtArgs>[]
      follows: Prisma.$UserFollowPayload<ExtArgs>[]
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.Role
      verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    townHall<T extends User$townHallArgs<ExtArgs> = {}>(args?: Subset<T, User$townHallArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    artisan<T extends User$artisanArgs<ExtArgs> = {}>(args?: Subset<T, User$artisanArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attendances<T extends User$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follows<T extends User$followsArgs<ExtArgs> = {}>(args?: Subset<T, User$followsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.townHall
   */
  export type User$townHallArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    where?: TownHallWhereInput
  }

  /**
   * User.artisan
   */
  export type User$artisanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    where?: ArtisanWhereInput
  }

  /**
   * User.attendances
   */
  export type User$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    cursor?: EventAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * User.follows
   */
  export type User$followsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    where?: UserFollowWhereInput
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    cursor?: UserFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    displayName: string | null
    avatarUrl: string | null
    bio: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    displayName: string | null
    avatarUrl: string | null
    bio: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    displayName: number
    avatarUrl: number
    bio: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    avatarUrl?: true
    bio?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    avatarUrl?: true
    bio?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    avatarUrl?: true
    bio?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    displayName: string
    avatarUrl: string | null
    bio: string | null
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    bio?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "displayName" | "avatarUrl" | "bio", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      displayName: string
      avatarUrl: string | null
      bio: string | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly displayName: FieldRef<"UserProfile", 'String'>
    readonly avatarUrl: FieldRef<"UserProfile", 'String'>
    readonly bio: FieldRef<"UserProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model TownHall
   */

  export type AggregateTownHall = {
    _count: TownHallCountAggregateOutputType | null
    _min: TownHallMinAggregateOutputType | null
    _max: TownHallMaxAggregateOutputType | null
  }

  export type TownHallMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    municipality: string | null
    province: string | null
    logoUrl: string | null
    verified: boolean | null
  }

  export type TownHallMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    municipality: string | null
    province: string | null
    logoUrl: string | null
    verified: boolean | null
  }

  export type TownHallCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    municipality: number
    province: number
    logoUrl: number
    verified: number
    _all: number
  }


  export type TownHallMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    municipality?: true
    province?: true
    logoUrl?: true
    verified?: true
  }

  export type TownHallMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    municipality?: true
    province?: true
    logoUrl?: true
    verified?: true
  }

  export type TownHallCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    municipality?: true
    province?: true
    logoUrl?: true
    verified?: true
    _all?: true
  }

  export type TownHallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TownHall to aggregate.
     */
    where?: TownHallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TownHalls to fetch.
     */
    orderBy?: TownHallOrderByWithRelationInput | TownHallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TownHallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TownHalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TownHalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TownHalls
    **/
    _count?: true | TownHallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TownHallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TownHallMaxAggregateInputType
  }

  export type GetTownHallAggregateType<T extends TownHallAggregateArgs> = {
        [P in keyof T & keyof AggregateTownHall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTownHall[P]>
      : GetScalarType<T[P], AggregateTownHall[P]>
  }




  export type TownHallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TownHallWhereInput
    orderBy?: TownHallOrderByWithAggregationInput | TownHallOrderByWithAggregationInput[]
    by: TownHallScalarFieldEnum[] | TownHallScalarFieldEnum
    having?: TownHallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TownHallCountAggregateInputType | true
    _min?: TownHallMinAggregateInputType
    _max?: TownHallMaxAggregateInputType
  }

  export type TownHallGroupByOutputType = {
    id: string
    userId: string
    name: string
    municipality: string
    province: string
    logoUrl: string | null
    verified: boolean
    _count: TownHallCountAggregateOutputType | null
    _min: TownHallMinAggregateOutputType | null
    _max: TownHallMaxAggregateOutputType | null
  }

  type GetTownHallGroupByPayload<T extends TownHallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TownHallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TownHallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TownHallGroupByOutputType[P]>
            : GetScalarType<T[P], TownHallGroupByOutputType[P]>
        }
      >
    >


  export type TownHallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    municipality?: boolean
    province?: boolean
    logoUrl?: boolean
    verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    events?: boolean | TownHall$eventsArgs<ExtArgs>
    alerts?: boolean | TownHall$alertsArgs<ExtArgs>
    _count?: boolean | TownHallCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["townHall"]>

  export type TownHallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    municipality?: boolean
    province?: boolean
    logoUrl?: boolean
    verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["townHall"]>

  export type TownHallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    municipality?: boolean
    province?: boolean
    logoUrl?: boolean
    verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["townHall"]>

  export type TownHallSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    municipality?: boolean
    province?: boolean
    logoUrl?: boolean
    verified?: boolean
  }

  export type TownHallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "municipality" | "province" | "logoUrl" | "verified", ExtArgs["result"]["townHall"]>
  export type TownHallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    events?: boolean | TownHall$eventsArgs<ExtArgs>
    alerts?: boolean | TownHall$alertsArgs<ExtArgs>
    _count?: boolean | TownHallCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TownHallIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TownHallIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TownHallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TownHall"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      events: Prisma.$EventPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      municipality: string
      province: string
      logoUrl: string | null
      verified: boolean
    }, ExtArgs["result"]["townHall"]>
    composites: {}
  }

  type TownHallGetPayload<S extends boolean | null | undefined | TownHallDefaultArgs> = $Result.GetResult<Prisma.$TownHallPayload, S>

  type TownHallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TownHallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TownHallCountAggregateInputType | true
    }

  export interface TownHallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TownHall'], meta: { name: 'TownHall' } }
    /**
     * Find zero or one TownHall that matches the filter.
     * @param {TownHallFindUniqueArgs} args - Arguments to find a TownHall
     * @example
     * // Get one TownHall
     * const townHall = await prisma.townHall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TownHallFindUniqueArgs>(args: SelectSubset<T, TownHallFindUniqueArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TownHall that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TownHallFindUniqueOrThrowArgs} args - Arguments to find a TownHall
     * @example
     * // Get one TownHall
     * const townHall = await prisma.townHall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TownHallFindUniqueOrThrowArgs>(args: SelectSubset<T, TownHallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TownHall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownHallFindFirstArgs} args - Arguments to find a TownHall
     * @example
     * // Get one TownHall
     * const townHall = await prisma.townHall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TownHallFindFirstArgs>(args?: SelectSubset<T, TownHallFindFirstArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TownHall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownHallFindFirstOrThrowArgs} args - Arguments to find a TownHall
     * @example
     * // Get one TownHall
     * const townHall = await prisma.townHall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TownHallFindFirstOrThrowArgs>(args?: SelectSubset<T, TownHallFindFirstOrThrowArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TownHalls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownHallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TownHalls
     * const townHalls = await prisma.townHall.findMany()
     * 
     * // Get first 10 TownHalls
     * const townHalls = await prisma.townHall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const townHallWithIdOnly = await prisma.townHall.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TownHallFindManyArgs>(args?: SelectSubset<T, TownHallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TownHall.
     * @param {TownHallCreateArgs} args - Arguments to create a TownHall.
     * @example
     * // Create one TownHall
     * const TownHall = await prisma.townHall.create({
     *   data: {
     *     // ... data to create a TownHall
     *   }
     * })
     * 
     */
    create<T extends TownHallCreateArgs>(args: SelectSubset<T, TownHallCreateArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TownHalls.
     * @param {TownHallCreateManyArgs} args - Arguments to create many TownHalls.
     * @example
     * // Create many TownHalls
     * const townHall = await prisma.townHall.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TownHallCreateManyArgs>(args?: SelectSubset<T, TownHallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TownHalls and returns the data saved in the database.
     * @param {TownHallCreateManyAndReturnArgs} args - Arguments to create many TownHalls.
     * @example
     * // Create many TownHalls
     * const townHall = await prisma.townHall.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TownHalls and only return the `id`
     * const townHallWithIdOnly = await prisma.townHall.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TownHallCreateManyAndReturnArgs>(args?: SelectSubset<T, TownHallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TownHall.
     * @param {TownHallDeleteArgs} args - Arguments to delete one TownHall.
     * @example
     * // Delete one TownHall
     * const TownHall = await prisma.townHall.delete({
     *   where: {
     *     // ... filter to delete one TownHall
     *   }
     * })
     * 
     */
    delete<T extends TownHallDeleteArgs>(args: SelectSubset<T, TownHallDeleteArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TownHall.
     * @param {TownHallUpdateArgs} args - Arguments to update one TownHall.
     * @example
     * // Update one TownHall
     * const townHall = await prisma.townHall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TownHallUpdateArgs>(args: SelectSubset<T, TownHallUpdateArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TownHalls.
     * @param {TownHallDeleteManyArgs} args - Arguments to filter TownHalls to delete.
     * @example
     * // Delete a few TownHalls
     * const { count } = await prisma.townHall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TownHallDeleteManyArgs>(args?: SelectSubset<T, TownHallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TownHalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownHallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TownHalls
     * const townHall = await prisma.townHall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TownHallUpdateManyArgs>(args: SelectSubset<T, TownHallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TownHalls and returns the data updated in the database.
     * @param {TownHallUpdateManyAndReturnArgs} args - Arguments to update many TownHalls.
     * @example
     * // Update many TownHalls
     * const townHall = await prisma.townHall.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TownHalls and only return the `id`
     * const townHallWithIdOnly = await prisma.townHall.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TownHallUpdateManyAndReturnArgs>(args: SelectSubset<T, TownHallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TownHall.
     * @param {TownHallUpsertArgs} args - Arguments to update or create a TownHall.
     * @example
     * // Update or create a TownHall
     * const townHall = await prisma.townHall.upsert({
     *   create: {
     *     // ... data to create a TownHall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TownHall we want to update
     *   }
     * })
     */
    upsert<T extends TownHallUpsertArgs>(args: SelectSubset<T, TownHallUpsertArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TownHalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownHallCountArgs} args - Arguments to filter TownHalls to count.
     * @example
     * // Count the number of TownHalls
     * const count = await prisma.townHall.count({
     *   where: {
     *     // ... the filter for the TownHalls we want to count
     *   }
     * })
    **/
    count<T extends TownHallCountArgs>(
      args?: Subset<T, TownHallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TownHallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TownHall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownHallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TownHallAggregateArgs>(args: Subset<T, TownHallAggregateArgs>): Prisma.PrismaPromise<GetTownHallAggregateType<T>>

    /**
     * Group by TownHall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownHallGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TownHallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TownHallGroupByArgs['orderBy'] }
        : { orderBy?: TownHallGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TownHallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTownHallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TownHall model
   */
  readonly fields: TownHallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TownHall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TownHallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends TownHall$eventsArgs<ExtArgs> = {}>(args?: Subset<T, TownHall$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends TownHall$alertsArgs<ExtArgs> = {}>(args?: Subset<T, TownHall$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TownHall model
   */
  interface TownHallFieldRefs {
    readonly id: FieldRef<"TownHall", 'String'>
    readonly userId: FieldRef<"TownHall", 'String'>
    readonly name: FieldRef<"TownHall", 'String'>
    readonly municipality: FieldRef<"TownHall", 'String'>
    readonly province: FieldRef<"TownHall", 'String'>
    readonly logoUrl: FieldRef<"TownHall", 'String'>
    readonly verified: FieldRef<"TownHall", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TownHall findUnique
   */
  export type TownHallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    /**
     * Filter, which TownHall to fetch.
     */
    where: TownHallWhereUniqueInput
  }

  /**
   * TownHall findUniqueOrThrow
   */
  export type TownHallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    /**
     * Filter, which TownHall to fetch.
     */
    where: TownHallWhereUniqueInput
  }

  /**
   * TownHall findFirst
   */
  export type TownHallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    /**
     * Filter, which TownHall to fetch.
     */
    where?: TownHallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TownHalls to fetch.
     */
    orderBy?: TownHallOrderByWithRelationInput | TownHallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TownHalls.
     */
    cursor?: TownHallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TownHalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TownHalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TownHalls.
     */
    distinct?: TownHallScalarFieldEnum | TownHallScalarFieldEnum[]
  }

  /**
   * TownHall findFirstOrThrow
   */
  export type TownHallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    /**
     * Filter, which TownHall to fetch.
     */
    where?: TownHallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TownHalls to fetch.
     */
    orderBy?: TownHallOrderByWithRelationInput | TownHallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TownHalls.
     */
    cursor?: TownHallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TownHalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TownHalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TownHalls.
     */
    distinct?: TownHallScalarFieldEnum | TownHallScalarFieldEnum[]
  }

  /**
   * TownHall findMany
   */
  export type TownHallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    /**
     * Filter, which TownHalls to fetch.
     */
    where?: TownHallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TownHalls to fetch.
     */
    orderBy?: TownHallOrderByWithRelationInput | TownHallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TownHalls.
     */
    cursor?: TownHallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TownHalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TownHalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TownHalls.
     */
    distinct?: TownHallScalarFieldEnum | TownHallScalarFieldEnum[]
  }

  /**
   * TownHall create
   */
  export type TownHallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    /**
     * The data needed to create a TownHall.
     */
    data: XOR<TownHallCreateInput, TownHallUncheckedCreateInput>
  }

  /**
   * TownHall createMany
   */
  export type TownHallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TownHalls.
     */
    data: TownHallCreateManyInput | TownHallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TownHall createManyAndReturn
   */
  export type TownHallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * The data used to create many TownHalls.
     */
    data: TownHallCreateManyInput | TownHallCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TownHall update
   */
  export type TownHallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    /**
     * The data needed to update a TownHall.
     */
    data: XOR<TownHallUpdateInput, TownHallUncheckedUpdateInput>
    /**
     * Choose, which TownHall to update.
     */
    where: TownHallWhereUniqueInput
  }

  /**
   * TownHall updateMany
   */
  export type TownHallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TownHalls.
     */
    data: XOR<TownHallUpdateManyMutationInput, TownHallUncheckedUpdateManyInput>
    /**
     * Filter which TownHalls to update
     */
    where?: TownHallWhereInput
    /**
     * Limit how many TownHalls to update.
     */
    limit?: number
  }

  /**
   * TownHall updateManyAndReturn
   */
  export type TownHallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * The data used to update TownHalls.
     */
    data: XOR<TownHallUpdateManyMutationInput, TownHallUncheckedUpdateManyInput>
    /**
     * Filter which TownHalls to update
     */
    where?: TownHallWhereInput
    /**
     * Limit how many TownHalls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TownHall upsert
   */
  export type TownHallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    /**
     * The filter to search for the TownHall to update in case it exists.
     */
    where: TownHallWhereUniqueInput
    /**
     * In case the TownHall found by the `where` argument doesn't exist, create a new TownHall with this data.
     */
    create: XOR<TownHallCreateInput, TownHallUncheckedCreateInput>
    /**
     * In case the TownHall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TownHallUpdateInput, TownHallUncheckedUpdateInput>
  }

  /**
   * TownHall delete
   */
  export type TownHallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
    /**
     * Filter which TownHall to delete.
     */
    where: TownHallWhereUniqueInput
  }

  /**
   * TownHall deleteMany
   */
  export type TownHallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TownHalls to delete
     */
    where?: TownHallWhereInput
    /**
     * Limit how many TownHalls to delete.
     */
    limit?: number
  }

  /**
   * TownHall.events
   */
  export type TownHall$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * TownHall.alerts
   */
  export type TownHall$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * TownHall without action
   */
  export type TownHallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownHall
     */
    select?: TownHallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TownHall
     */
    omit?: TownHallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TownHallInclude<ExtArgs> | null
  }


  /**
   * Model Artisan
   */

  export type AggregateArtisan = {
    _count: ArtisanCountAggregateOutputType | null
    _min: ArtisanMinAggregateOutputType | null
    _max: ArtisanMaxAggregateOutputType | null
  }

  export type ArtisanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    description: string | null
    km0Certified: boolean | null
    verifiedById: string | null
    logoUrl: string | null
    websiteUrl: string | null
  }

  export type ArtisanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    description: string | null
    km0Certified: boolean | null
    verifiedById: string | null
    logoUrl: string | null
    websiteUrl: string | null
  }

  export type ArtisanCountAggregateOutputType = {
    id: number
    userId: number
    businessName: number
    description: number
    categories: number
    km0Certified: number
    verifiedById: number
    logoUrl: number
    websiteUrl: number
    _all: number
  }


  export type ArtisanMinAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    description?: true
    km0Certified?: true
    verifiedById?: true
    logoUrl?: true
    websiteUrl?: true
  }

  export type ArtisanMaxAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    description?: true
    km0Certified?: true
    verifiedById?: true
    logoUrl?: true
    websiteUrl?: true
  }

  export type ArtisanCountAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    description?: true
    categories?: true
    km0Certified?: true
    verifiedById?: true
    logoUrl?: true
    websiteUrl?: true
    _all?: true
  }

  export type ArtisanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artisan to aggregate.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artisans
    **/
    _count?: true | ArtisanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtisanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtisanMaxAggregateInputType
  }

  export type GetArtisanAggregateType<T extends ArtisanAggregateArgs> = {
        [P in keyof T & keyof AggregateArtisan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtisan[P]>
      : GetScalarType<T[P], AggregateArtisan[P]>
  }




  export type ArtisanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtisanWhereInput
    orderBy?: ArtisanOrderByWithAggregationInput | ArtisanOrderByWithAggregationInput[]
    by: ArtisanScalarFieldEnum[] | ArtisanScalarFieldEnum
    having?: ArtisanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtisanCountAggregateInputType | true
    _min?: ArtisanMinAggregateInputType
    _max?: ArtisanMaxAggregateInputType
  }

  export type ArtisanGroupByOutputType = {
    id: string
    userId: string
    businessName: string
    description: string | null
    categories: string[]
    km0Certified: boolean
    verifiedById: string | null
    logoUrl: string | null
    websiteUrl: string | null
    _count: ArtisanCountAggregateOutputType | null
    _min: ArtisanMinAggregateOutputType | null
    _max: ArtisanMaxAggregateOutputType | null
  }

  type GetArtisanGroupByPayload<T extends ArtisanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtisanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtisanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtisanGroupByOutputType[P]>
            : GetScalarType<T[P], ArtisanGroupByOutputType[P]>
        }
      >
    >


  export type ArtisanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    description?: boolean
    categories?: boolean
    km0Certified?: boolean
    verifiedById?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Artisan$participantsArgs<ExtArgs>
    followers?: boolean | Artisan$followersArgs<ExtArgs>
    _count?: boolean | ArtisanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artisan"]>

  export type ArtisanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    description?: boolean
    categories?: boolean
    km0Certified?: boolean
    verifiedById?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artisan"]>

  export type ArtisanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    description?: boolean
    categories?: boolean
    km0Certified?: boolean
    verifiedById?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artisan"]>

  export type ArtisanSelectScalar = {
    id?: boolean
    userId?: boolean
    businessName?: boolean
    description?: boolean
    categories?: boolean
    km0Certified?: boolean
    verifiedById?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
  }

  export type ArtisanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "businessName" | "description" | "categories" | "km0Certified" | "verifiedById" | "logoUrl" | "websiteUrl", ExtArgs["result"]["artisan"]>
  export type ArtisanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Artisan$participantsArgs<ExtArgs>
    followers?: boolean | Artisan$followersArgs<ExtArgs>
    _count?: boolean | ArtisanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtisanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArtisanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArtisanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artisan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$EventParticipantPayload<ExtArgs>[]
      followers: Prisma.$UserFollowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      businessName: string
      description: string | null
      categories: string[]
      km0Certified: boolean
      verifiedById: string | null
      logoUrl: string | null
      websiteUrl: string | null
    }, ExtArgs["result"]["artisan"]>
    composites: {}
  }

  type ArtisanGetPayload<S extends boolean | null | undefined | ArtisanDefaultArgs> = $Result.GetResult<Prisma.$ArtisanPayload, S>

  type ArtisanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtisanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtisanCountAggregateInputType | true
    }

  export interface ArtisanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artisan'], meta: { name: 'Artisan' } }
    /**
     * Find zero or one Artisan that matches the filter.
     * @param {ArtisanFindUniqueArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtisanFindUniqueArgs>(args: SelectSubset<T, ArtisanFindUniqueArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artisan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtisanFindUniqueOrThrowArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtisanFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtisanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artisan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanFindFirstArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtisanFindFirstArgs>(args?: SelectSubset<T, ArtisanFindFirstArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artisan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanFindFirstOrThrowArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtisanFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtisanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artisans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artisans
     * const artisans = await prisma.artisan.findMany()
     * 
     * // Get first 10 Artisans
     * const artisans = await prisma.artisan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artisanWithIdOnly = await prisma.artisan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtisanFindManyArgs>(args?: SelectSubset<T, ArtisanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artisan.
     * @param {ArtisanCreateArgs} args - Arguments to create a Artisan.
     * @example
     * // Create one Artisan
     * const Artisan = await prisma.artisan.create({
     *   data: {
     *     // ... data to create a Artisan
     *   }
     * })
     * 
     */
    create<T extends ArtisanCreateArgs>(args: SelectSubset<T, ArtisanCreateArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artisans.
     * @param {ArtisanCreateManyArgs} args - Arguments to create many Artisans.
     * @example
     * // Create many Artisans
     * const artisan = await prisma.artisan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtisanCreateManyArgs>(args?: SelectSubset<T, ArtisanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artisans and returns the data saved in the database.
     * @param {ArtisanCreateManyAndReturnArgs} args - Arguments to create many Artisans.
     * @example
     * // Create many Artisans
     * const artisan = await prisma.artisan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artisans and only return the `id`
     * const artisanWithIdOnly = await prisma.artisan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtisanCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtisanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artisan.
     * @param {ArtisanDeleteArgs} args - Arguments to delete one Artisan.
     * @example
     * // Delete one Artisan
     * const Artisan = await prisma.artisan.delete({
     *   where: {
     *     // ... filter to delete one Artisan
     *   }
     * })
     * 
     */
    delete<T extends ArtisanDeleteArgs>(args: SelectSubset<T, ArtisanDeleteArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artisan.
     * @param {ArtisanUpdateArgs} args - Arguments to update one Artisan.
     * @example
     * // Update one Artisan
     * const artisan = await prisma.artisan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtisanUpdateArgs>(args: SelectSubset<T, ArtisanUpdateArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artisans.
     * @param {ArtisanDeleteManyArgs} args - Arguments to filter Artisans to delete.
     * @example
     * // Delete a few Artisans
     * const { count } = await prisma.artisan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtisanDeleteManyArgs>(args?: SelectSubset<T, ArtisanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artisans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artisans
     * const artisan = await prisma.artisan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtisanUpdateManyArgs>(args: SelectSubset<T, ArtisanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artisans and returns the data updated in the database.
     * @param {ArtisanUpdateManyAndReturnArgs} args - Arguments to update many Artisans.
     * @example
     * // Update many Artisans
     * const artisan = await prisma.artisan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artisans and only return the `id`
     * const artisanWithIdOnly = await prisma.artisan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtisanUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtisanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artisan.
     * @param {ArtisanUpsertArgs} args - Arguments to update or create a Artisan.
     * @example
     * // Update or create a Artisan
     * const artisan = await prisma.artisan.upsert({
     *   create: {
     *     // ... data to create a Artisan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artisan we want to update
     *   }
     * })
     */
    upsert<T extends ArtisanUpsertArgs>(args: SelectSubset<T, ArtisanUpsertArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artisans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanCountArgs} args - Arguments to filter Artisans to count.
     * @example
     * // Count the number of Artisans
     * const count = await prisma.artisan.count({
     *   where: {
     *     // ... the filter for the Artisans we want to count
     *   }
     * })
    **/
    count<T extends ArtisanCountArgs>(
      args?: Subset<T, ArtisanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtisanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artisan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtisanAggregateArgs>(args: Subset<T, ArtisanAggregateArgs>): Prisma.PrismaPromise<GetArtisanAggregateType<T>>

    /**
     * Group by Artisan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtisanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtisanGroupByArgs['orderBy'] }
        : { orderBy?: ArtisanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtisanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtisanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artisan model
   */
  readonly fields: ArtisanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artisan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtisanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Artisan$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Artisan$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends Artisan$followersArgs<ExtArgs> = {}>(args?: Subset<T, Artisan$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artisan model
   */
  interface ArtisanFieldRefs {
    readonly id: FieldRef<"Artisan", 'String'>
    readonly userId: FieldRef<"Artisan", 'String'>
    readonly businessName: FieldRef<"Artisan", 'String'>
    readonly description: FieldRef<"Artisan", 'String'>
    readonly categories: FieldRef<"Artisan", 'String[]'>
    readonly km0Certified: FieldRef<"Artisan", 'Boolean'>
    readonly verifiedById: FieldRef<"Artisan", 'String'>
    readonly logoUrl: FieldRef<"Artisan", 'String'>
    readonly websiteUrl: FieldRef<"Artisan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artisan findUnique
   */
  export type ArtisanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan findUniqueOrThrow
   */
  export type ArtisanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan findFirst
   */
  export type ArtisanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artisans.
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artisans.
     */
    distinct?: ArtisanScalarFieldEnum | ArtisanScalarFieldEnum[]
  }

  /**
   * Artisan findFirstOrThrow
   */
  export type ArtisanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artisans.
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artisans.
     */
    distinct?: ArtisanScalarFieldEnum | ArtisanScalarFieldEnum[]
  }

  /**
   * Artisan findMany
   */
  export type ArtisanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisans to fetch.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artisans.
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artisans.
     */
    distinct?: ArtisanScalarFieldEnum | ArtisanScalarFieldEnum[]
  }

  /**
   * Artisan create
   */
  export type ArtisanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * The data needed to create a Artisan.
     */
    data: XOR<ArtisanCreateInput, ArtisanUncheckedCreateInput>
  }

  /**
   * Artisan createMany
   */
  export type ArtisanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artisans.
     */
    data: ArtisanCreateManyInput | ArtisanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artisan createManyAndReturn
   */
  export type ArtisanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * The data used to create many Artisans.
     */
    data: ArtisanCreateManyInput | ArtisanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artisan update
   */
  export type ArtisanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * The data needed to update a Artisan.
     */
    data: XOR<ArtisanUpdateInput, ArtisanUncheckedUpdateInput>
    /**
     * Choose, which Artisan to update.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan updateMany
   */
  export type ArtisanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artisans.
     */
    data: XOR<ArtisanUpdateManyMutationInput, ArtisanUncheckedUpdateManyInput>
    /**
     * Filter which Artisans to update
     */
    where?: ArtisanWhereInput
    /**
     * Limit how many Artisans to update.
     */
    limit?: number
  }

  /**
   * Artisan updateManyAndReturn
   */
  export type ArtisanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * The data used to update Artisans.
     */
    data: XOR<ArtisanUpdateManyMutationInput, ArtisanUncheckedUpdateManyInput>
    /**
     * Filter which Artisans to update
     */
    where?: ArtisanWhereInput
    /**
     * Limit how many Artisans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artisan upsert
   */
  export type ArtisanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * The filter to search for the Artisan to update in case it exists.
     */
    where: ArtisanWhereUniqueInput
    /**
     * In case the Artisan found by the `where` argument doesn't exist, create a new Artisan with this data.
     */
    create: XOR<ArtisanCreateInput, ArtisanUncheckedCreateInput>
    /**
     * In case the Artisan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtisanUpdateInput, ArtisanUncheckedUpdateInput>
  }

  /**
   * Artisan delete
   */
  export type ArtisanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter which Artisan to delete.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan deleteMany
   */
  export type ArtisanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artisans to delete
     */
    where?: ArtisanWhereInput
    /**
     * Limit how many Artisans to delete.
     */
    limit?: number
  }

  /**
   * Artisan.participants
   */
  export type Artisan$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * Artisan.followers
   */
  export type Artisan$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    where?: UserFollowWhereInput
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    cursor?: UserFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * Artisan without action
   */
  export type ArtisanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    locationLat: number | null
    locationLng: number | null
    maxAttendees: number | null
  }

  export type EventSumAggregateOutputType = {
    locationLat: number | null
    locationLng: number | null
    maxAttendees: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    townHallId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    locationLat: number | null
    locationLng: number | null
    locationAddr: string | null
    status: $Enums.EventStatus | null
    coverImageUrl: string | null
    maxAttendees: number | null
    isTemplate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    townHallId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    locationLat: number | null
    locationLng: number | null
    locationAddr: string | null
    status: $Enums.EventStatus | null
    coverImageUrl: string | null
    maxAttendees: number | null
    isTemplate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    townHallId: number
    title: number
    description: number
    startDate: number
    endDate: number
    locationLat: number
    locationLng: number
    locationAddr: number
    status: number
    categories: number
    coverImageUrl: number
    maxAttendees: number
    isTemplate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    locationLat?: true
    locationLng?: true
    maxAttendees?: true
  }

  export type EventSumAggregateInputType = {
    locationLat?: true
    locationLng?: true
    maxAttendees?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    townHallId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    locationLat?: true
    locationLng?: true
    locationAddr?: true
    status?: true
    coverImageUrl?: true
    maxAttendees?: true
    isTemplate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    townHallId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    locationLat?: true
    locationLng?: true
    locationAddr?: true
    status?: true
    coverImageUrl?: true
    maxAttendees?: true
    isTemplate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    townHallId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    locationLat?: true
    locationLng?: true
    locationAddr?: true
    status?: true
    categories?: true
    coverImageUrl?: true
    maxAttendees?: true
    isTemplate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    townHallId: string
    title: string
    description: string
    startDate: Date
    endDate: Date
    locationLat: number
    locationLng: number
    locationAddr: string
    status: $Enums.EventStatus
    categories: string[]
    coverImageUrl: string | null
    maxAttendees: number | null
    isTemplate: boolean
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    townHallId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddr?: boolean
    status?: boolean
    categories?: boolean
    coverImageUrl?: boolean
    maxAttendees?: boolean
    isTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
    participants?: boolean | Event$participantsArgs<ExtArgs>
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    venueMap?: boolean | Event$venueMapArgs<ExtArgs>
    alerts?: boolean | Event$alertsArgs<ExtArgs>
    follows?: boolean | Event$followsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    townHallId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddr?: boolean
    status?: boolean
    categories?: boolean
    coverImageUrl?: boolean
    maxAttendees?: boolean
    isTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    townHallId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddr?: boolean
    status?: boolean
    categories?: boolean
    coverImageUrl?: boolean
    maxAttendees?: boolean
    isTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    townHallId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddr?: boolean
    status?: boolean
    categories?: boolean
    coverImageUrl?: boolean
    maxAttendees?: boolean
    isTemplate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "townHallId" | "title" | "description" | "startDate" | "endDate" | "locationLat" | "locationLng" | "locationAddr" | "status" | "categories" | "coverImageUrl" | "maxAttendees" | "isTemplate" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
    participants?: boolean | Event$participantsArgs<ExtArgs>
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    venueMap?: boolean | Event$venueMapArgs<ExtArgs>
    alerts?: boolean | Event$alertsArgs<ExtArgs>
    follows?: boolean | Event$followsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      townHall: Prisma.$TownHallPayload<ExtArgs>
      participants: Prisma.$EventParticipantPayload<ExtArgs>[]
      attendees: Prisma.$EventAttendeePayload<ExtArgs>[]
      venueMap: Prisma.$VenueMapPayload<ExtArgs> | null
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      follows: Prisma.$UserFollowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      townHallId: string
      title: string
      description: string
      startDate: Date
      endDate: Date
      locationLat: number
      locationLng: number
      locationAddr: string
      status: $Enums.EventStatus
      categories: string[]
      coverImageUrl: string | null
      maxAttendees: number | null
      isTemplate: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    townHall<T extends TownHallDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TownHallDefaultArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Event$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Event$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendees<T extends Event$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Event$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    venueMap<T extends Event$venueMapArgs<ExtArgs> = {}>(args?: Subset<T, Event$venueMapArgs<ExtArgs>>): Prisma__VenueMapClient<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alerts<T extends Event$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Event$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follows<T extends Event$followsArgs<ExtArgs> = {}>(args?: Subset<T, Event$followsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly townHallId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly locationLat: FieldRef<"Event", 'Float'>
    readonly locationLng: FieldRef<"Event", 'Float'>
    readonly locationAddr: FieldRef<"Event", 'String'>
    readonly status: FieldRef<"Event", 'EventStatus'>
    readonly categories: FieldRef<"Event", 'String[]'>
    readonly coverImageUrl: FieldRef<"Event", 'String'>
    readonly maxAttendees: FieldRef<"Event", 'Int'>
    readonly isTemplate: FieldRef<"Event", 'Boolean'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.participants
   */
  export type Event$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * Event.attendees
   */
  export type Event$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    cursor?: EventAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * Event.venueMap
   */
  export type Event$venueMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    where?: VenueMapWhereInput
  }

  /**
   * Event.alerts
   */
  export type Event$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Event.follows
   */
  export type Event$followsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    where?: UserFollowWhereInput
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    cursor?: UserFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventParticipant
   */

  export type AggregateEventParticipant = {
    _count: EventParticipantCountAggregateOutputType | null
    _avg: EventParticipantAvgAggregateOutputType | null
    _sum: EventParticipantSumAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  export type EventParticipantAvgAggregateOutputType = {
    positionX: number | null
    positionY: number | null
  }

  export type EventParticipantSumAggregateOutputType = {
    positionX: number | null
    positionY: number | null
  }

  export type EventParticipantMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    artisanId: string | null
    status: $Enums.ParticipantStatus | null
    boothCode: string | null
    positionX: number | null
    positionY: number | null
    createdAt: Date | null
  }

  export type EventParticipantMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    artisanId: string | null
    status: $Enums.ParticipantStatus | null
    boothCode: string | null
    positionX: number | null
    positionY: number | null
    createdAt: Date | null
  }

  export type EventParticipantCountAggregateOutputType = {
    id: number
    eventId: number
    artisanId: number
    status: number
    boothCode: number
    positionX: number
    positionY: number
    createdAt: number
    _all: number
  }


  export type EventParticipantAvgAggregateInputType = {
    positionX?: true
    positionY?: true
  }

  export type EventParticipantSumAggregateInputType = {
    positionX?: true
    positionY?: true
  }

  export type EventParticipantMinAggregateInputType = {
    id?: true
    eventId?: true
    artisanId?: true
    status?: true
    boothCode?: true
    positionX?: true
    positionY?: true
    createdAt?: true
  }

  export type EventParticipantMaxAggregateInputType = {
    id?: true
    eventId?: true
    artisanId?: true
    status?: true
    boothCode?: true
    positionX?: true
    positionY?: true
    createdAt?: true
  }

  export type EventParticipantCountAggregateInputType = {
    id?: true
    eventId?: true
    artisanId?: true
    status?: true
    boothCode?: true
    positionX?: true
    positionY?: true
    createdAt?: true
    _all?: true
  }

  export type EventParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipant to aggregate.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventParticipants
    **/
    _count?: true | EventParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventParticipantMaxAggregateInputType
  }

  export type GetEventParticipantAggregateType<T extends EventParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateEventParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventParticipant[P]>
      : GetScalarType<T[P], AggregateEventParticipant[P]>
  }




  export type EventParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithAggregationInput | EventParticipantOrderByWithAggregationInput[]
    by: EventParticipantScalarFieldEnum[] | EventParticipantScalarFieldEnum
    having?: EventParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventParticipantCountAggregateInputType | true
    _avg?: EventParticipantAvgAggregateInputType
    _sum?: EventParticipantSumAggregateInputType
    _min?: EventParticipantMinAggregateInputType
    _max?: EventParticipantMaxAggregateInputType
  }

  export type EventParticipantGroupByOutputType = {
    id: string
    eventId: string
    artisanId: string
    status: $Enums.ParticipantStatus
    boothCode: string | null
    positionX: number | null
    positionY: number | null
    createdAt: Date
    _count: EventParticipantCountAggregateOutputType | null
    _avg: EventParticipantAvgAggregateOutputType | null
    _sum: EventParticipantSumAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  type GetEventParticipantGroupByPayload<T extends EventParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
        }
      >
    >


  export type EventParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    artisanId?: boolean
    status?: boolean
    boothCode?: boolean
    positionX?: boolean
    positionY?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    products?: boolean | EventParticipant$productsArgs<ExtArgs>
    _count?: boolean | EventParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    artisanId?: boolean
    status?: boolean
    boothCode?: boolean
    positionX?: boolean
    positionY?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    artisanId?: boolean
    status?: boolean
    boothCode?: boolean
    positionX?: boolean
    positionY?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectScalar = {
    id?: boolean
    eventId?: boolean
    artisanId?: boolean
    status?: boolean
    boothCode?: boolean
    positionX?: boolean
    positionY?: boolean
    createdAt?: boolean
  }

  export type EventParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "artisanId" | "status" | "boothCode" | "positionX" | "positionY" | "createdAt", ExtArgs["result"]["eventParticipant"]>
  export type EventParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    products?: boolean | EventParticipant$productsArgs<ExtArgs>
    _count?: boolean | EventParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
  }

  export type $EventParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventParticipant"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      artisan: Prisma.$ArtisanPayload<ExtArgs>
      products: Prisma.$EventProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      artisanId: string
      status: $Enums.ParticipantStatus
      boothCode: string | null
      positionX: number | null
      positionY: number | null
      createdAt: Date
    }, ExtArgs["result"]["eventParticipant"]>
    composites: {}
  }

  type EventParticipantGetPayload<S extends boolean | null | undefined | EventParticipantDefaultArgs> = $Result.GetResult<Prisma.$EventParticipantPayload, S>

  type EventParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventParticipantCountAggregateInputType | true
    }

  export interface EventParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventParticipant'], meta: { name: 'EventParticipant' } }
    /**
     * Find zero or one EventParticipant that matches the filter.
     * @param {EventParticipantFindUniqueArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventParticipantFindUniqueArgs>(args: SelectSubset<T, EventParticipantFindUniqueArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventParticipantFindUniqueOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, EventParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventParticipantFindFirstArgs>(args?: SelectSubset<T, EventParticipantFindFirstArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, EventParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany()
     * 
     * // Get first 10 EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventParticipantWithIdOnly = await prisma.eventParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventParticipantFindManyArgs>(args?: SelectSubset<T, EventParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventParticipant.
     * @param {EventParticipantCreateArgs} args - Arguments to create a EventParticipant.
     * @example
     * // Create one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.create({
     *   data: {
     *     // ... data to create a EventParticipant
     *   }
     * })
     * 
     */
    create<T extends EventParticipantCreateArgs>(args: SelectSubset<T, EventParticipantCreateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventParticipants.
     * @param {EventParticipantCreateManyArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventParticipantCreateManyArgs>(args?: SelectSubset<T, EventParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventParticipants and returns the data saved in the database.
     * @param {EventParticipantCreateManyAndReturnArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventParticipants and only return the `id`
     * const eventParticipantWithIdOnly = await prisma.eventParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, EventParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventParticipant.
     * @param {EventParticipantDeleteArgs} args - Arguments to delete one EventParticipant.
     * @example
     * // Delete one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.delete({
     *   where: {
     *     // ... filter to delete one EventParticipant
     *   }
     * })
     * 
     */
    delete<T extends EventParticipantDeleteArgs>(args: SelectSubset<T, EventParticipantDeleteArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventParticipant.
     * @param {EventParticipantUpdateArgs} args - Arguments to update one EventParticipant.
     * @example
     * // Update one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventParticipantUpdateArgs>(args: SelectSubset<T, EventParticipantUpdateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventParticipants.
     * @param {EventParticipantDeleteManyArgs} args - Arguments to filter EventParticipants to delete.
     * @example
     * // Delete a few EventParticipants
     * const { count } = await prisma.eventParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventParticipantDeleteManyArgs>(args?: SelectSubset<T, EventParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventParticipantUpdateManyArgs>(args: SelectSubset<T, EventParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants and returns the data updated in the database.
     * @param {EventParticipantUpdateManyAndReturnArgs} args - Arguments to update many EventParticipants.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventParticipants and only return the `id`
     * const eventParticipantWithIdOnly = await prisma.eventParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, EventParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventParticipant.
     * @param {EventParticipantUpsertArgs} args - Arguments to update or create a EventParticipant.
     * @example
     * // Update or create a EventParticipant
     * const eventParticipant = await prisma.eventParticipant.upsert({
     *   create: {
     *     // ... data to create a EventParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventParticipant we want to update
     *   }
     * })
     */
    upsert<T extends EventParticipantUpsertArgs>(args: SelectSubset<T, EventParticipantUpsertArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantCountArgs} args - Arguments to filter EventParticipants to count.
     * @example
     * // Count the number of EventParticipants
     * const count = await prisma.eventParticipant.count({
     *   where: {
     *     // ... the filter for the EventParticipants we want to count
     *   }
     * })
    **/
    count<T extends EventParticipantCountArgs>(
      args?: Subset<T, EventParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventParticipantAggregateArgs>(args: Subset<T, EventParticipantAggregateArgs>): Prisma.PrismaPromise<GetEventParticipantAggregateType<T>>

    /**
     * Group by EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventParticipantGroupByArgs['orderBy'] }
        : { orderBy?: EventParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventParticipant model
   */
  readonly fields: EventParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artisan<T extends ArtisanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtisanDefaultArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends EventParticipant$productsArgs<ExtArgs> = {}>(args?: Subset<T, EventParticipant$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventParticipant model
   */
  interface EventParticipantFieldRefs {
    readonly id: FieldRef<"EventParticipant", 'String'>
    readonly eventId: FieldRef<"EventParticipant", 'String'>
    readonly artisanId: FieldRef<"EventParticipant", 'String'>
    readonly status: FieldRef<"EventParticipant", 'ParticipantStatus'>
    readonly boothCode: FieldRef<"EventParticipant", 'String'>
    readonly positionX: FieldRef<"EventParticipant", 'Float'>
    readonly positionY: FieldRef<"EventParticipant", 'Float'>
    readonly createdAt: FieldRef<"EventParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventParticipant findUnique
   */
  export type EventParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findUniqueOrThrow
   */
  export type EventParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findFirst
   */
  export type EventParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findFirstOrThrow
   */
  export type EventParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findMany
   */
  export type EventParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipants to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant create
   */
  export type EventParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a EventParticipant.
     */
    data: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
  }

  /**
   * EventParticipant createMany
   */
  export type EventParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventParticipant createManyAndReturn
   */
  export type EventParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant update
   */
  export type EventParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a EventParticipant.
     */
    data: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
    /**
     * Choose, which EventParticipant to update.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant updateMany
   */
  export type EventParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
  }

  /**
   * EventParticipant updateManyAndReturn
   */
  export type EventParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant upsert
   */
  export type EventParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the EventParticipant to update in case it exists.
     */
    where: EventParticipantWhereUniqueInput
    /**
     * In case the EventParticipant found by the `where` argument doesn't exist, create a new EventParticipant with this data.
     */
    create: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
    /**
     * In case the EventParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
  }

  /**
   * EventParticipant delete
   */
  export type EventParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter which EventParticipant to delete.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant deleteMany
   */
  export type EventParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipants to delete
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to delete.
     */
    limit?: number
  }

  /**
   * EventParticipant.products
   */
  export type EventParticipant$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    where?: EventProductWhereInput
    orderBy?: EventProductOrderByWithRelationInput | EventProductOrderByWithRelationInput[]
    cursor?: EventProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventProductScalarFieldEnum | EventProductScalarFieldEnum[]
  }

  /**
   * EventParticipant without action
   */
  export type EventParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
  }


  /**
   * Model EventProduct
   */

  export type AggregateEventProduct = {
    _count: EventProductCountAggregateOutputType | null
    _avg: EventProductAvgAggregateOutputType | null
    _sum: EventProductSumAggregateOutputType | null
    _min: EventProductMinAggregateOutputType | null
    _max: EventProductMaxAggregateOutputType | null
  }

  export type EventProductAvgAggregateOutputType = {
    price: number | null
  }

  export type EventProductSumAggregateOutputType = {
    price: number | null
  }

  export type EventProductMinAggregateOutputType = {
    id: string | null
    participantId: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    km0Certified: boolean | null
    imageUrl: string | null
  }

  export type EventProductMaxAggregateOutputType = {
    id: string | null
    participantId: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    km0Certified: boolean | null
    imageUrl: string | null
  }

  export type EventProductCountAggregateOutputType = {
    id: number
    participantId: number
    name: number
    description: number
    price: number
    category: number
    km0Certified: number
    imageUrl: number
    _all: number
  }


  export type EventProductAvgAggregateInputType = {
    price?: true
  }

  export type EventProductSumAggregateInputType = {
    price?: true
  }

  export type EventProductMinAggregateInputType = {
    id?: true
    participantId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    km0Certified?: true
    imageUrl?: true
  }

  export type EventProductMaxAggregateInputType = {
    id?: true
    participantId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    km0Certified?: true
    imageUrl?: true
  }

  export type EventProductCountAggregateInputType = {
    id?: true
    participantId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    km0Certified?: true
    imageUrl?: true
    _all?: true
  }

  export type EventProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventProduct to aggregate.
     */
    where?: EventProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventProducts to fetch.
     */
    orderBy?: EventProductOrderByWithRelationInput | EventProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventProducts
    **/
    _count?: true | EventProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventProductMaxAggregateInputType
  }

  export type GetEventProductAggregateType<T extends EventProductAggregateArgs> = {
        [P in keyof T & keyof AggregateEventProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventProduct[P]>
      : GetScalarType<T[P], AggregateEventProduct[P]>
  }




  export type EventProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventProductWhereInput
    orderBy?: EventProductOrderByWithAggregationInput | EventProductOrderByWithAggregationInput[]
    by: EventProductScalarFieldEnum[] | EventProductScalarFieldEnum
    having?: EventProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventProductCountAggregateInputType | true
    _avg?: EventProductAvgAggregateInputType
    _sum?: EventProductSumAggregateInputType
    _min?: EventProductMinAggregateInputType
    _max?: EventProductMaxAggregateInputType
  }

  export type EventProductGroupByOutputType = {
    id: string
    participantId: string
    name: string
    description: string | null
    price: number | null
    category: string
    km0Certified: boolean
    imageUrl: string | null
    _count: EventProductCountAggregateOutputType | null
    _avg: EventProductAvgAggregateOutputType | null
    _sum: EventProductSumAggregateOutputType | null
    _min: EventProductMinAggregateOutputType | null
    _max: EventProductMaxAggregateOutputType | null
  }

  type GetEventProductGroupByPayload<T extends EventProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventProductGroupByOutputType[P]>
            : GetScalarType<T[P], EventProductGroupByOutputType[P]>
        }
      >
    >


  export type EventProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    km0Certified?: boolean
    imageUrl?: boolean
    participant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventProduct"]>

  export type EventProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    km0Certified?: boolean
    imageUrl?: boolean
    participant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventProduct"]>

  export type EventProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    km0Certified?: boolean
    imageUrl?: boolean
    participant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventProduct"]>

  export type EventProductSelectScalar = {
    id?: boolean
    participantId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    km0Certified?: boolean
    imageUrl?: boolean
  }

  export type EventProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantId" | "name" | "description" | "price" | "category" | "km0Certified" | "imageUrl", ExtArgs["result"]["eventProduct"]>
  export type EventProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }
  export type EventProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }
  export type EventProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | EventParticipantDefaultArgs<ExtArgs>
  }

  export type $EventProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventProduct"
    objects: {
      participant: Prisma.$EventParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      participantId: string
      name: string
      description: string | null
      price: number | null
      category: string
      km0Certified: boolean
      imageUrl: string | null
    }, ExtArgs["result"]["eventProduct"]>
    composites: {}
  }

  type EventProductGetPayload<S extends boolean | null | undefined | EventProductDefaultArgs> = $Result.GetResult<Prisma.$EventProductPayload, S>

  type EventProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventProductCountAggregateInputType | true
    }

  export interface EventProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventProduct'], meta: { name: 'EventProduct' } }
    /**
     * Find zero or one EventProduct that matches the filter.
     * @param {EventProductFindUniqueArgs} args - Arguments to find a EventProduct
     * @example
     * // Get one EventProduct
     * const eventProduct = await prisma.eventProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventProductFindUniqueArgs>(args: SelectSubset<T, EventProductFindUniqueArgs<ExtArgs>>): Prisma__EventProductClient<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventProductFindUniqueOrThrowArgs} args - Arguments to find a EventProduct
     * @example
     * // Get one EventProduct
     * const eventProduct = await prisma.eventProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventProductFindUniqueOrThrowArgs>(args: SelectSubset<T, EventProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventProductClient<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventProductFindFirstArgs} args - Arguments to find a EventProduct
     * @example
     * // Get one EventProduct
     * const eventProduct = await prisma.eventProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventProductFindFirstArgs>(args?: SelectSubset<T, EventProductFindFirstArgs<ExtArgs>>): Prisma__EventProductClient<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventProductFindFirstOrThrowArgs} args - Arguments to find a EventProduct
     * @example
     * // Get one EventProduct
     * const eventProduct = await prisma.eventProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventProductFindFirstOrThrowArgs>(args?: SelectSubset<T, EventProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventProductClient<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventProducts
     * const eventProducts = await prisma.eventProduct.findMany()
     * 
     * // Get first 10 EventProducts
     * const eventProducts = await prisma.eventProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventProductWithIdOnly = await prisma.eventProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventProductFindManyArgs>(args?: SelectSubset<T, EventProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventProduct.
     * @param {EventProductCreateArgs} args - Arguments to create a EventProduct.
     * @example
     * // Create one EventProduct
     * const EventProduct = await prisma.eventProduct.create({
     *   data: {
     *     // ... data to create a EventProduct
     *   }
     * })
     * 
     */
    create<T extends EventProductCreateArgs>(args: SelectSubset<T, EventProductCreateArgs<ExtArgs>>): Prisma__EventProductClient<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventProducts.
     * @param {EventProductCreateManyArgs} args - Arguments to create many EventProducts.
     * @example
     * // Create many EventProducts
     * const eventProduct = await prisma.eventProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventProductCreateManyArgs>(args?: SelectSubset<T, EventProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventProducts and returns the data saved in the database.
     * @param {EventProductCreateManyAndReturnArgs} args - Arguments to create many EventProducts.
     * @example
     * // Create many EventProducts
     * const eventProduct = await prisma.eventProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventProducts and only return the `id`
     * const eventProductWithIdOnly = await prisma.eventProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventProductCreateManyAndReturnArgs>(args?: SelectSubset<T, EventProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventProduct.
     * @param {EventProductDeleteArgs} args - Arguments to delete one EventProduct.
     * @example
     * // Delete one EventProduct
     * const EventProduct = await prisma.eventProduct.delete({
     *   where: {
     *     // ... filter to delete one EventProduct
     *   }
     * })
     * 
     */
    delete<T extends EventProductDeleteArgs>(args: SelectSubset<T, EventProductDeleteArgs<ExtArgs>>): Prisma__EventProductClient<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventProduct.
     * @param {EventProductUpdateArgs} args - Arguments to update one EventProduct.
     * @example
     * // Update one EventProduct
     * const eventProduct = await prisma.eventProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventProductUpdateArgs>(args: SelectSubset<T, EventProductUpdateArgs<ExtArgs>>): Prisma__EventProductClient<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventProducts.
     * @param {EventProductDeleteManyArgs} args - Arguments to filter EventProducts to delete.
     * @example
     * // Delete a few EventProducts
     * const { count } = await prisma.eventProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventProductDeleteManyArgs>(args?: SelectSubset<T, EventProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventProducts
     * const eventProduct = await prisma.eventProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventProductUpdateManyArgs>(args: SelectSubset<T, EventProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventProducts and returns the data updated in the database.
     * @param {EventProductUpdateManyAndReturnArgs} args - Arguments to update many EventProducts.
     * @example
     * // Update many EventProducts
     * const eventProduct = await prisma.eventProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventProducts and only return the `id`
     * const eventProductWithIdOnly = await prisma.eventProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventProductUpdateManyAndReturnArgs>(args: SelectSubset<T, EventProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventProduct.
     * @param {EventProductUpsertArgs} args - Arguments to update or create a EventProduct.
     * @example
     * // Update or create a EventProduct
     * const eventProduct = await prisma.eventProduct.upsert({
     *   create: {
     *     // ... data to create a EventProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventProduct we want to update
     *   }
     * })
     */
    upsert<T extends EventProductUpsertArgs>(args: SelectSubset<T, EventProductUpsertArgs<ExtArgs>>): Prisma__EventProductClient<$Result.GetResult<Prisma.$EventProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventProductCountArgs} args - Arguments to filter EventProducts to count.
     * @example
     * // Count the number of EventProducts
     * const count = await prisma.eventProduct.count({
     *   where: {
     *     // ... the filter for the EventProducts we want to count
     *   }
     * })
    **/
    count<T extends EventProductCountArgs>(
      args?: Subset<T, EventProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventProductAggregateArgs>(args: Subset<T, EventProductAggregateArgs>): Prisma.PrismaPromise<GetEventProductAggregateType<T>>

    /**
     * Group by EventProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventProductGroupByArgs['orderBy'] }
        : { orderBy?: EventProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventProduct model
   */
  readonly fields: EventProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends EventParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventParticipantDefaultArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventProduct model
   */
  interface EventProductFieldRefs {
    readonly id: FieldRef<"EventProduct", 'String'>
    readonly participantId: FieldRef<"EventProduct", 'String'>
    readonly name: FieldRef<"EventProduct", 'String'>
    readonly description: FieldRef<"EventProduct", 'String'>
    readonly price: FieldRef<"EventProduct", 'Float'>
    readonly category: FieldRef<"EventProduct", 'String'>
    readonly km0Certified: FieldRef<"EventProduct", 'Boolean'>
    readonly imageUrl: FieldRef<"EventProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventProduct findUnique
   */
  export type EventProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    /**
     * Filter, which EventProduct to fetch.
     */
    where: EventProductWhereUniqueInput
  }

  /**
   * EventProduct findUniqueOrThrow
   */
  export type EventProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    /**
     * Filter, which EventProduct to fetch.
     */
    where: EventProductWhereUniqueInput
  }

  /**
   * EventProduct findFirst
   */
  export type EventProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    /**
     * Filter, which EventProduct to fetch.
     */
    where?: EventProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventProducts to fetch.
     */
    orderBy?: EventProductOrderByWithRelationInput | EventProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventProducts.
     */
    cursor?: EventProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventProducts.
     */
    distinct?: EventProductScalarFieldEnum | EventProductScalarFieldEnum[]
  }

  /**
   * EventProduct findFirstOrThrow
   */
  export type EventProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    /**
     * Filter, which EventProduct to fetch.
     */
    where?: EventProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventProducts to fetch.
     */
    orderBy?: EventProductOrderByWithRelationInput | EventProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventProducts.
     */
    cursor?: EventProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventProducts.
     */
    distinct?: EventProductScalarFieldEnum | EventProductScalarFieldEnum[]
  }

  /**
   * EventProduct findMany
   */
  export type EventProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    /**
     * Filter, which EventProducts to fetch.
     */
    where?: EventProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventProducts to fetch.
     */
    orderBy?: EventProductOrderByWithRelationInput | EventProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventProducts.
     */
    cursor?: EventProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventProducts.
     */
    distinct?: EventProductScalarFieldEnum | EventProductScalarFieldEnum[]
  }

  /**
   * EventProduct create
   */
  export type EventProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    /**
     * The data needed to create a EventProduct.
     */
    data: XOR<EventProductCreateInput, EventProductUncheckedCreateInput>
  }

  /**
   * EventProduct createMany
   */
  export type EventProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventProducts.
     */
    data: EventProductCreateManyInput | EventProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventProduct createManyAndReturn
   */
  export type EventProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * The data used to create many EventProducts.
     */
    data: EventProductCreateManyInput | EventProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventProduct update
   */
  export type EventProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    /**
     * The data needed to update a EventProduct.
     */
    data: XOR<EventProductUpdateInput, EventProductUncheckedUpdateInput>
    /**
     * Choose, which EventProduct to update.
     */
    where: EventProductWhereUniqueInput
  }

  /**
   * EventProduct updateMany
   */
  export type EventProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventProducts.
     */
    data: XOR<EventProductUpdateManyMutationInput, EventProductUncheckedUpdateManyInput>
    /**
     * Filter which EventProducts to update
     */
    where?: EventProductWhereInput
    /**
     * Limit how many EventProducts to update.
     */
    limit?: number
  }

  /**
   * EventProduct updateManyAndReturn
   */
  export type EventProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * The data used to update EventProducts.
     */
    data: XOR<EventProductUpdateManyMutationInput, EventProductUncheckedUpdateManyInput>
    /**
     * Filter which EventProducts to update
     */
    where?: EventProductWhereInput
    /**
     * Limit how many EventProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventProduct upsert
   */
  export type EventProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    /**
     * The filter to search for the EventProduct to update in case it exists.
     */
    where: EventProductWhereUniqueInput
    /**
     * In case the EventProduct found by the `where` argument doesn't exist, create a new EventProduct with this data.
     */
    create: XOR<EventProductCreateInput, EventProductUncheckedCreateInput>
    /**
     * In case the EventProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventProductUpdateInput, EventProductUncheckedUpdateInput>
  }

  /**
   * EventProduct delete
   */
  export type EventProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
    /**
     * Filter which EventProduct to delete.
     */
    where: EventProductWhereUniqueInput
  }

  /**
   * EventProduct deleteMany
   */
  export type EventProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventProducts to delete
     */
    where?: EventProductWhereInput
    /**
     * Limit how many EventProducts to delete.
     */
    limit?: number
  }

  /**
   * EventProduct without action
   */
  export type EventProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventProduct
     */
    select?: EventProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventProduct
     */
    omit?: EventProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventProductInclude<ExtArgs> | null
  }


  /**
   * Model VenueMap
   */

  export type AggregateVenueMap = {
    _count: VenueMapCountAggregateOutputType | null
    _avg: VenueMapAvgAggregateOutputType | null
    _sum: VenueMapSumAggregateOutputType | null
    _min: VenueMapMinAggregateOutputType | null
    _max: VenueMapMaxAggregateOutputType | null
  }

  export type VenueMapAvgAggregateOutputType = {
    widthPx: number | null
    heightPx: number | null
  }

  export type VenueMapSumAggregateOutputType = {
    widthPx: number | null
    heightPx: number | null
  }

  export type VenueMapMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    imageUrl: string | null
    widthPx: number | null
    heightPx: number | null
  }

  export type VenueMapMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    imageUrl: string | null
    widthPx: number | null
    heightPx: number | null
  }

  export type VenueMapCountAggregateOutputType = {
    id: number
    eventId: number
    imageUrl: number
    widthPx: number
    heightPx: number
    zones: number
    _all: number
  }


  export type VenueMapAvgAggregateInputType = {
    widthPx?: true
    heightPx?: true
  }

  export type VenueMapSumAggregateInputType = {
    widthPx?: true
    heightPx?: true
  }

  export type VenueMapMinAggregateInputType = {
    id?: true
    eventId?: true
    imageUrl?: true
    widthPx?: true
    heightPx?: true
  }

  export type VenueMapMaxAggregateInputType = {
    id?: true
    eventId?: true
    imageUrl?: true
    widthPx?: true
    heightPx?: true
  }

  export type VenueMapCountAggregateInputType = {
    id?: true
    eventId?: true
    imageUrl?: true
    widthPx?: true
    heightPx?: true
    zones?: true
    _all?: true
  }

  export type VenueMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueMap to aggregate.
     */
    where?: VenueMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueMaps to fetch.
     */
    orderBy?: VenueMapOrderByWithRelationInput | VenueMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VenueMaps
    **/
    _count?: true | VenueMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueMapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueMapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMapMaxAggregateInputType
  }

  export type GetVenueMapAggregateType<T extends VenueMapAggregateArgs> = {
        [P in keyof T & keyof AggregateVenueMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenueMap[P]>
      : GetScalarType<T[P], AggregateVenueMap[P]>
  }




  export type VenueMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueMapWhereInput
    orderBy?: VenueMapOrderByWithAggregationInput | VenueMapOrderByWithAggregationInput[]
    by: VenueMapScalarFieldEnum[] | VenueMapScalarFieldEnum
    having?: VenueMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueMapCountAggregateInputType | true
    _avg?: VenueMapAvgAggregateInputType
    _sum?: VenueMapSumAggregateInputType
    _min?: VenueMapMinAggregateInputType
    _max?: VenueMapMaxAggregateInputType
  }

  export type VenueMapGroupByOutputType = {
    id: string
    eventId: string
    imageUrl: string
    widthPx: number
    heightPx: number
    zones: JsonValue | null
    _count: VenueMapCountAggregateOutputType | null
    _avg: VenueMapAvgAggregateOutputType | null
    _sum: VenueMapSumAggregateOutputType | null
    _min: VenueMapMinAggregateOutputType | null
    _max: VenueMapMaxAggregateOutputType | null
  }

  type GetVenueMapGroupByPayload<T extends VenueMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueMapGroupByOutputType[P]>
            : GetScalarType<T[P], VenueMapGroupByOutputType[P]>
        }
      >
    >


  export type VenueMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    imageUrl?: boolean
    widthPx?: boolean
    heightPx?: boolean
    zones?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueMap"]>

  export type VenueMapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    imageUrl?: boolean
    widthPx?: boolean
    heightPx?: boolean
    zones?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueMap"]>

  export type VenueMapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    imageUrl?: boolean
    widthPx?: boolean
    heightPx?: boolean
    zones?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueMap"]>

  export type VenueMapSelectScalar = {
    id?: boolean
    eventId?: boolean
    imageUrl?: boolean
    widthPx?: boolean
    heightPx?: boolean
    zones?: boolean
  }

  export type VenueMapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "imageUrl" | "widthPx" | "heightPx" | "zones", ExtArgs["result"]["venueMap"]>
  export type VenueMapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type VenueMapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type VenueMapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $VenueMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VenueMap"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      imageUrl: string
      widthPx: number
      heightPx: number
      zones: Prisma.JsonValue | null
    }, ExtArgs["result"]["venueMap"]>
    composites: {}
  }

  type VenueMapGetPayload<S extends boolean | null | undefined | VenueMapDefaultArgs> = $Result.GetResult<Prisma.$VenueMapPayload, S>

  type VenueMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueMapCountAggregateInputType | true
    }

  export interface VenueMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VenueMap'], meta: { name: 'VenueMap' } }
    /**
     * Find zero or one VenueMap that matches the filter.
     * @param {VenueMapFindUniqueArgs} args - Arguments to find a VenueMap
     * @example
     * // Get one VenueMap
     * const venueMap = await prisma.venueMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueMapFindUniqueArgs>(args: SelectSubset<T, VenueMapFindUniqueArgs<ExtArgs>>): Prisma__VenueMapClient<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VenueMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueMapFindUniqueOrThrowArgs} args - Arguments to find a VenueMap
     * @example
     * // Get one VenueMap
     * const venueMap = await prisma.venueMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueMapFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueMapClient<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueMapFindFirstArgs} args - Arguments to find a VenueMap
     * @example
     * // Get one VenueMap
     * const venueMap = await prisma.venueMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueMapFindFirstArgs>(args?: SelectSubset<T, VenueMapFindFirstArgs<ExtArgs>>): Prisma__VenueMapClient<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueMapFindFirstOrThrowArgs} args - Arguments to find a VenueMap
     * @example
     * // Get one VenueMap
     * const venueMap = await prisma.venueMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueMapFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueMapClient<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VenueMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenueMaps
     * const venueMaps = await prisma.venueMap.findMany()
     * 
     * // Get first 10 VenueMaps
     * const venueMaps = await prisma.venueMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueMapWithIdOnly = await prisma.venueMap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueMapFindManyArgs>(args?: SelectSubset<T, VenueMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VenueMap.
     * @param {VenueMapCreateArgs} args - Arguments to create a VenueMap.
     * @example
     * // Create one VenueMap
     * const VenueMap = await prisma.venueMap.create({
     *   data: {
     *     // ... data to create a VenueMap
     *   }
     * })
     * 
     */
    create<T extends VenueMapCreateArgs>(args: SelectSubset<T, VenueMapCreateArgs<ExtArgs>>): Prisma__VenueMapClient<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VenueMaps.
     * @param {VenueMapCreateManyArgs} args - Arguments to create many VenueMaps.
     * @example
     * // Create many VenueMaps
     * const venueMap = await prisma.venueMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueMapCreateManyArgs>(args?: SelectSubset<T, VenueMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VenueMaps and returns the data saved in the database.
     * @param {VenueMapCreateManyAndReturnArgs} args - Arguments to create many VenueMaps.
     * @example
     * // Create many VenueMaps
     * const venueMap = await prisma.venueMap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VenueMaps and only return the `id`
     * const venueMapWithIdOnly = await prisma.venueMap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueMapCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VenueMap.
     * @param {VenueMapDeleteArgs} args - Arguments to delete one VenueMap.
     * @example
     * // Delete one VenueMap
     * const VenueMap = await prisma.venueMap.delete({
     *   where: {
     *     // ... filter to delete one VenueMap
     *   }
     * })
     * 
     */
    delete<T extends VenueMapDeleteArgs>(args: SelectSubset<T, VenueMapDeleteArgs<ExtArgs>>): Prisma__VenueMapClient<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VenueMap.
     * @param {VenueMapUpdateArgs} args - Arguments to update one VenueMap.
     * @example
     * // Update one VenueMap
     * const venueMap = await prisma.venueMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueMapUpdateArgs>(args: SelectSubset<T, VenueMapUpdateArgs<ExtArgs>>): Prisma__VenueMapClient<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VenueMaps.
     * @param {VenueMapDeleteManyArgs} args - Arguments to filter VenueMaps to delete.
     * @example
     * // Delete a few VenueMaps
     * const { count } = await prisma.venueMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueMapDeleteManyArgs>(args?: SelectSubset<T, VenueMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenueMaps
     * const venueMap = await prisma.venueMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueMapUpdateManyArgs>(args: SelectSubset<T, VenueMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueMaps and returns the data updated in the database.
     * @param {VenueMapUpdateManyAndReturnArgs} args - Arguments to update many VenueMaps.
     * @example
     * // Update many VenueMaps
     * const venueMap = await prisma.venueMap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VenueMaps and only return the `id`
     * const venueMapWithIdOnly = await prisma.venueMap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenueMapUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VenueMap.
     * @param {VenueMapUpsertArgs} args - Arguments to update or create a VenueMap.
     * @example
     * // Update or create a VenueMap
     * const venueMap = await prisma.venueMap.upsert({
     *   create: {
     *     // ... data to create a VenueMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenueMap we want to update
     *   }
     * })
     */
    upsert<T extends VenueMapUpsertArgs>(args: SelectSubset<T, VenueMapUpsertArgs<ExtArgs>>): Prisma__VenueMapClient<$Result.GetResult<Prisma.$VenueMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VenueMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueMapCountArgs} args - Arguments to filter VenueMaps to count.
     * @example
     * // Count the number of VenueMaps
     * const count = await prisma.venueMap.count({
     *   where: {
     *     // ... the filter for the VenueMaps we want to count
     *   }
     * })
    **/
    count<T extends VenueMapCountArgs>(
      args?: Subset<T, VenueMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VenueMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenueMapAggregateArgs>(args: Subset<T, VenueMapAggregateArgs>): Prisma.PrismaPromise<GetVenueMapAggregateType<T>>

    /**
     * Group by VenueMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueMapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VenueMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueMapGroupByArgs['orderBy'] }
        : { orderBy?: VenueMapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenueMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VenueMap model
   */
  readonly fields: VenueMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VenueMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VenueMap model
   */
  interface VenueMapFieldRefs {
    readonly id: FieldRef<"VenueMap", 'String'>
    readonly eventId: FieldRef<"VenueMap", 'String'>
    readonly imageUrl: FieldRef<"VenueMap", 'String'>
    readonly widthPx: FieldRef<"VenueMap", 'Int'>
    readonly heightPx: FieldRef<"VenueMap", 'Int'>
    readonly zones: FieldRef<"VenueMap", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * VenueMap findUnique
   */
  export type VenueMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    /**
     * Filter, which VenueMap to fetch.
     */
    where: VenueMapWhereUniqueInput
  }

  /**
   * VenueMap findUniqueOrThrow
   */
  export type VenueMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    /**
     * Filter, which VenueMap to fetch.
     */
    where: VenueMapWhereUniqueInput
  }

  /**
   * VenueMap findFirst
   */
  export type VenueMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    /**
     * Filter, which VenueMap to fetch.
     */
    where?: VenueMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueMaps to fetch.
     */
    orderBy?: VenueMapOrderByWithRelationInput | VenueMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueMaps.
     */
    cursor?: VenueMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueMaps.
     */
    distinct?: VenueMapScalarFieldEnum | VenueMapScalarFieldEnum[]
  }

  /**
   * VenueMap findFirstOrThrow
   */
  export type VenueMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    /**
     * Filter, which VenueMap to fetch.
     */
    where?: VenueMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueMaps to fetch.
     */
    orderBy?: VenueMapOrderByWithRelationInput | VenueMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueMaps.
     */
    cursor?: VenueMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueMaps.
     */
    distinct?: VenueMapScalarFieldEnum | VenueMapScalarFieldEnum[]
  }

  /**
   * VenueMap findMany
   */
  export type VenueMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    /**
     * Filter, which VenueMaps to fetch.
     */
    where?: VenueMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueMaps to fetch.
     */
    orderBy?: VenueMapOrderByWithRelationInput | VenueMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VenueMaps.
     */
    cursor?: VenueMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueMaps.
     */
    distinct?: VenueMapScalarFieldEnum | VenueMapScalarFieldEnum[]
  }

  /**
   * VenueMap create
   */
  export type VenueMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    /**
     * The data needed to create a VenueMap.
     */
    data: XOR<VenueMapCreateInput, VenueMapUncheckedCreateInput>
  }

  /**
   * VenueMap createMany
   */
  export type VenueMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenueMaps.
     */
    data: VenueMapCreateManyInput | VenueMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenueMap createManyAndReturn
   */
  export type VenueMapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * The data used to create many VenueMaps.
     */
    data: VenueMapCreateManyInput | VenueMapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenueMap update
   */
  export type VenueMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    /**
     * The data needed to update a VenueMap.
     */
    data: XOR<VenueMapUpdateInput, VenueMapUncheckedUpdateInput>
    /**
     * Choose, which VenueMap to update.
     */
    where: VenueMapWhereUniqueInput
  }

  /**
   * VenueMap updateMany
   */
  export type VenueMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VenueMaps.
     */
    data: XOR<VenueMapUpdateManyMutationInput, VenueMapUncheckedUpdateManyInput>
    /**
     * Filter which VenueMaps to update
     */
    where?: VenueMapWhereInput
    /**
     * Limit how many VenueMaps to update.
     */
    limit?: number
  }

  /**
   * VenueMap updateManyAndReturn
   */
  export type VenueMapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * The data used to update VenueMaps.
     */
    data: XOR<VenueMapUpdateManyMutationInput, VenueMapUncheckedUpdateManyInput>
    /**
     * Filter which VenueMaps to update
     */
    where?: VenueMapWhereInput
    /**
     * Limit how many VenueMaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenueMap upsert
   */
  export type VenueMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    /**
     * The filter to search for the VenueMap to update in case it exists.
     */
    where: VenueMapWhereUniqueInput
    /**
     * In case the VenueMap found by the `where` argument doesn't exist, create a new VenueMap with this data.
     */
    create: XOR<VenueMapCreateInput, VenueMapUncheckedCreateInput>
    /**
     * In case the VenueMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueMapUpdateInput, VenueMapUncheckedUpdateInput>
  }

  /**
   * VenueMap delete
   */
  export type VenueMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
    /**
     * Filter which VenueMap to delete.
     */
    where: VenueMapWhereUniqueInput
  }

  /**
   * VenueMap deleteMany
   */
  export type VenueMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueMaps to delete
     */
    where?: VenueMapWhereInput
    /**
     * Limit how many VenueMaps to delete.
     */
    limit?: number
  }

  /**
   * VenueMap without action
   */
  export type VenueMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueMap
     */
    select?: VenueMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueMap
     */
    omit?: VenueMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueMapInclude<ExtArgs> | null
  }


  /**
   * Model EventAttendee
   */

  export type AggregateEventAttendee = {
    _count: EventAttendeeCountAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  export type EventAttendeeMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    status: $Enums.AttendeeStatus | null
    createdAt: Date | null
  }

  export type EventAttendeeMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    status: $Enums.AttendeeStatus | null
    createdAt: Date | null
  }

  export type EventAttendeeCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    status: number
    createdAt: number
    _all: number
  }


  export type EventAttendeeMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    status?: true
    createdAt?: true
  }

  export type EventAttendeeMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    status?: true
    createdAt?: true
  }

  export type EventAttendeeCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type EventAttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendee to aggregate.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventAttendees
    **/
    _count?: true | EventAttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventAttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type GetEventAttendeeAggregateType<T extends EventAttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventAttendee[P]>
      : GetScalarType<T[P], AggregateEventAttendee[P]>
  }




  export type EventAttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithAggregationInput | EventAttendeeOrderByWithAggregationInput[]
    by: EventAttendeeScalarFieldEnum[] | EventAttendeeScalarFieldEnum
    having?: EventAttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventAttendeeCountAggregateInputType | true
    _min?: EventAttendeeMinAggregateInputType
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type EventAttendeeGroupByOutputType = {
    id: string
    eventId: string
    userId: string
    status: $Enums.AttendeeStatus
    createdAt: Date
    _count: EventAttendeeCountAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  type GetEventAttendeeGroupByPayload<T extends EventAttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventAttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventAttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
        }
      >
    >


  export type EventAttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type EventAttendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "status" | "createdAt", ExtArgs["result"]["eventAttendee"]>
  export type EventAttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventAttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventAttendeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventAttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventAttendee"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      userId: string
      status: $Enums.AttendeeStatus
      createdAt: Date
    }, ExtArgs["result"]["eventAttendee"]>
    composites: {}
  }

  type EventAttendeeGetPayload<S extends boolean | null | undefined | EventAttendeeDefaultArgs> = $Result.GetResult<Prisma.$EventAttendeePayload, S>

  type EventAttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventAttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventAttendeeCountAggregateInputType | true
    }

  export interface EventAttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventAttendee'], meta: { name: 'EventAttendee' } }
    /**
     * Find zero or one EventAttendee that matches the filter.
     * @param {EventAttendeeFindUniqueArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventAttendeeFindUniqueArgs>(args: SelectSubset<T, EventAttendeeFindUniqueArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventAttendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventAttendeeFindUniqueOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventAttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventAttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAttendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventAttendeeFindFirstArgs>(args?: SelectSubset<T, EventAttendeeFindFirstArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAttendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventAttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventAttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventAttendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany()
     * 
     * // Get first 10 EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventAttendeeFindManyArgs>(args?: SelectSubset<T, EventAttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventAttendee.
     * @param {EventAttendeeCreateArgs} args - Arguments to create a EventAttendee.
     * @example
     * // Create one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.create({
     *   data: {
     *     // ... data to create a EventAttendee
     *   }
     * })
     * 
     */
    create<T extends EventAttendeeCreateArgs>(args: SelectSubset<T, EventAttendeeCreateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventAttendees.
     * @param {EventAttendeeCreateManyArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventAttendeeCreateManyArgs>(args?: SelectSubset<T, EventAttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventAttendees and returns the data saved in the database.
     * @param {EventAttendeeCreateManyAndReturnArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventAttendees and only return the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventAttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventAttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventAttendee.
     * @param {EventAttendeeDeleteArgs} args - Arguments to delete one EventAttendee.
     * @example
     * // Delete one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.delete({
     *   where: {
     *     // ... filter to delete one EventAttendee
     *   }
     * })
     * 
     */
    delete<T extends EventAttendeeDeleteArgs>(args: SelectSubset<T, EventAttendeeDeleteArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventAttendee.
     * @param {EventAttendeeUpdateArgs} args - Arguments to update one EventAttendee.
     * @example
     * // Update one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventAttendeeUpdateArgs>(args: SelectSubset<T, EventAttendeeUpdateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventAttendees.
     * @param {EventAttendeeDeleteManyArgs} args - Arguments to filter EventAttendees to delete.
     * @example
     * // Delete a few EventAttendees
     * const { count } = await prisma.eventAttendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventAttendeeDeleteManyArgs>(args?: SelectSubset<T, EventAttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventAttendeeUpdateManyArgs>(args: SelectSubset<T, EventAttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAttendees and returns the data updated in the database.
     * @param {EventAttendeeUpdateManyAndReturnArgs} args - Arguments to update many EventAttendees.
     * @example
     * // Update many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventAttendees and only return the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventAttendeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EventAttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventAttendee.
     * @param {EventAttendeeUpsertArgs} args - Arguments to update or create a EventAttendee.
     * @example
     * // Update or create a EventAttendee
     * const eventAttendee = await prisma.eventAttendee.upsert({
     *   create: {
     *     // ... data to create a EventAttendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventAttendee we want to update
     *   }
     * })
     */
    upsert<T extends EventAttendeeUpsertArgs>(args: SelectSubset<T, EventAttendeeUpsertArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeCountArgs} args - Arguments to filter EventAttendees to count.
     * @example
     * // Count the number of EventAttendees
     * const count = await prisma.eventAttendee.count({
     *   where: {
     *     // ... the filter for the EventAttendees we want to count
     *   }
     * })
    **/
    count<T extends EventAttendeeCountArgs>(
      args?: Subset<T, EventAttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventAttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAttendeeAggregateArgs>(args: Subset<T, EventAttendeeAggregateArgs>): Prisma.PrismaPromise<GetEventAttendeeAggregateType<T>>

    /**
     * Group by EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventAttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventAttendeeGroupByArgs['orderBy'] }
        : { orderBy?: EventAttendeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventAttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventAttendee model
   */
  readonly fields: EventAttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventAttendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventAttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventAttendee model
   */
  interface EventAttendeeFieldRefs {
    readonly id: FieldRef<"EventAttendee", 'String'>
    readonly eventId: FieldRef<"EventAttendee", 'String'>
    readonly userId: FieldRef<"EventAttendee", 'String'>
    readonly status: FieldRef<"EventAttendee", 'AttendeeStatus'>
    readonly createdAt: FieldRef<"EventAttendee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventAttendee findUnique
   */
  export type EventAttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findUniqueOrThrow
   */
  export type EventAttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findFirst
   */
  export type EventAttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findFirstOrThrow
   */
  export type EventAttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findMany
   */
  export type EventAttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendees to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee create
   */
  export type EventAttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventAttendee.
     */
    data: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
  }

  /**
   * EventAttendee createMany
   */
  export type EventAttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventAttendee createManyAndReturn
   */
  export type EventAttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAttendee update
   */
  export type EventAttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventAttendee.
     */
    data: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
    /**
     * Choose, which EventAttendee to update.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee updateMany
   */
  export type EventAttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventAttendees.
     */
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which EventAttendees to update
     */
    where?: EventAttendeeWhereInput
    /**
     * Limit how many EventAttendees to update.
     */
    limit?: number
  }

  /**
   * EventAttendee updateManyAndReturn
   */
  export type EventAttendeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * The data used to update EventAttendees.
     */
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which EventAttendees to update
     */
    where?: EventAttendeeWhereInput
    /**
     * Limit how many EventAttendees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAttendee upsert
   */
  export type EventAttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventAttendee to update in case it exists.
     */
    where: EventAttendeeWhereUniqueInput
    /**
     * In case the EventAttendee found by the `where` argument doesn't exist, create a new EventAttendee with this data.
     */
    create: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
    /**
     * In case the EventAttendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
  }

  /**
   * EventAttendee delete
   */
  export type EventAttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter which EventAttendee to delete.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee deleteMany
   */
  export type EventAttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendees to delete
     */
    where?: EventAttendeeWhereInput
    /**
     * Limit how many EventAttendees to delete.
     */
    limit?: number
  }

  /**
   * EventAttendee without action
   */
  export type EventAttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
  }


  /**
   * Model UserFollow
   */

  export type AggregateUserFollow = {
    _count: UserFollowCountAggregateOutputType | null
    _min: UserFollowMinAggregateOutputType | null
    _max: UserFollowMaxAggregateOutputType | null
  }

  export type UserFollowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    artisanId: string | null
    eventId: string | null
    createdAt: Date | null
  }

  export type UserFollowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    artisanId: string | null
    eventId: string | null
    createdAt: Date | null
  }

  export type UserFollowCountAggregateOutputType = {
    id: number
    userId: number
    artisanId: number
    eventId: number
    createdAt: number
    _all: number
  }


  export type UserFollowMinAggregateInputType = {
    id?: true
    userId?: true
    artisanId?: true
    eventId?: true
    createdAt?: true
  }

  export type UserFollowMaxAggregateInputType = {
    id?: true
    userId?: true
    artisanId?: true
    eventId?: true
    createdAt?: true
  }

  export type UserFollowCountAggregateInputType = {
    id?: true
    userId?: true
    artisanId?: true
    eventId?: true
    createdAt?: true
    _all?: true
  }

  export type UserFollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFollow to aggregate.
     */
    where?: UserFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollows to fetch.
     */
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFollows
    **/
    _count?: true | UserFollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFollowMaxAggregateInputType
  }

  export type GetUserFollowAggregateType<T extends UserFollowAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFollow[P]>
      : GetScalarType<T[P], AggregateUserFollow[P]>
  }




  export type UserFollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowWhereInput
    orderBy?: UserFollowOrderByWithAggregationInput | UserFollowOrderByWithAggregationInput[]
    by: UserFollowScalarFieldEnum[] | UserFollowScalarFieldEnum
    having?: UserFollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFollowCountAggregateInputType | true
    _min?: UserFollowMinAggregateInputType
    _max?: UserFollowMaxAggregateInputType
  }

  export type UserFollowGroupByOutputType = {
    id: string
    userId: string
    artisanId: string | null
    eventId: string | null
    createdAt: Date
    _count: UserFollowCountAggregateOutputType | null
    _min: UserFollowMinAggregateOutputType | null
    _max: UserFollowMaxAggregateOutputType | null
  }

  type GetUserFollowGroupByPayload<T extends UserFollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFollowGroupByOutputType[P]>
            : GetScalarType<T[P], UserFollowGroupByOutputType[P]>
        }
      >
    >


  export type UserFollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    artisanId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | UserFollow$artisanArgs<ExtArgs>
    event?: boolean | UserFollow$eventArgs<ExtArgs>
  }, ExtArgs["result"]["userFollow"]>

  export type UserFollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    artisanId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | UserFollow$artisanArgs<ExtArgs>
    event?: boolean | UserFollow$eventArgs<ExtArgs>
  }, ExtArgs["result"]["userFollow"]>

  export type UserFollowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    artisanId?: boolean
    eventId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | UserFollow$artisanArgs<ExtArgs>
    event?: boolean | UserFollow$eventArgs<ExtArgs>
  }, ExtArgs["result"]["userFollow"]>

  export type UserFollowSelectScalar = {
    id?: boolean
    userId?: boolean
    artisanId?: boolean
    eventId?: boolean
    createdAt?: boolean
  }

  export type UserFollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "artisanId" | "eventId" | "createdAt", ExtArgs["result"]["userFollow"]>
  export type UserFollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | UserFollow$artisanArgs<ExtArgs>
    event?: boolean | UserFollow$eventArgs<ExtArgs>
  }
  export type UserFollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | UserFollow$artisanArgs<ExtArgs>
    event?: boolean | UserFollow$eventArgs<ExtArgs>
  }
  export type UserFollowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | UserFollow$artisanArgs<ExtArgs>
    event?: boolean | UserFollow$eventArgs<ExtArgs>
  }

  export type $UserFollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFollow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      artisan: Prisma.$ArtisanPayload<ExtArgs> | null
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      artisanId: string | null
      eventId: string | null
      createdAt: Date
    }, ExtArgs["result"]["userFollow"]>
    composites: {}
  }

  type UserFollowGetPayload<S extends boolean | null | undefined | UserFollowDefaultArgs> = $Result.GetResult<Prisma.$UserFollowPayload, S>

  type UserFollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFollowCountAggregateInputType | true
    }

  export interface UserFollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFollow'], meta: { name: 'UserFollow' } }
    /**
     * Find zero or one UserFollow that matches the filter.
     * @param {UserFollowFindUniqueArgs} args - Arguments to find a UserFollow
     * @example
     * // Get one UserFollow
     * const userFollow = await prisma.userFollow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFollowFindUniqueArgs>(args: SelectSubset<T, UserFollowFindUniqueArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFollow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFollowFindUniqueOrThrowArgs} args - Arguments to find a UserFollow
     * @example
     * // Get one UserFollow
     * const userFollow = await prisma.userFollow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFollowFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFollow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowFindFirstArgs} args - Arguments to find a UserFollow
     * @example
     * // Get one UserFollow
     * const userFollow = await prisma.userFollow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFollowFindFirstArgs>(args?: SelectSubset<T, UserFollowFindFirstArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFollow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowFindFirstOrThrowArgs} args - Arguments to find a UserFollow
     * @example
     * // Get one UserFollow
     * const userFollow = await prisma.userFollow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFollowFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFollows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFollows
     * const userFollows = await prisma.userFollow.findMany()
     * 
     * // Get first 10 UserFollows
     * const userFollows = await prisma.userFollow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFollowWithIdOnly = await prisma.userFollow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFollowFindManyArgs>(args?: SelectSubset<T, UserFollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFollow.
     * @param {UserFollowCreateArgs} args - Arguments to create a UserFollow.
     * @example
     * // Create one UserFollow
     * const UserFollow = await prisma.userFollow.create({
     *   data: {
     *     // ... data to create a UserFollow
     *   }
     * })
     * 
     */
    create<T extends UserFollowCreateArgs>(args: SelectSubset<T, UserFollowCreateArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFollows.
     * @param {UserFollowCreateManyArgs} args - Arguments to create many UserFollows.
     * @example
     * // Create many UserFollows
     * const userFollow = await prisma.userFollow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFollowCreateManyArgs>(args?: SelectSubset<T, UserFollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFollows and returns the data saved in the database.
     * @param {UserFollowCreateManyAndReturnArgs} args - Arguments to create many UserFollows.
     * @example
     * // Create many UserFollows
     * const userFollow = await prisma.userFollow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFollows and only return the `id`
     * const userFollowWithIdOnly = await prisma.userFollow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFollowCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFollow.
     * @param {UserFollowDeleteArgs} args - Arguments to delete one UserFollow.
     * @example
     * // Delete one UserFollow
     * const UserFollow = await prisma.userFollow.delete({
     *   where: {
     *     // ... filter to delete one UserFollow
     *   }
     * })
     * 
     */
    delete<T extends UserFollowDeleteArgs>(args: SelectSubset<T, UserFollowDeleteArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFollow.
     * @param {UserFollowUpdateArgs} args - Arguments to update one UserFollow.
     * @example
     * // Update one UserFollow
     * const userFollow = await prisma.userFollow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFollowUpdateArgs>(args: SelectSubset<T, UserFollowUpdateArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFollows.
     * @param {UserFollowDeleteManyArgs} args - Arguments to filter UserFollows to delete.
     * @example
     * // Delete a few UserFollows
     * const { count } = await prisma.userFollow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFollowDeleteManyArgs>(args?: SelectSubset<T, UserFollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFollows
     * const userFollow = await prisma.userFollow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFollowUpdateManyArgs>(args: SelectSubset<T, UserFollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFollows and returns the data updated in the database.
     * @param {UserFollowUpdateManyAndReturnArgs} args - Arguments to update many UserFollows.
     * @example
     * // Update many UserFollows
     * const userFollow = await prisma.userFollow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFollows and only return the `id`
     * const userFollowWithIdOnly = await prisma.userFollow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFollowUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFollowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFollow.
     * @param {UserFollowUpsertArgs} args - Arguments to update or create a UserFollow.
     * @example
     * // Update or create a UserFollow
     * const userFollow = await prisma.userFollow.upsert({
     *   create: {
     *     // ... data to create a UserFollow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFollow we want to update
     *   }
     * })
     */
    upsert<T extends UserFollowUpsertArgs>(args: SelectSubset<T, UserFollowUpsertArgs<ExtArgs>>): Prisma__UserFollowClient<$Result.GetResult<Prisma.$UserFollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowCountArgs} args - Arguments to filter UserFollows to count.
     * @example
     * // Count the number of UserFollows
     * const count = await prisma.userFollow.count({
     *   where: {
     *     // ... the filter for the UserFollows we want to count
     *   }
     * })
    **/
    count<T extends UserFollowCountArgs>(
      args?: Subset<T, UserFollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFollowAggregateArgs>(args: Subset<T, UserFollowAggregateArgs>): Prisma.PrismaPromise<GetUserFollowAggregateType<T>>

    /**
     * Group by UserFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFollowGroupByArgs['orderBy'] }
        : { orderBy?: UserFollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFollow model
   */
  readonly fields: UserFollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFollow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artisan<T extends UserFollow$artisanArgs<ExtArgs> = {}>(args?: Subset<T, UserFollow$artisanArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event<T extends UserFollow$eventArgs<ExtArgs> = {}>(args?: Subset<T, UserFollow$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFollow model
   */
  interface UserFollowFieldRefs {
    readonly id: FieldRef<"UserFollow", 'String'>
    readonly userId: FieldRef<"UserFollow", 'String'>
    readonly artisanId: FieldRef<"UserFollow", 'String'>
    readonly eventId: FieldRef<"UserFollow", 'String'>
    readonly createdAt: FieldRef<"UserFollow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFollow findUnique
   */
  export type UserFollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollow to fetch.
     */
    where: UserFollowWhereUniqueInput
  }

  /**
   * UserFollow findUniqueOrThrow
   */
  export type UserFollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollow to fetch.
     */
    where: UserFollowWhereUniqueInput
  }

  /**
   * UserFollow findFirst
   */
  export type UserFollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollow to fetch.
     */
    where?: UserFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollows to fetch.
     */
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFollows.
     */
    cursor?: UserFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFollows.
     */
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * UserFollow findFirstOrThrow
   */
  export type UserFollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollow to fetch.
     */
    where?: UserFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollows to fetch.
     */
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFollows.
     */
    cursor?: UserFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFollows.
     */
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * UserFollow findMany
   */
  export type UserFollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter, which UserFollows to fetch.
     */
    where?: UserFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollows to fetch.
     */
    orderBy?: UserFollowOrderByWithRelationInput | UserFollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFollows.
     */
    cursor?: UserFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFollows.
     */
    distinct?: UserFollowScalarFieldEnum | UserFollowScalarFieldEnum[]
  }

  /**
   * UserFollow create
   */
  export type UserFollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFollow.
     */
    data: XOR<UserFollowCreateInput, UserFollowUncheckedCreateInput>
  }

  /**
   * UserFollow createMany
   */
  export type UserFollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFollows.
     */
    data: UserFollowCreateManyInput | UserFollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFollow createManyAndReturn
   */
  export type UserFollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * The data used to create many UserFollows.
     */
    data: UserFollowCreateManyInput | UserFollowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFollow update
   */
  export type UserFollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFollow.
     */
    data: XOR<UserFollowUpdateInput, UserFollowUncheckedUpdateInput>
    /**
     * Choose, which UserFollow to update.
     */
    where: UserFollowWhereUniqueInput
  }

  /**
   * UserFollow updateMany
   */
  export type UserFollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFollows.
     */
    data: XOR<UserFollowUpdateManyMutationInput, UserFollowUncheckedUpdateManyInput>
    /**
     * Filter which UserFollows to update
     */
    where?: UserFollowWhereInput
    /**
     * Limit how many UserFollows to update.
     */
    limit?: number
  }

  /**
   * UserFollow updateManyAndReturn
   */
  export type UserFollowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * The data used to update UserFollows.
     */
    data: XOR<UserFollowUpdateManyMutationInput, UserFollowUncheckedUpdateManyInput>
    /**
     * Filter which UserFollows to update
     */
    where?: UserFollowWhereInput
    /**
     * Limit how many UserFollows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFollow upsert
   */
  export type UserFollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFollow to update in case it exists.
     */
    where: UserFollowWhereUniqueInput
    /**
     * In case the UserFollow found by the `where` argument doesn't exist, create a new UserFollow with this data.
     */
    create: XOR<UserFollowCreateInput, UserFollowUncheckedCreateInput>
    /**
     * In case the UserFollow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFollowUpdateInput, UserFollowUncheckedUpdateInput>
  }

  /**
   * UserFollow delete
   */
  export type UserFollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
    /**
     * Filter which UserFollow to delete.
     */
    where: UserFollowWhereUniqueInput
  }

  /**
   * UserFollow deleteMany
   */
  export type UserFollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFollows to delete
     */
    where?: UserFollowWhereInput
    /**
     * Limit how many UserFollows to delete.
     */
    limit?: number
  }

  /**
   * UserFollow.artisan
   */
  export type UserFollow$artisanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    where?: ArtisanWhereInput
  }

  /**
   * UserFollow.event
   */
  export type UserFollow$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * UserFollow without action
   */
  export type UserFollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollow
     */
    select?: UserFollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFollow
     */
    omit?: UserFollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFollowInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    recipientId: string | null
    type: string | null
    title: string | null
    body: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    recipientId: string | null
    type: string | null
    title: string | null
    body: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    recipientId: number
    type: number
    title: number
    body: number
    data: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    recipientId?: true
    type?: true
    title?: true
    body?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    recipientId?: true
    type?: true
    title?: true
    body?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    recipientId?: true
    type?: true
    title?: true
    body?: true
    data?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    recipientId: string
    type: string
    title: string
    body: string
    data: JsonValue | null
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    read?: boolean
    createdAt?: boolean
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    read?: boolean
    createdAt?: boolean
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    read?: boolean
    createdAt?: boolean
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    recipientId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    data?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipientId" | "type" | "title" | "body" | "data" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      recipient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipientId: string
      type: string
      title: string
      body: string
      data: Prisma.JsonValue | null
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly recipientId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly data: FieldRef<"Notification", 'Json'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    severity: number | null
  }

  export type AlertSumAggregateOutputType = {
    severity: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    townHallId: string | null
    type: $Enums.AlertType | null
    title: string | null
    message: string | null
    severity: number | null
    createdAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    townHallId: string | null
    type: $Enums.AlertType | null
    title: string | null
    message: string | null
    severity: number | null
    createdAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    eventId: number
    townHallId: number
    type: number
    title: number
    message: number
    severity: number
    createdAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    severity?: true
  }

  export type AlertSumAggregateInputType = {
    severity?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    eventId?: true
    townHallId?: true
    type?: true
    title?: true
    message?: true
    severity?: true
    createdAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    eventId?: true
    townHallId?: true
    type?: true
    title?: true
    message?: true
    severity?: true
    createdAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    eventId?: true
    townHallId?: true
    type?: true
    title?: true
    message?: true
    severity?: true
    createdAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    eventId: string
    townHallId: string
    type: $Enums.AlertType
    title: string
    message: string
    severity: number
    createdAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    townHallId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    townHallId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    townHallId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    eventId?: boolean
    townHallId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    severity?: boolean
    createdAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "townHallId" | "type" | "title" | "message" | "severity" | "createdAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    townHall?: boolean | TownHallDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      townHall: Prisma.$TownHallPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      townHallId: string
      type: $Enums.AlertType
      title: string
      message: string
      severity: number
      createdAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    townHall<T extends TownHallDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TownHallDefaultArgs<ExtArgs>>): Prisma__TownHallClient<$Result.GetResult<Prisma.$TownHallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly eventId: FieldRef<"Alert", 'String'>
    readonly townHallId: FieldRef<"Alert", 'String'>
    readonly type: FieldRef<"Alert", 'AlertType'>
    readonly title: FieldRef<"Alert", 'String'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly severity: FieldRef<"Alert", 'Int'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    maxDistanceKm: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    maxDistanceKm: number | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    maxDistanceKm: number | null
    language: string | null
    pushEnabled: boolean | null
    emailAlerts: boolean | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    maxDistanceKm: number | null
    language: string | null
    pushEnabled: boolean | null
    emailAlerts: boolean | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    favoriteCategories: number
    maxDistanceKm: number
    language: number
    pushEnabled: number
    emailAlerts: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    maxDistanceKm?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    maxDistanceKm?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    maxDistanceKm?: true
    language?: true
    pushEnabled?: true
    emailAlerts?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    maxDistanceKm?: true
    language?: true
    pushEnabled?: true
    emailAlerts?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    favoriteCategories?: true
    maxDistanceKm?: true
    language?: true
    pushEnabled?: true
    emailAlerts?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    userId: string
    favoriteCategories: string[]
    maxDistanceKm: number | null
    language: string
    pushEnabled: boolean
    emailAlerts: boolean
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    favoriteCategories?: boolean
    maxDistanceKm?: boolean
    language?: boolean
    pushEnabled?: boolean
    emailAlerts?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    favoriteCategories?: boolean
    maxDistanceKm?: boolean
    language?: boolean
    pushEnabled?: boolean
    emailAlerts?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    favoriteCategories?: boolean
    maxDistanceKm?: boolean
    language?: boolean
    pushEnabled?: boolean
    emailAlerts?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    favoriteCategories?: boolean
    maxDistanceKm?: boolean
    language?: boolean
    pushEnabled?: boolean
    emailAlerts?: boolean
  }

  export type UserPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "favoriteCategories" | "maxDistanceKm" | "language" | "pushEnabled" | "emailAlerts", ExtArgs["result"]["userPreferences"]>
  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      favoriteCategories: string[]
      maxDistanceKm: number | null
      language: string
      pushEnabled: boolean
      emailAlerts: boolean
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferencesUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreferences model
   */
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly favoriteCategories: FieldRef<"UserPreferences", 'String[]'>
    readonly maxDistanceKm: FieldRef<"UserPreferences", 'Float'>
    readonly language: FieldRef<"UserPreferences", 'String'>
    readonly pushEnabled: FieldRef<"UserPreferences", 'Boolean'>
    readonly emailAlerts: FieldRef<"UserPreferences", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreferences updateManyAndReturn
   */
  export type UserPreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    bio: 'bio'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const TownHallScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    municipality: 'municipality',
    province: 'province',
    logoUrl: 'logoUrl',
    verified: 'verified'
  };

  export type TownHallScalarFieldEnum = (typeof TownHallScalarFieldEnum)[keyof typeof TownHallScalarFieldEnum]


  export const ArtisanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessName: 'businessName',
    description: 'description',
    categories: 'categories',
    km0Certified: 'km0Certified',
    verifiedById: 'verifiedById',
    logoUrl: 'logoUrl',
    websiteUrl: 'websiteUrl'
  };

  export type ArtisanScalarFieldEnum = (typeof ArtisanScalarFieldEnum)[keyof typeof ArtisanScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    townHallId: 'townHallId',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    locationLat: 'locationLat',
    locationLng: 'locationLng',
    locationAddr: 'locationAddr',
    status: 'status',
    categories: 'categories',
    coverImageUrl: 'coverImageUrl',
    maxAttendees: 'maxAttendees',
    isTemplate: 'isTemplate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventParticipantScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    artisanId: 'artisanId',
    status: 'status',
    boothCode: 'boothCode',
    positionX: 'positionX',
    positionY: 'positionY',
    createdAt: 'createdAt'
  };

  export type EventParticipantScalarFieldEnum = (typeof EventParticipantScalarFieldEnum)[keyof typeof EventParticipantScalarFieldEnum]


  export const EventProductScalarFieldEnum: {
    id: 'id',
    participantId: 'participantId',
    name: 'name',
    description: 'description',
    price: 'price',
    category: 'category',
    km0Certified: 'km0Certified',
    imageUrl: 'imageUrl'
  };

  export type EventProductScalarFieldEnum = (typeof EventProductScalarFieldEnum)[keyof typeof EventProductScalarFieldEnum]


  export const VenueMapScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    imageUrl: 'imageUrl',
    widthPx: 'widthPx',
    heightPx: 'heightPx',
    zones: 'zones'
  };

  export type VenueMapScalarFieldEnum = (typeof VenueMapScalarFieldEnum)[keyof typeof VenueMapScalarFieldEnum]


  export const EventAttendeeScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type EventAttendeeScalarFieldEnum = (typeof EventAttendeeScalarFieldEnum)[keyof typeof EventAttendeeScalarFieldEnum]


  export const UserFollowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    artisanId: 'artisanId',
    eventId: 'eventId',
    createdAt: 'createdAt'
  };

  export type UserFollowScalarFieldEnum = (typeof UserFollowScalarFieldEnum)[keyof typeof UserFollowScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    recipientId: 'recipientId',
    type: 'type',
    title: 'title',
    body: 'body',
    data: 'data',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    townHallId: 'townHallId',
    type: 'type',
    title: 'title',
    message: 'message',
    severity: 'severity',
    createdAt: 'createdAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    favoriteCategories: 'favoriteCategories',
    maxDistanceKm: 'maxDistanceKm',
    language: 'language',
    pushEnabled: 'pushEnabled',
    emailAlerts: 'emailAlerts'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ParticipantStatus'
   */
  export type EnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus'>
    


  /**
   * Reference to a field of type 'ParticipantStatus[]'
   */
  export type ListEnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AttendeeStatus'
   */
  export type EnumAttendeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendeeStatus'>
    


  /**
   * Reference to a field of type 'AttendeeStatus[]'
   */
  export type ListEnumAttendeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendeeStatus[]'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'AlertType[]'
   */
  export type ListEnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    townHall?: XOR<TownHallNullableScalarRelationFilter, TownHallWhereInput> | null
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
    attendances?: EventAttendeeListRelationFilter
    follows?: UserFollowListRelationFilter
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    townHall?: TownHallOrderByWithRelationInput
    artisan?: ArtisanOrderByWithRelationInput
    attendances?: EventAttendeeOrderByRelationAggregateInput
    follows?: UserFollowOrderByRelationAggregateInput
    preferences?: UserPreferencesOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    townHall?: XOR<TownHallNullableScalarRelationFilter, TownHallWhereInput> | null
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
    attendances?: EventAttendeeListRelationFilter
    follows?: UserFollowListRelationFilter
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    displayName?: StringFilter<"UserProfile"> | string
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    bio?: StringNullableFilter<"UserProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    displayName?: StringFilter<"UserProfile"> | string
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    bio?: StringNullableFilter<"UserProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    displayName?: StringWithAggregatesFilter<"UserProfile"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
  }

  export type TownHallWhereInput = {
    AND?: TownHallWhereInput | TownHallWhereInput[]
    OR?: TownHallWhereInput[]
    NOT?: TownHallWhereInput | TownHallWhereInput[]
    id?: StringFilter<"TownHall"> | string
    userId?: StringFilter<"TownHall"> | string
    name?: StringFilter<"TownHall"> | string
    municipality?: StringFilter<"TownHall"> | string
    province?: StringFilter<"TownHall"> | string
    logoUrl?: StringNullableFilter<"TownHall"> | string | null
    verified?: BoolFilter<"TownHall"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    events?: EventListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type TownHallOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    verified?: SortOrder
    user?: UserOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type TownHallWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TownHallWhereInput | TownHallWhereInput[]
    OR?: TownHallWhereInput[]
    NOT?: TownHallWhereInput | TownHallWhereInput[]
    name?: StringFilter<"TownHall"> | string
    municipality?: StringFilter<"TownHall"> | string
    province?: StringFilter<"TownHall"> | string
    logoUrl?: StringNullableFilter<"TownHall"> | string | null
    verified?: BoolFilter<"TownHall"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    events?: EventListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id" | "userId">

  export type TownHallOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    verified?: SortOrder
    _count?: TownHallCountOrderByAggregateInput
    _max?: TownHallMaxOrderByAggregateInput
    _min?: TownHallMinOrderByAggregateInput
  }

  export type TownHallScalarWhereWithAggregatesInput = {
    AND?: TownHallScalarWhereWithAggregatesInput | TownHallScalarWhereWithAggregatesInput[]
    OR?: TownHallScalarWhereWithAggregatesInput[]
    NOT?: TownHallScalarWhereWithAggregatesInput | TownHallScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TownHall"> | string
    userId?: StringWithAggregatesFilter<"TownHall"> | string
    name?: StringWithAggregatesFilter<"TownHall"> | string
    municipality?: StringWithAggregatesFilter<"TownHall"> | string
    province?: StringWithAggregatesFilter<"TownHall"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"TownHall"> | string | null
    verified?: BoolWithAggregatesFilter<"TownHall"> | boolean
  }

  export type ArtisanWhereInput = {
    AND?: ArtisanWhereInput | ArtisanWhereInput[]
    OR?: ArtisanWhereInput[]
    NOT?: ArtisanWhereInput | ArtisanWhereInput[]
    id?: StringFilter<"Artisan"> | string
    userId?: StringFilter<"Artisan"> | string
    businessName?: StringFilter<"Artisan"> | string
    description?: StringNullableFilter<"Artisan"> | string | null
    categories?: StringNullableListFilter<"Artisan">
    km0Certified?: BoolFilter<"Artisan"> | boolean
    verifiedById?: StringNullableFilter<"Artisan"> | string | null
    logoUrl?: StringNullableFilter<"Artisan"> | string | null
    websiteUrl?: StringNullableFilter<"Artisan"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: EventParticipantListRelationFilter
    followers?: UserFollowListRelationFilter
  }

  export type ArtisanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    description?: SortOrderInput | SortOrder
    categories?: SortOrder
    km0Certified?: SortOrder
    verifiedById?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    participants?: EventParticipantOrderByRelationAggregateInput
    followers?: UserFollowOrderByRelationAggregateInput
  }

  export type ArtisanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ArtisanWhereInput | ArtisanWhereInput[]
    OR?: ArtisanWhereInput[]
    NOT?: ArtisanWhereInput | ArtisanWhereInput[]
    businessName?: StringFilter<"Artisan"> | string
    description?: StringNullableFilter<"Artisan"> | string | null
    categories?: StringNullableListFilter<"Artisan">
    km0Certified?: BoolFilter<"Artisan"> | boolean
    verifiedById?: StringNullableFilter<"Artisan"> | string | null
    logoUrl?: StringNullableFilter<"Artisan"> | string | null
    websiteUrl?: StringNullableFilter<"Artisan"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: EventParticipantListRelationFilter
    followers?: UserFollowListRelationFilter
  }, "id" | "userId">

  export type ArtisanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    description?: SortOrderInput | SortOrder
    categories?: SortOrder
    km0Certified?: SortOrder
    verifiedById?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    _count?: ArtisanCountOrderByAggregateInput
    _max?: ArtisanMaxOrderByAggregateInput
    _min?: ArtisanMinOrderByAggregateInput
  }

  export type ArtisanScalarWhereWithAggregatesInput = {
    AND?: ArtisanScalarWhereWithAggregatesInput | ArtisanScalarWhereWithAggregatesInput[]
    OR?: ArtisanScalarWhereWithAggregatesInput[]
    NOT?: ArtisanScalarWhereWithAggregatesInput | ArtisanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artisan"> | string
    userId?: StringWithAggregatesFilter<"Artisan"> | string
    businessName?: StringWithAggregatesFilter<"Artisan"> | string
    description?: StringNullableWithAggregatesFilter<"Artisan"> | string | null
    categories?: StringNullableListFilter<"Artisan">
    km0Certified?: BoolWithAggregatesFilter<"Artisan"> | boolean
    verifiedById?: StringNullableWithAggregatesFilter<"Artisan"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Artisan"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Artisan"> | string | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    townHallId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    locationLat?: FloatFilter<"Event"> | number
    locationLng?: FloatFilter<"Event"> | number
    locationAddr?: StringFilter<"Event"> | string
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    categories?: StringNullableListFilter<"Event">
    coverImageUrl?: StringNullableFilter<"Event"> | string | null
    maxAttendees?: IntNullableFilter<"Event"> | number | null
    isTemplate?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    townHall?: XOR<TownHallScalarRelationFilter, TownHallWhereInput>
    participants?: EventParticipantListRelationFilter
    attendees?: EventAttendeeListRelationFilter
    venueMap?: XOR<VenueMapNullableScalarRelationFilter, VenueMapWhereInput> | null
    alerts?: AlertListRelationFilter
    follows?: UserFollowListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    townHallId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddr?: SortOrder
    status?: SortOrder
    categories?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    maxAttendees?: SortOrderInput | SortOrder
    isTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    townHall?: TownHallOrderByWithRelationInput
    participants?: EventParticipantOrderByRelationAggregateInput
    attendees?: EventAttendeeOrderByRelationAggregateInput
    venueMap?: VenueMapOrderByWithRelationInput
    alerts?: AlertOrderByRelationAggregateInput
    follows?: UserFollowOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    townHallId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    locationLat?: FloatFilter<"Event"> | number
    locationLng?: FloatFilter<"Event"> | number
    locationAddr?: StringFilter<"Event"> | string
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    categories?: StringNullableListFilter<"Event">
    coverImageUrl?: StringNullableFilter<"Event"> | string | null
    maxAttendees?: IntNullableFilter<"Event"> | number | null
    isTemplate?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    townHall?: XOR<TownHallScalarRelationFilter, TownHallWhereInput>
    participants?: EventParticipantListRelationFilter
    attendees?: EventAttendeeListRelationFilter
    venueMap?: XOR<VenueMapNullableScalarRelationFilter, VenueMapWhereInput> | null
    alerts?: AlertListRelationFilter
    follows?: UserFollowListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    townHallId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddr?: SortOrder
    status?: SortOrder
    categories?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    maxAttendees?: SortOrderInput | SortOrder
    isTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    townHallId?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    locationLat?: FloatWithAggregatesFilter<"Event"> | number
    locationLng?: FloatWithAggregatesFilter<"Event"> | number
    locationAddr?: StringWithAggregatesFilter<"Event"> | string
    status?: EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus
    categories?: StringNullableListFilter<"Event">
    coverImageUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    maxAttendees?: IntNullableWithAggregatesFilter<"Event"> | number | null
    isTemplate?: BoolWithAggregatesFilter<"Event"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventParticipantWhereInput = {
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    id?: StringFilter<"EventParticipant"> | string
    eventId?: StringFilter<"EventParticipant"> | string
    artisanId?: StringFilter<"EventParticipant"> | string
    status?: EnumParticipantStatusFilter<"EventParticipant"> | $Enums.ParticipantStatus
    boothCode?: StringNullableFilter<"EventParticipant"> | string | null
    positionX?: FloatNullableFilter<"EventParticipant"> | number | null
    positionY?: FloatNullableFilter<"EventParticipant"> | number | null
    createdAt?: DateTimeFilter<"EventParticipant"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    artisan?: XOR<ArtisanScalarRelationFilter, ArtisanWhereInput>
    products?: EventProductListRelationFilter
  }

  export type EventParticipantOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    artisanId?: SortOrder
    status?: SortOrder
    boothCode?: SortOrderInput | SortOrder
    positionX?: SortOrderInput | SortOrder
    positionY?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    artisan?: ArtisanOrderByWithRelationInput
    products?: EventProductOrderByRelationAggregateInput
  }

  export type EventParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_artisanId?: EventParticipantEventIdArtisanIdCompoundUniqueInput
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    artisanId?: StringFilter<"EventParticipant"> | string
    status?: EnumParticipantStatusFilter<"EventParticipant"> | $Enums.ParticipantStatus
    boothCode?: StringNullableFilter<"EventParticipant"> | string | null
    positionX?: FloatNullableFilter<"EventParticipant"> | number | null
    positionY?: FloatNullableFilter<"EventParticipant"> | number | null
    createdAt?: DateTimeFilter<"EventParticipant"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    artisan?: XOR<ArtisanScalarRelationFilter, ArtisanWhereInput>
    products?: EventProductListRelationFilter
  }, "id" | "eventId_artisanId">

  export type EventParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    artisanId?: SortOrder
    status?: SortOrder
    boothCode?: SortOrderInput | SortOrder
    positionX?: SortOrderInput | SortOrder
    positionY?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventParticipantCountOrderByAggregateInput
    _avg?: EventParticipantAvgOrderByAggregateInput
    _max?: EventParticipantMaxOrderByAggregateInput
    _min?: EventParticipantMinOrderByAggregateInput
    _sum?: EventParticipantSumOrderByAggregateInput
  }

  export type EventParticipantScalarWhereWithAggregatesInput = {
    AND?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    OR?: EventParticipantScalarWhereWithAggregatesInput[]
    NOT?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventParticipant"> | string
    eventId?: StringWithAggregatesFilter<"EventParticipant"> | string
    artisanId?: StringWithAggregatesFilter<"EventParticipant"> | string
    status?: EnumParticipantStatusWithAggregatesFilter<"EventParticipant"> | $Enums.ParticipantStatus
    boothCode?: StringNullableWithAggregatesFilter<"EventParticipant"> | string | null
    positionX?: FloatNullableWithAggregatesFilter<"EventParticipant"> | number | null
    positionY?: FloatNullableWithAggregatesFilter<"EventParticipant"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"EventParticipant"> | Date | string
  }

  export type EventProductWhereInput = {
    AND?: EventProductWhereInput | EventProductWhereInput[]
    OR?: EventProductWhereInput[]
    NOT?: EventProductWhereInput | EventProductWhereInput[]
    id?: StringFilter<"EventProduct"> | string
    participantId?: StringFilter<"EventProduct"> | string
    name?: StringFilter<"EventProduct"> | string
    description?: StringNullableFilter<"EventProduct"> | string | null
    price?: FloatNullableFilter<"EventProduct"> | number | null
    category?: StringFilter<"EventProduct"> | string
    km0Certified?: BoolFilter<"EventProduct"> | boolean
    imageUrl?: StringNullableFilter<"EventProduct"> | string | null
    participant?: XOR<EventParticipantScalarRelationFilter, EventParticipantWhereInput>
  }

  export type EventProductOrderByWithRelationInput = {
    id?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrder
    km0Certified?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    participant?: EventParticipantOrderByWithRelationInput
  }

  export type EventProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventProductWhereInput | EventProductWhereInput[]
    OR?: EventProductWhereInput[]
    NOT?: EventProductWhereInput | EventProductWhereInput[]
    participantId?: StringFilter<"EventProduct"> | string
    name?: StringFilter<"EventProduct"> | string
    description?: StringNullableFilter<"EventProduct"> | string | null
    price?: FloatNullableFilter<"EventProduct"> | number | null
    category?: StringFilter<"EventProduct"> | string
    km0Certified?: BoolFilter<"EventProduct"> | boolean
    imageUrl?: StringNullableFilter<"EventProduct"> | string | null
    participant?: XOR<EventParticipantScalarRelationFilter, EventParticipantWhereInput>
  }, "id">

  export type EventProductOrderByWithAggregationInput = {
    id?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrder
    km0Certified?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: EventProductCountOrderByAggregateInput
    _avg?: EventProductAvgOrderByAggregateInput
    _max?: EventProductMaxOrderByAggregateInput
    _min?: EventProductMinOrderByAggregateInput
    _sum?: EventProductSumOrderByAggregateInput
  }

  export type EventProductScalarWhereWithAggregatesInput = {
    AND?: EventProductScalarWhereWithAggregatesInput | EventProductScalarWhereWithAggregatesInput[]
    OR?: EventProductScalarWhereWithAggregatesInput[]
    NOT?: EventProductScalarWhereWithAggregatesInput | EventProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventProduct"> | string
    participantId?: StringWithAggregatesFilter<"EventProduct"> | string
    name?: StringWithAggregatesFilter<"EventProduct"> | string
    description?: StringNullableWithAggregatesFilter<"EventProduct"> | string | null
    price?: FloatNullableWithAggregatesFilter<"EventProduct"> | number | null
    category?: StringWithAggregatesFilter<"EventProduct"> | string
    km0Certified?: BoolWithAggregatesFilter<"EventProduct"> | boolean
    imageUrl?: StringNullableWithAggregatesFilter<"EventProduct"> | string | null
  }

  export type VenueMapWhereInput = {
    AND?: VenueMapWhereInput | VenueMapWhereInput[]
    OR?: VenueMapWhereInput[]
    NOT?: VenueMapWhereInput | VenueMapWhereInput[]
    id?: StringFilter<"VenueMap"> | string
    eventId?: StringFilter<"VenueMap"> | string
    imageUrl?: StringFilter<"VenueMap"> | string
    widthPx?: IntFilter<"VenueMap"> | number
    heightPx?: IntFilter<"VenueMap"> | number
    zones?: JsonNullableFilter<"VenueMap">
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type VenueMapOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
    zones?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type VenueMapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: VenueMapWhereInput | VenueMapWhereInput[]
    OR?: VenueMapWhereInput[]
    NOT?: VenueMapWhereInput | VenueMapWhereInput[]
    imageUrl?: StringFilter<"VenueMap"> | string
    widthPx?: IntFilter<"VenueMap"> | number
    heightPx?: IntFilter<"VenueMap"> | number
    zones?: JsonNullableFilter<"VenueMap">
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "eventId">

  export type VenueMapOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
    zones?: SortOrderInput | SortOrder
    _count?: VenueMapCountOrderByAggregateInput
    _avg?: VenueMapAvgOrderByAggregateInput
    _max?: VenueMapMaxOrderByAggregateInput
    _min?: VenueMapMinOrderByAggregateInput
    _sum?: VenueMapSumOrderByAggregateInput
  }

  export type VenueMapScalarWhereWithAggregatesInput = {
    AND?: VenueMapScalarWhereWithAggregatesInput | VenueMapScalarWhereWithAggregatesInput[]
    OR?: VenueMapScalarWhereWithAggregatesInput[]
    NOT?: VenueMapScalarWhereWithAggregatesInput | VenueMapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VenueMap"> | string
    eventId?: StringWithAggregatesFilter<"VenueMap"> | string
    imageUrl?: StringWithAggregatesFilter<"VenueMap"> | string
    widthPx?: IntWithAggregatesFilter<"VenueMap"> | number
    heightPx?: IntWithAggregatesFilter<"VenueMap"> | number
    zones?: JsonNullableWithAggregatesFilter<"VenueMap">
  }

  export type EventAttendeeWhereInput = {
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    id?: StringFilter<"EventAttendee"> | string
    eventId?: StringFilter<"EventAttendee"> | string
    userId?: StringFilter<"EventAttendee"> | string
    status?: EnumAttendeeStatusFilter<"EventAttendee"> | $Enums.AttendeeStatus
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventAttendeeOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventAttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_userId?: EventAttendeeEventIdUserIdCompoundUniqueInput
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    eventId?: StringFilter<"EventAttendee"> | string
    userId?: StringFilter<"EventAttendee"> | string
    status?: EnumAttendeeStatusFilter<"EventAttendee"> | $Enums.AttendeeStatus
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "eventId_userId">

  export type EventAttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: EventAttendeeCountOrderByAggregateInput
    _max?: EventAttendeeMaxOrderByAggregateInput
    _min?: EventAttendeeMinOrderByAggregateInput
  }

  export type EventAttendeeScalarWhereWithAggregatesInput = {
    AND?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    OR?: EventAttendeeScalarWhereWithAggregatesInput[]
    NOT?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventAttendee"> | string
    eventId?: StringWithAggregatesFilter<"EventAttendee"> | string
    userId?: StringWithAggregatesFilter<"EventAttendee"> | string
    status?: EnumAttendeeStatusWithAggregatesFilter<"EventAttendee"> | $Enums.AttendeeStatus
    createdAt?: DateTimeWithAggregatesFilter<"EventAttendee"> | Date | string
  }

  export type UserFollowWhereInput = {
    AND?: UserFollowWhereInput | UserFollowWhereInput[]
    OR?: UserFollowWhereInput[]
    NOT?: UserFollowWhereInput | UserFollowWhereInput[]
    id?: StringFilter<"UserFollow"> | string
    userId?: StringFilter<"UserFollow"> | string
    artisanId?: StringNullableFilter<"UserFollow"> | string | null
    eventId?: StringNullableFilter<"UserFollow"> | string | null
    createdAt?: DateTimeFilter<"UserFollow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type UserFollowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    artisan?: ArtisanOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type UserFollowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserFollowWhereInput | UserFollowWhereInput[]
    OR?: UserFollowWhereInput[]
    NOT?: UserFollowWhereInput | UserFollowWhereInput[]
    userId?: StringFilter<"UserFollow"> | string
    artisanId?: StringNullableFilter<"UserFollow"> | string | null
    eventId?: StringNullableFilter<"UserFollow"> | string | null
    createdAt?: DateTimeFilter<"UserFollow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type UserFollowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserFollowCountOrderByAggregateInput
    _max?: UserFollowMaxOrderByAggregateInput
    _min?: UserFollowMinOrderByAggregateInput
  }

  export type UserFollowScalarWhereWithAggregatesInput = {
    AND?: UserFollowScalarWhereWithAggregatesInput | UserFollowScalarWhereWithAggregatesInput[]
    OR?: UserFollowScalarWhereWithAggregatesInput[]
    NOT?: UserFollowScalarWhereWithAggregatesInput | UserFollowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFollow"> | string
    userId?: StringWithAggregatesFilter<"UserFollow"> | string
    artisanId?: StringNullableWithAggregatesFilter<"UserFollow"> | string | null
    eventId?: StringNullableWithAggregatesFilter<"UserFollow"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserFollow"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    recipientId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    recipientId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    recipient?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    recipientId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    recipientId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    recipientId?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    data?: JsonNullableWithAggregatesFilter<"Notification">
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    eventId?: StringFilter<"Alert"> | string
    townHallId?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    severity?: IntFilter<"Alert"> | number
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    townHall?: XOR<TownHallScalarRelationFilter, TownHallWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    townHallId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    townHall?: TownHallOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    eventId?: StringFilter<"Alert"> | string
    townHallId?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    severity?: IntFilter<"Alert"> | number
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    townHall?: XOR<TownHallScalarRelationFilter, TownHallWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    townHallId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    eventId?: StringWithAggregatesFilter<"Alert"> | string
    townHallId?: StringWithAggregatesFilter<"Alert"> | string
    type?: EnumAlertTypeWithAggregatesFilter<"Alert"> | $Enums.AlertType
    title?: StringWithAggregatesFilter<"Alert"> | string
    message?: StringWithAggregatesFilter<"Alert"> | string
    severity?: IntWithAggregatesFilter<"Alert"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    favoriteCategories?: StringNullableListFilter<"UserPreferences">
    maxDistanceKm?: FloatNullableFilter<"UserPreferences"> | number | null
    language?: StringFilter<"UserPreferences"> | string
    pushEnabled?: BoolFilter<"UserPreferences"> | boolean
    emailAlerts?: BoolFilter<"UserPreferences"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    favoriteCategories?: SortOrder
    maxDistanceKm?: SortOrderInput | SortOrder
    language?: SortOrder
    pushEnabled?: SortOrder
    emailAlerts?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    favoriteCategories?: StringNullableListFilter<"UserPreferences">
    maxDistanceKm?: FloatNullableFilter<"UserPreferences"> | number | null
    language?: StringFilter<"UserPreferences"> | string
    pushEnabled?: BoolFilter<"UserPreferences"> | boolean
    emailAlerts?: BoolFilter<"UserPreferences"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    favoriteCategories?: SortOrder
    maxDistanceKm?: SortOrderInput | SortOrder
    language?: SortOrder
    pushEnabled?: SortOrder
    emailAlerts?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    favoriteCategories?: StringNullableListFilter<"UserPreferences">
    maxDistanceKm?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    language?: StringWithAggregatesFilter<"UserPreferences"> | string
    pushEnabled?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    emailAlerts?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    townHall?: TownHallCreateNestedOneWithoutUserInput
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeCreateNestedManyWithoutUserInput
    follows?: UserFollowCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    townHall?: TownHallUncheckedCreateNestedOneWithoutUserInput
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    townHall?: TownHallUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUpdateManyWithoutUserNestedInput
    follows?: UserFollowUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    townHall?: TownHallUncheckedUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    displayName: string
    avatarUrl?: string | null
    bio?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    displayName: string
    avatarUrl?: string | null
    bio?: string | null
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    displayName: string
    avatarUrl?: string | null
    bio?: string | null
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TownHallCreateInput = {
    id?: string
    name: string
    municipality: string
    province: string
    logoUrl?: string | null
    verified?: boolean
    user: UserCreateNestedOneWithoutTownHallInput
    events?: EventCreateNestedManyWithoutTownHallInput
    alerts?: AlertCreateNestedManyWithoutTownHallInput
  }

  export type TownHallUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    municipality: string
    province: string
    logoUrl?: string | null
    verified?: boolean
    events?: EventUncheckedCreateNestedManyWithoutTownHallInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTownHallInput
  }

  export type TownHallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTownHallNestedInput
    events?: EventUpdateManyWithoutTownHallNestedInput
    alerts?: AlertUpdateManyWithoutTownHallNestedInput
  }

  export type TownHallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    events?: EventUncheckedUpdateManyWithoutTownHallNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTownHallNestedInput
  }

  export type TownHallCreateManyInput = {
    id?: string
    userId: string
    name: string
    municipality: string
    province: string
    logoUrl?: string | null
    verified?: boolean
  }

  export type TownHallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TownHallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtisanCreateInput = {
    id?: string
    businessName: string
    description?: string | null
    categories?: ArtisanCreatecategoriesInput | string[]
    km0Certified?: boolean
    verifiedById?: string | null
    logoUrl?: string | null
    websiteUrl?: string | null
    user: UserCreateNestedOneWithoutArtisanInput
    participants?: EventParticipantCreateNestedManyWithoutArtisanInput
    followers?: UserFollowCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateInput = {
    id?: string
    userId: string
    businessName: string
    description?: string | null
    categories?: ArtisanCreatecategoriesInput | string[]
    km0Certified?: boolean
    verifiedById?: string | null
    logoUrl?: string | null
    websiteUrl?: string | null
    participants?: EventParticipantUncheckedCreateNestedManyWithoutArtisanInput
    followers?: UserFollowUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutArtisanNestedInput
    participants?: EventParticipantUpdateManyWithoutArtisanNestedInput
    followers?: UserFollowUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: EventParticipantUncheckedUpdateManyWithoutArtisanNestedInput
    followers?: UserFollowUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanCreateManyInput = {
    id?: string
    userId: string
    businessName: string
    description?: string | null
    categories?: ArtisanCreatecategoriesInput | string[]
    km0Certified?: boolean
    verifiedById?: string | null
    logoUrl?: string | null
    websiteUrl?: string | null
  }

  export type ArtisanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtisanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    townHall: TownHallCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
    venueMap?: VenueMapCreateNestedOneWithoutEventInput
    alerts?: AlertCreateNestedManyWithoutEventInput
    follows?: UserFollowCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    townHallId: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    venueMap?: VenueMapUncheckedCreateNestedOneWithoutEventInput
    alerts?: AlertUncheckedCreateNestedManyWithoutEventInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townHall?: TownHallUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUpdateOneWithoutEventNestedInput
    alerts?: AlertUpdateManyWithoutEventNestedInput
    follows?: UserFollowUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUncheckedUpdateOneWithoutEventNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutEventNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    townHallId: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantCreateInput = {
    id?: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutParticipantsInput
    artisan: ArtisanCreateNestedOneWithoutParticipantsInput
    products?: EventProductCreateNestedManyWithoutParticipantInput
  }

  export type EventParticipantUncheckedCreateInput = {
    id?: string
    eventId: string
    artisanId: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    products?: EventProductUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type EventParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutParticipantsNestedInput
    products?: EventProductUpdateManyWithoutParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: EventProductUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type EventParticipantCreateManyInput = {
    id?: string
    eventId: string
    artisanId: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
  }

  export type EventParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventProductCreateInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category: string
    km0Certified?: boolean
    imageUrl?: string | null
    participant: EventParticipantCreateNestedOneWithoutProductsInput
  }

  export type EventProductUncheckedCreateInput = {
    id?: string
    participantId: string
    name: string
    description?: string | null
    price?: number | null
    category: string
    km0Certified?: boolean
    imageUrl?: string | null
  }

  export type EventProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    participant?: EventParticipantUpdateOneRequiredWithoutProductsNestedInput
  }

  export type EventProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventProductCreateManyInput = {
    id?: string
    participantId: string
    name: string
    description?: string | null
    price?: number | null
    category: string
    km0Certified?: boolean
    imageUrl?: string | null
  }

  export type EventProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VenueMapCreateInput = {
    id?: string
    imageUrl: string
    widthPx: number
    heightPx: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    event: EventCreateNestedOneWithoutVenueMapInput
  }

  export type VenueMapUncheckedCreateInput = {
    id?: string
    eventId: string
    imageUrl: string
    widthPx: number
    heightPx: number
    zones?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VenueMapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    event?: EventUpdateOneRequiredWithoutVenueMapNestedInput
  }

  export type VenueMapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VenueMapCreateManyInput = {
    id?: string
    eventId: string
    imageUrl: string
    widthPx: number
    heightPx: number
    zones?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VenueMapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VenueMapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventAttendeeCreateInput = {
    id?: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutAttendeesInput
    user: UserCreateNestedOneWithoutAttendancesInput
  }

  export type EventAttendeeUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
  }

  export type EventAttendeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type EventAttendeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeCreateManyInput = {
    id?: string
    eventId: string
    userId: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
  }

  export type EventAttendeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFollowsInput
    artisan?: ArtisanCreateNestedOneWithoutFollowersInput
    event?: EventCreateNestedOneWithoutFollowsInput
  }

  export type UserFollowUncheckedCreateInput = {
    id?: string
    userId: string
    artisanId?: string | null
    eventId?: string | null
    createdAt?: Date | string
  }

  export type UserFollowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFollowsNestedInput
    artisan?: ArtisanUpdateOneWithoutFollowersNestedInput
    event?: EventUpdateOneWithoutFollowsNestedInput
  }

  export type UserFollowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowCreateManyInput = {
    id?: string
    userId: string
    artisanId?: string | null
    eventId?: string | null
    createdAt?: Date | string
  }

  export type UserFollowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
    recipient: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    recipientId: string
    type: string
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    recipientId: string
    type: string
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    type: $Enums.AlertType
    title: string
    message: string
    severity?: number
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutAlertsInput
    townHall: TownHallCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    eventId: string
    townHallId: string
    type: $Enums.AlertType
    title: string
    message: string
    severity?: number
    createdAt?: Date | string
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutAlertsNestedInput
    townHall?: TownHallUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManyInput = {
    id?: string
    eventId: string
    townHallId: string
    type: $Enums.AlertType
    title: string
    message: string
    severity?: number
    createdAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateInput = {
    id?: string
    favoriteCategories?: UserPreferencesCreatefavoriteCategoriesInput | string[]
    maxDistanceKm?: number | null
    language?: string
    pushEnabled?: boolean
    emailAlerts?: boolean
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    favoriteCategories?: UserPreferencesCreatefavoriteCategoriesInput | string[]
    maxDistanceKm?: number | null
    language?: string
    pushEnabled?: boolean
    emailAlerts?: boolean
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    favoriteCategories?: UserPreferencesUpdatefavoriteCategoriesInput | string[]
    maxDistanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailAlerts?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    favoriteCategories?: UserPreferencesUpdatefavoriteCategoriesInput | string[]
    maxDistanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailAlerts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    userId: string
    favoriteCategories?: UserPreferencesCreatefavoriteCategoriesInput | string[]
    maxDistanceKm?: number | null
    language?: string
    pushEnabled?: boolean
    emailAlerts?: boolean
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    favoriteCategories?: UserPreferencesUpdatefavoriteCategoriesInput | string[]
    maxDistanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailAlerts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    favoriteCategories?: UserPreferencesUpdatefavoriteCategoriesInput | string[]
    maxDistanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailAlerts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type TownHallNullableScalarRelationFilter = {
    is?: TownHallWhereInput | null
    isNot?: TownHallWhereInput | null
  }

  export type ArtisanNullableScalarRelationFilter = {
    is?: ArtisanWhereInput | null
    isNot?: ArtisanWhereInput | null
  }

  export type EventAttendeeListRelationFilter = {
    every?: EventAttendeeWhereInput
    some?: EventAttendeeWhereInput
    none?: EventAttendeeWhereInput
  }

  export type UserFollowListRelationFilter = {
    every?: UserFollowWhereInput
    some?: UserFollowWhereInput
    none?: UserFollowWhereInput
  }

  export type UserPreferencesNullableScalarRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type EventAttendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TownHallCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    logoUrl?: SortOrder
    verified?: SortOrder
  }

  export type TownHallMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    logoUrl?: SortOrder
    verified?: SortOrder
  }

  export type TownHallMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    municipality?: SortOrder
    province?: SortOrder
    logoUrl?: SortOrder
    verified?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EventParticipantListRelationFilter = {
    every?: EventParticipantWhereInput
    some?: EventParticipantWhereInput
    none?: EventParticipantWhereInput
  }

  export type EventParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtisanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    description?: SortOrder
    categories?: SortOrder
    km0Certified?: SortOrder
    verifiedById?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
  }

  export type ArtisanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    description?: SortOrder
    km0Certified?: SortOrder
    verifiedById?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
  }

  export type ArtisanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    description?: SortOrder
    km0Certified?: SortOrder
    verifiedById?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TownHallScalarRelationFilter = {
    is?: TownHallWhereInput
    isNot?: TownHallWhereInput
  }

  export type VenueMapNullableScalarRelationFilter = {
    is?: VenueMapWhereInput | null
    isNot?: VenueMapWhereInput | null
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    townHallId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddr?: SortOrder
    status?: SortOrder
    categories?: SortOrder
    coverImageUrl?: SortOrder
    maxAttendees?: SortOrder
    isTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    locationLat?: SortOrder
    locationLng?: SortOrder
    maxAttendees?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    townHallId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddr?: SortOrder
    status?: SortOrder
    coverImageUrl?: SortOrder
    maxAttendees?: SortOrder
    isTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    townHallId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddr?: SortOrder
    status?: SortOrder
    coverImageUrl?: SortOrder
    maxAttendees?: SortOrder
    isTemplate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    locationLat?: SortOrder
    locationLng?: SortOrder
    maxAttendees?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type ArtisanScalarRelationFilter = {
    is?: ArtisanWhereInput
    isNot?: ArtisanWhereInput
  }

  export type EventProductListRelationFilter = {
    every?: EventProductWhereInput
    some?: EventProductWhereInput
    none?: EventProductWhereInput
  }

  export type EventProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventParticipantEventIdArtisanIdCompoundUniqueInput = {
    eventId: string
    artisanId: string
  }

  export type EventParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    artisanId?: SortOrder
    status?: SortOrder
    boothCode?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    createdAt?: SortOrder
  }

  export type EventParticipantAvgOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
  }

  export type EventParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    artisanId?: SortOrder
    status?: SortOrder
    boothCode?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    createdAt?: SortOrder
  }

  export type EventParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    artisanId?: SortOrder
    status?: SortOrder
    boothCode?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    createdAt?: SortOrder
  }

  export type EventParticipantSumOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
  }

  export type EnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EventParticipantScalarRelationFilter = {
    is?: EventParticipantWhereInput
    isNot?: EventParticipantWhereInput
  }

  export type EventProductCountOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    km0Certified?: SortOrder
    imageUrl?: SortOrder
  }

  export type EventProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EventProductMaxOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    km0Certified?: SortOrder
    imageUrl?: SortOrder
  }

  export type EventProductMinOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    km0Certified?: SortOrder
    imageUrl?: SortOrder
  }

  export type EventProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VenueMapCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
    zones?: SortOrder
  }

  export type VenueMapAvgOrderByAggregateInput = {
    widthPx?: SortOrder
    heightPx?: SortOrder
  }

  export type VenueMapMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
  }

  export type VenueMapMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    imageUrl?: SortOrder
    widthPx?: SortOrder
    heightPx?: SortOrder
  }

  export type VenueMapSumOrderByAggregateInput = {
    widthPx?: SortOrder
    heightPx?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumAttendeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendeeStatus | EnumAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendeeStatusFilter<$PrismaModel> | $Enums.AttendeeStatus
  }

  export type EventAttendeeEventIdUserIdCompoundUniqueInput = {
    eventId: string
    userId: string
  }

  export type EventAttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EventAttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EventAttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAttendeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendeeStatus | EnumAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendeeStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendeeStatusFilter<$PrismaModel>
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type UserFollowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFollowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFollowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    townHallId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    severity?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    townHallId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    townHallId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    severity?: SortOrder
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    favoriteCategories?: SortOrder
    maxDistanceKm?: SortOrder
    language?: SortOrder
    pushEnabled?: SortOrder
    emailAlerts?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    maxDistanceKm?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maxDistanceKm?: SortOrder
    language?: SortOrder
    pushEnabled?: SortOrder
    emailAlerts?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    maxDistanceKm?: SortOrder
    language?: SortOrder
    pushEnabled?: SortOrder
    emailAlerts?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    maxDistanceKm?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type TownHallCreateNestedOneWithoutUserInput = {
    create?: XOR<TownHallCreateWithoutUserInput, TownHallUncheckedCreateWithoutUserInput>
    connectOrCreate?: TownHallCreateOrConnectWithoutUserInput
    connect?: TownHallWhereUniqueInput
  }

  export type ArtisanCreateNestedOneWithoutUserInput = {
    create?: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutUserInput
    connect?: ArtisanWhereUniqueInput
  }

  export type EventAttendeeCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type UserFollowCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFollowCreateWithoutUserInput, UserFollowUncheckedCreateWithoutUserInput> | UserFollowCreateWithoutUserInput[] | UserFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutUserInput | UserFollowCreateOrConnectWithoutUserInput[]
    createMany?: UserFollowCreateManyUserInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type UserPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutRecipientInput = {
    create?: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput> | NotificationCreateWithoutRecipientInput[] | NotificationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRecipientInput | NotificationCreateOrConnectWithoutRecipientInput[]
    createMany?: NotificationCreateManyRecipientInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type TownHallUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TownHallCreateWithoutUserInput, TownHallUncheckedCreateWithoutUserInput>
    connectOrCreate?: TownHallCreateOrConnectWithoutUserInput
    connect?: TownHallWhereUniqueInput
  }

  export type ArtisanUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutUserInput
    connect?: ArtisanWhereUniqueInput
  }

  export type EventAttendeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type UserFollowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFollowCreateWithoutUserInput, UserFollowUncheckedCreateWithoutUserInput> | UserFollowCreateWithoutUserInput[] | UserFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutUserInput | UserFollowCreateOrConnectWithoutUserInput[]
    createMany?: UserFollowCreateManyUserInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput> | NotificationCreateWithoutRecipientInput[] | NotificationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRecipientInput | NotificationCreateOrConnectWithoutRecipientInput[]
    createMany?: NotificationCreateManyRecipientInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type TownHallUpdateOneWithoutUserNestedInput = {
    create?: XOR<TownHallCreateWithoutUserInput, TownHallUncheckedCreateWithoutUserInput>
    connectOrCreate?: TownHallCreateOrConnectWithoutUserInput
    upsert?: TownHallUpsertWithoutUserInput
    disconnect?: TownHallWhereInput | boolean
    delete?: TownHallWhereInput | boolean
    connect?: TownHallWhereUniqueInput
    update?: XOR<XOR<TownHallUpdateToOneWithWhereWithoutUserInput, TownHallUpdateWithoutUserInput>, TownHallUncheckedUpdateWithoutUserInput>
  }

  export type ArtisanUpdateOneWithoutUserNestedInput = {
    create?: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutUserInput
    upsert?: ArtisanUpsertWithoutUserInput
    disconnect?: ArtisanWhereInput | boolean
    delete?: ArtisanWhereInput | boolean
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutUserInput, ArtisanUpdateWithoutUserInput>, ArtisanUncheckedUpdateWithoutUserInput>
  }

  export type EventAttendeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutUserInput | EventAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutUserInput | EventAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutUserInput | EventAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type UserFollowUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFollowCreateWithoutUserInput, UserFollowUncheckedCreateWithoutUserInput> | UserFollowCreateWithoutUserInput[] | UserFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutUserInput | UserFollowCreateOrConnectWithoutUserInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutUserInput | UserFollowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFollowCreateManyUserInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutUserInput | UserFollowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutUserInput | UserFollowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type UserPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput> | NotificationCreateWithoutRecipientInput[] | NotificationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRecipientInput | NotificationCreateOrConnectWithoutRecipientInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutRecipientInput | NotificationUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: NotificationCreateManyRecipientInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutRecipientInput | NotificationUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutRecipientInput | NotificationUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type TownHallUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TownHallCreateWithoutUserInput, TownHallUncheckedCreateWithoutUserInput>
    connectOrCreate?: TownHallCreateOrConnectWithoutUserInput
    upsert?: TownHallUpsertWithoutUserInput
    disconnect?: TownHallWhereInput | boolean
    delete?: TownHallWhereInput | boolean
    connect?: TownHallWhereUniqueInput
    update?: XOR<XOR<TownHallUpdateToOneWithWhereWithoutUserInput, TownHallUpdateWithoutUserInput>, TownHallUncheckedUpdateWithoutUserInput>
  }

  export type ArtisanUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutUserInput
    upsert?: ArtisanUpsertWithoutUserInput
    disconnect?: ArtisanWhereInput | boolean
    delete?: ArtisanWhereInput | boolean
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutUserInput, ArtisanUpdateWithoutUserInput>, ArtisanUncheckedUpdateWithoutUserInput>
  }

  export type EventAttendeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutUserInput | EventAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutUserInput | EventAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutUserInput | EventAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type UserFollowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFollowCreateWithoutUserInput, UserFollowUncheckedCreateWithoutUserInput> | UserFollowCreateWithoutUserInput[] | UserFollowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutUserInput | UserFollowCreateOrConnectWithoutUserInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutUserInput | UserFollowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFollowCreateManyUserInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutUserInput | UserFollowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutUserInput | UserFollowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput> | NotificationCreateWithoutRecipientInput[] | NotificationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutRecipientInput | NotificationCreateOrConnectWithoutRecipientInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutRecipientInput | NotificationUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: NotificationCreateManyRecipientInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutRecipientInput | NotificationUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutRecipientInput | NotificationUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutTownHallInput = {
    create?: XOR<UserCreateWithoutTownHallInput, UserUncheckedCreateWithoutTownHallInput>
    connectOrCreate?: UserCreateOrConnectWithoutTownHallInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutTownHallInput = {
    create?: XOR<EventCreateWithoutTownHallInput, EventUncheckedCreateWithoutTownHallInput> | EventCreateWithoutTownHallInput[] | EventUncheckedCreateWithoutTownHallInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTownHallInput | EventCreateOrConnectWithoutTownHallInput[]
    createMany?: EventCreateManyTownHallInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutTownHallInput = {
    create?: XOR<AlertCreateWithoutTownHallInput, AlertUncheckedCreateWithoutTownHallInput> | AlertCreateWithoutTownHallInput[] | AlertUncheckedCreateWithoutTownHallInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTownHallInput | AlertCreateOrConnectWithoutTownHallInput[]
    createMany?: AlertCreateManyTownHallInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutTownHallInput = {
    create?: XOR<EventCreateWithoutTownHallInput, EventUncheckedCreateWithoutTownHallInput> | EventCreateWithoutTownHallInput[] | EventUncheckedCreateWithoutTownHallInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTownHallInput | EventCreateOrConnectWithoutTownHallInput[]
    createMany?: EventCreateManyTownHallInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutTownHallInput = {
    create?: XOR<AlertCreateWithoutTownHallInput, AlertUncheckedCreateWithoutTownHallInput> | AlertCreateWithoutTownHallInput[] | AlertUncheckedCreateWithoutTownHallInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTownHallInput | AlertCreateOrConnectWithoutTownHallInput[]
    createMany?: AlertCreateManyTownHallInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTownHallNestedInput = {
    create?: XOR<UserCreateWithoutTownHallInput, UserUncheckedCreateWithoutTownHallInput>
    connectOrCreate?: UserCreateOrConnectWithoutTownHallInput
    upsert?: UserUpsertWithoutTownHallInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTownHallInput, UserUpdateWithoutTownHallInput>, UserUncheckedUpdateWithoutTownHallInput>
  }

  export type EventUpdateManyWithoutTownHallNestedInput = {
    create?: XOR<EventCreateWithoutTownHallInput, EventUncheckedCreateWithoutTownHallInput> | EventCreateWithoutTownHallInput[] | EventUncheckedCreateWithoutTownHallInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTownHallInput | EventCreateOrConnectWithoutTownHallInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutTownHallInput | EventUpsertWithWhereUniqueWithoutTownHallInput[]
    createMany?: EventCreateManyTownHallInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutTownHallInput | EventUpdateWithWhereUniqueWithoutTownHallInput[]
    updateMany?: EventUpdateManyWithWhereWithoutTownHallInput | EventUpdateManyWithWhereWithoutTownHallInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutTownHallNestedInput = {
    create?: XOR<AlertCreateWithoutTownHallInput, AlertUncheckedCreateWithoutTownHallInput> | AlertCreateWithoutTownHallInput[] | AlertUncheckedCreateWithoutTownHallInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTownHallInput | AlertCreateOrConnectWithoutTownHallInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutTownHallInput | AlertUpsertWithWhereUniqueWithoutTownHallInput[]
    createMany?: AlertCreateManyTownHallInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutTownHallInput | AlertUpdateWithWhereUniqueWithoutTownHallInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutTownHallInput | AlertUpdateManyWithWhereWithoutTownHallInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutTownHallNestedInput = {
    create?: XOR<EventCreateWithoutTownHallInput, EventUncheckedCreateWithoutTownHallInput> | EventCreateWithoutTownHallInput[] | EventUncheckedCreateWithoutTownHallInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTownHallInput | EventCreateOrConnectWithoutTownHallInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutTownHallInput | EventUpsertWithWhereUniqueWithoutTownHallInput[]
    createMany?: EventCreateManyTownHallInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutTownHallInput | EventUpdateWithWhereUniqueWithoutTownHallInput[]
    updateMany?: EventUpdateManyWithWhereWithoutTownHallInput | EventUpdateManyWithWhereWithoutTownHallInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutTownHallNestedInput = {
    create?: XOR<AlertCreateWithoutTownHallInput, AlertUncheckedCreateWithoutTownHallInput> | AlertCreateWithoutTownHallInput[] | AlertUncheckedCreateWithoutTownHallInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTownHallInput | AlertCreateOrConnectWithoutTownHallInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutTownHallInput | AlertUpsertWithWhereUniqueWithoutTownHallInput[]
    createMany?: AlertCreateManyTownHallInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutTownHallInput | AlertUpdateWithWhereUniqueWithoutTownHallInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutTownHallInput | AlertUpdateManyWithWhereWithoutTownHallInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type ArtisanCreatecategoriesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutArtisanInput = {
    create?: XOR<UserCreateWithoutArtisanInput, UserUncheckedCreateWithoutArtisanInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtisanInput
    connect?: UserWhereUniqueInput
  }

  export type EventParticipantCreateNestedManyWithoutArtisanInput = {
    create?: XOR<EventParticipantCreateWithoutArtisanInput, EventParticipantUncheckedCreateWithoutArtisanInput> | EventParticipantCreateWithoutArtisanInput[] | EventParticipantUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutArtisanInput | EventParticipantCreateOrConnectWithoutArtisanInput[]
    createMany?: EventParticipantCreateManyArtisanInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type UserFollowCreateNestedManyWithoutArtisanInput = {
    create?: XOR<UserFollowCreateWithoutArtisanInput, UserFollowUncheckedCreateWithoutArtisanInput> | UserFollowCreateWithoutArtisanInput[] | UserFollowUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutArtisanInput | UserFollowCreateOrConnectWithoutArtisanInput[]
    createMany?: UserFollowCreateManyArtisanInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutArtisanInput = {
    create?: XOR<EventParticipantCreateWithoutArtisanInput, EventParticipantUncheckedCreateWithoutArtisanInput> | EventParticipantCreateWithoutArtisanInput[] | EventParticipantUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutArtisanInput | EventParticipantCreateOrConnectWithoutArtisanInput[]
    createMany?: EventParticipantCreateManyArtisanInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type UserFollowUncheckedCreateNestedManyWithoutArtisanInput = {
    create?: XOR<UserFollowCreateWithoutArtisanInput, UserFollowUncheckedCreateWithoutArtisanInput> | UserFollowCreateWithoutArtisanInput[] | UserFollowUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutArtisanInput | UserFollowCreateOrConnectWithoutArtisanInput[]
    createMany?: UserFollowCreateManyArtisanInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type ArtisanUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutArtisanNestedInput = {
    create?: XOR<UserCreateWithoutArtisanInput, UserUncheckedCreateWithoutArtisanInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtisanInput
    upsert?: UserUpsertWithoutArtisanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArtisanInput, UserUpdateWithoutArtisanInput>, UserUncheckedUpdateWithoutArtisanInput>
  }

  export type EventParticipantUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<EventParticipantCreateWithoutArtisanInput, EventParticipantUncheckedCreateWithoutArtisanInput> | EventParticipantCreateWithoutArtisanInput[] | EventParticipantUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutArtisanInput | EventParticipantCreateOrConnectWithoutArtisanInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutArtisanInput | EventParticipantUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: EventParticipantCreateManyArtisanInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutArtisanInput | EventParticipantUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutArtisanInput | EventParticipantUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type UserFollowUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<UserFollowCreateWithoutArtisanInput, UserFollowUncheckedCreateWithoutArtisanInput> | UserFollowCreateWithoutArtisanInput[] | UserFollowUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutArtisanInput | UserFollowCreateOrConnectWithoutArtisanInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutArtisanInput | UserFollowUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: UserFollowCreateManyArtisanInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutArtisanInput | UserFollowUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutArtisanInput | UserFollowUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<EventParticipantCreateWithoutArtisanInput, EventParticipantUncheckedCreateWithoutArtisanInput> | EventParticipantCreateWithoutArtisanInput[] | EventParticipantUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutArtisanInput | EventParticipantCreateOrConnectWithoutArtisanInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutArtisanInput | EventParticipantUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: EventParticipantCreateManyArtisanInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutArtisanInput | EventParticipantUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutArtisanInput | EventParticipantUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type UserFollowUncheckedUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<UserFollowCreateWithoutArtisanInput, UserFollowUncheckedCreateWithoutArtisanInput> | UserFollowCreateWithoutArtisanInput[] | UserFollowUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutArtisanInput | UserFollowCreateOrConnectWithoutArtisanInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutArtisanInput | UserFollowUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: UserFollowCreateManyArtisanInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutArtisanInput | UserFollowUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutArtisanInput | UserFollowUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type EventCreatecategoriesInput = {
    set: string[]
  }

  export type TownHallCreateNestedOneWithoutEventsInput = {
    create?: XOR<TownHallCreateWithoutEventsInput, TownHallUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TownHallCreateOrConnectWithoutEventsInput
    connect?: TownHallWhereUniqueInput
  }

  export type EventParticipantCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type EventAttendeeCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type VenueMapCreateNestedOneWithoutEventInput = {
    create?: XOR<VenueMapCreateWithoutEventInput, VenueMapUncheckedCreateWithoutEventInput>
    connectOrCreate?: VenueMapCreateOrConnectWithoutEventInput
    connect?: VenueMapWhereUniqueInput
  }

  export type AlertCreateNestedManyWithoutEventInput = {
    create?: XOR<AlertCreateWithoutEventInput, AlertUncheckedCreateWithoutEventInput> | AlertCreateWithoutEventInput[] | AlertUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutEventInput | AlertCreateOrConnectWithoutEventInput[]
    createMany?: AlertCreateManyEventInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type UserFollowCreateNestedManyWithoutEventInput = {
    create?: XOR<UserFollowCreateWithoutEventInput, UserFollowUncheckedCreateWithoutEventInput> | UserFollowCreateWithoutEventInput[] | UserFollowUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutEventInput | UserFollowCreateOrConnectWithoutEventInput[]
    createMany?: UserFollowCreateManyEventInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type EventAttendeeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type VenueMapUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<VenueMapCreateWithoutEventInput, VenueMapUncheckedCreateWithoutEventInput>
    connectOrCreate?: VenueMapCreateOrConnectWithoutEventInput
    connect?: VenueMapWhereUniqueInput
  }

  export type AlertUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<AlertCreateWithoutEventInput, AlertUncheckedCreateWithoutEventInput> | AlertCreateWithoutEventInput[] | AlertUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutEventInput | AlertCreateOrConnectWithoutEventInput[]
    createMany?: AlertCreateManyEventInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type UserFollowUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<UserFollowCreateWithoutEventInput, UserFollowUncheckedCreateWithoutEventInput> | UserFollowCreateWithoutEventInput[] | UserFollowUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutEventInput | UserFollowCreateOrConnectWithoutEventInput[]
    createMany?: UserFollowCreateManyEventInputEnvelope
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type EventUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TownHallUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<TownHallCreateWithoutEventsInput, TownHallUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TownHallCreateOrConnectWithoutEventsInput
    upsert?: TownHallUpsertWithoutEventsInput
    connect?: TownHallWhereUniqueInput
    update?: XOR<XOR<TownHallUpdateToOneWithWhereWithoutEventsInput, TownHallUpdateWithoutEventsInput>, TownHallUncheckedUpdateWithoutEventsInput>
  }

  export type EventParticipantUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type EventAttendeeUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type VenueMapUpdateOneWithoutEventNestedInput = {
    create?: XOR<VenueMapCreateWithoutEventInput, VenueMapUncheckedCreateWithoutEventInput>
    connectOrCreate?: VenueMapCreateOrConnectWithoutEventInput
    upsert?: VenueMapUpsertWithoutEventInput
    disconnect?: VenueMapWhereInput | boolean
    delete?: VenueMapWhereInput | boolean
    connect?: VenueMapWhereUniqueInput
    update?: XOR<XOR<VenueMapUpdateToOneWithWhereWithoutEventInput, VenueMapUpdateWithoutEventInput>, VenueMapUncheckedUpdateWithoutEventInput>
  }

  export type AlertUpdateManyWithoutEventNestedInput = {
    create?: XOR<AlertCreateWithoutEventInput, AlertUncheckedCreateWithoutEventInput> | AlertCreateWithoutEventInput[] | AlertUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutEventInput | AlertCreateOrConnectWithoutEventInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutEventInput | AlertUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: AlertCreateManyEventInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutEventInput | AlertUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutEventInput | AlertUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type UserFollowUpdateManyWithoutEventNestedInput = {
    create?: XOR<UserFollowCreateWithoutEventInput, UserFollowUncheckedCreateWithoutEventInput> | UserFollowCreateWithoutEventInput[] | UserFollowUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutEventInput | UserFollowCreateOrConnectWithoutEventInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutEventInput | UserFollowUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: UserFollowCreateManyEventInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutEventInput | UserFollowUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutEventInput | UserFollowUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type VenueMapUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<VenueMapCreateWithoutEventInput, VenueMapUncheckedCreateWithoutEventInput>
    connectOrCreate?: VenueMapCreateOrConnectWithoutEventInput
    upsert?: VenueMapUpsertWithoutEventInput
    disconnect?: VenueMapWhereInput | boolean
    delete?: VenueMapWhereInput | boolean
    connect?: VenueMapWhereUniqueInput
    update?: XOR<XOR<VenueMapUpdateToOneWithWhereWithoutEventInput, VenueMapUpdateWithoutEventInput>, VenueMapUncheckedUpdateWithoutEventInput>
  }

  export type AlertUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<AlertCreateWithoutEventInput, AlertUncheckedCreateWithoutEventInput> | AlertCreateWithoutEventInput[] | AlertUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutEventInput | AlertCreateOrConnectWithoutEventInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutEventInput | AlertUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: AlertCreateManyEventInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutEventInput | AlertUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutEventInput | AlertUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type UserFollowUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<UserFollowCreateWithoutEventInput, UserFollowUncheckedCreateWithoutEventInput> | UserFollowCreateWithoutEventInput[] | UserFollowUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserFollowCreateOrConnectWithoutEventInput | UserFollowCreateOrConnectWithoutEventInput[]
    upsert?: UserFollowUpsertWithWhereUniqueWithoutEventInput | UserFollowUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: UserFollowCreateManyEventInputEnvelope
    set?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    disconnect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    delete?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    connect?: UserFollowWhereUniqueInput | UserFollowWhereUniqueInput[]
    update?: UserFollowUpdateWithWhereUniqueWithoutEventInput | UserFollowUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: UserFollowUpdateManyWithWhereWithoutEventInput | UserFollowUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput
    connect?: EventWhereUniqueInput
  }

  export type ArtisanCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ArtisanCreateWithoutParticipantsInput, ArtisanUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutParticipantsInput
    connect?: ArtisanWhereUniqueInput
  }

  export type EventProductCreateNestedManyWithoutParticipantInput = {
    create?: XOR<EventProductCreateWithoutParticipantInput, EventProductUncheckedCreateWithoutParticipantInput> | EventProductCreateWithoutParticipantInput[] | EventProductUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: EventProductCreateOrConnectWithoutParticipantInput | EventProductCreateOrConnectWithoutParticipantInput[]
    createMany?: EventProductCreateManyParticipantInputEnvelope
    connect?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
  }

  export type EventProductUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<EventProductCreateWithoutParticipantInput, EventProductUncheckedCreateWithoutParticipantInput> | EventProductCreateWithoutParticipantInput[] | EventProductUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: EventProductCreateOrConnectWithoutParticipantInput | EventProductCreateOrConnectWithoutParticipantInput[]
    createMany?: EventProductCreateManyParticipantInputEnvelope
    connect?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
  }

  export type EnumParticipantStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput
    upsert?: EventUpsertWithoutParticipantsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutParticipantsInput, EventUpdateWithoutParticipantsInput>, EventUncheckedUpdateWithoutParticipantsInput>
  }

  export type ArtisanUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ArtisanCreateWithoutParticipantsInput, ArtisanUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutParticipantsInput
    upsert?: ArtisanUpsertWithoutParticipantsInput
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutParticipantsInput, ArtisanUpdateWithoutParticipantsInput>, ArtisanUncheckedUpdateWithoutParticipantsInput>
  }

  export type EventProductUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<EventProductCreateWithoutParticipantInput, EventProductUncheckedCreateWithoutParticipantInput> | EventProductCreateWithoutParticipantInput[] | EventProductUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: EventProductCreateOrConnectWithoutParticipantInput | EventProductCreateOrConnectWithoutParticipantInput[]
    upsert?: EventProductUpsertWithWhereUniqueWithoutParticipantInput | EventProductUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: EventProductCreateManyParticipantInputEnvelope
    set?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
    disconnect?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
    delete?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
    connect?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
    update?: EventProductUpdateWithWhereUniqueWithoutParticipantInput | EventProductUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: EventProductUpdateManyWithWhereWithoutParticipantInput | EventProductUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: EventProductScalarWhereInput | EventProductScalarWhereInput[]
  }

  export type EventProductUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<EventProductCreateWithoutParticipantInput, EventProductUncheckedCreateWithoutParticipantInput> | EventProductCreateWithoutParticipantInput[] | EventProductUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: EventProductCreateOrConnectWithoutParticipantInput | EventProductCreateOrConnectWithoutParticipantInput[]
    upsert?: EventProductUpsertWithWhereUniqueWithoutParticipantInput | EventProductUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: EventProductCreateManyParticipantInputEnvelope
    set?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
    disconnect?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
    delete?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
    connect?: EventProductWhereUniqueInput | EventProductWhereUniqueInput[]
    update?: EventProductUpdateWithWhereUniqueWithoutParticipantInput | EventProductUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: EventProductUpdateManyWithWhereWithoutParticipantInput | EventProductUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: EventProductScalarWhereInput | EventProductScalarWhereInput[]
  }

  export type EventParticipantCreateNestedOneWithoutProductsInput = {
    create?: XOR<EventParticipantCreateWithoutProductsInput, EventParticipantUncheckedCreateWithoutProductsInput>
    connectOrCreate?: EventParticipantCreateOrConnectWithoutProductsInput
    connect?: EventParticipantWhereUniqueInput
  }

  export type EventParticipantUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<EventParticipantCreateWithoutProductsInput, EventParticipantUncheckedCreateWithoutProductsInput>
    connectOrCreate?: EventParticipantCreateOrConnectWithoutProductsInput
    upsert?: EventParticipantUpsertWithoutProductsInput
    connect?: EventParticipantWhereUniqueInput
    update?: XOR<XOR<EventParticipantUpdateToOneWithWhereWithoutProductsInput, EventParticipantUpdateWithoutProductsInput>, EventParticipantUncheckedUpdateWithoutProductsInput>
  }

  export type EventCreateNestedOneWithoutVenueMapInput = {
    create?: XOR<EventCreateWithoutVenueMapInput, EventUncheckedCreateWithoutVenueMapInput>
    connectOrCreate?: EventCreateOrConnectWithoutVenueMapInput
    connect?: EventWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutVenueMapNestedInput = {
    create?: XOR<EventCreateWithoutVenueMapInput, EventUncheckedCreateWithoutVenueMapInput>
    connectOrCreate?: EventCreateOrConnectWithoutVenueMapInput
    upsert?: EventUpsertWithoutVenueMapInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutVenueMapInput, EventUpdateWithoutVenueMapInput>, EventUncheckedUpdateWithoutVenueMapInput>
  }

  export type EventCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAttendeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendeeStatus
  }

  export type EventUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    upsert?: EventUpsertWithoutAttendeesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutAttendeesInput, EventUpdateWithoutAttendeesInput>, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type UserUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    upsert?: UserUpsertWithoutAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendancesInput, UserUpdateWithoutAttendancesInput>, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserCreateNestedOneWithoutFollowsInput = {
    create?: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowsInput
    connect?: UserWhereUniqueInput
  }

  export type ArtisanCreateNestedOneWithoutFollowersInput = {
    create?: XOR<ArtisanCreateWithoutFollowersInput, ArtisanUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutFollowersInput
    connect?: ArtisanWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutFollowsInput = {
    create?: XOR<EventCreateWithoutFollowsInput, EventUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFollowsInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowsNestedInput = {
    create?: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowsInput
    upsert?: UserUpsertWithoutFollowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowsInput, UserUpdateWithoutFollowsInput>, UserUncheckedUpdateWithoutFollowsInput>
  }

  export type ArtisanUpdateOneWithoutFollowersNestedInput = {
    create?: XOR<ArtisanCreateWithoutFollowersInput, ArtisanUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutFollowersInput
    upsert?: ArtisanUpsertWithoutFollowersInput
    disconnect?: ArtisanWhereInput | boolean
    delete?: ArtisanWhereInput | boolean
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutFollowersInput, ArtisanUpdateWithoutFollowersInput>, ArtisanUncheckedUpdateWithoutFollowersInput>
  }

  export type EventUpdateOneWithoutFollowsNestedInput = {
    create?: XOR<EventCreateWithoutFollowsInput, EventUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFollowsInput
    upsert?: EventUpsertWithoutFollowsInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFollowsInput, EventUpdateWithoutFollowsInput>, EventUncheckedUpdateWithoutFollowsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type EventCreateNestedOneWithoutAlertsInput = {
    create?: XOR<EventCreateWithoutAlertsInput, EventUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: EventCreateOrConnectWithoutAlertsInput
    connect?: EventWhereUniqueInput
  }

  export type TownHallCreateNestedOneWithoutAlertsInput = {
    create?: XOR<TownHallCreateWithoutAlertsInput, TownHallUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: TownHallCreateOrConnectWithoutAlertsInput
    connect?: TownHallWhereUniqueInput
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type EventUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<EventCreateWithoutAlertsInput, EventUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: EventCreateOrConnectWithoutAlertsInput
    upsert?: EventUpsertWithoutAlertsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutAlertsInput, EventUpdateWithoutAlertsInput>, EventUncheckedUpdateWithoutAlertsInput>
  }

  export type TownHallUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<TownHallCreateWithoutAlertsInput, TownHallUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: TownHallCreateOrConnectWithoutAlertsInput
    upsert?: TownHallUpsertWithoutAlertsInput
    connect?: TownHallWhereUniqueInput
    update?: XOR<XOR<TownHallUpdateToOneWithWhereWithoutAlertsInput, TownHallUpdateWithoutAlertsInput>, TownHallUncheckedUpdateWithoutAlertsInput>
  }

  export type UserPreferencesCreatefavoriteCategoriesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserPreferencesUpdatefavoriteCategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAttendeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendeeStatus | EnumAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendeeStatusFilter<$PrismaModel> | $Enums.AttendeeStatus
  }

  export type NestedEnumAttendeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendeeStatus | EnumAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendeeStatus[] | ListEnumAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendeeStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendeeStatusFilter<$PrismaModel>
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    displayName: string
    avatarUrl?: string | null
    bio?: string | null
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    displayName: string
    avatarUrl?: string | null
    bio?: string | null
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type TownHallCreateWithoutUserInput = {
    id?: string
    name: string
    municipality: string
    province: string
    logoUrl?: string | null
    verified?: boolean
    events?: EventCreateNestedManyWithoutTownHallInput
    alerts?: AlertCreateNestedManyWithoutTownHallInput
  }

  export type TownHallUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    municipality: string
    province: string
    logoUrl?: string | null
    verified?: boolean
    events?: EventUncheckedCreateNestedManyWithoutTownHallInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTownHallInput
  }

  export type TownHallCreateOrConnectWithoutUserInput = {
    where: TownHallWhereUniqueInput
    create: XOR<TownHallCreateWithoutUserInput, TownHallUncheckedCreateWithoutUserInput>
  }

  export type ArtisanCreateWithoutUserInput = {
    id?: string
    businessName: string
    description?: string | null
    categories?: ArtisanCreatecategoriesInput | string[]
    km0Certified?: boolean
    verifiedById?: string | null
    logoUrl?: string | null
    websiteUrl?: string | null
    participants?: EventParticipantCreateNestedManyWithoutArtisanInput
    followers?: UserFollowCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutUserInput = {
    id?: string
    businessName: string
    description?: string | null
    categories?: ArtisanCreatecategoriesInput | string[]
    km0Certified?: boolean
    verifiedById?: string | null
    logoUrl?: string | null
    websiteUrl?: string | null
    participants?: EventParticipantUncheckedCreateNestedManyWithoutArtisanInput
    followers?: UserFollowUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutUserInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
  }

  export type EventAttendeeCreateWithoutUserInput = {
    id?: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutAttendeesInput
  }

  export type EventAttendeeUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
  }

  export type EventAttendeeCreateOrConnectWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    create: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput>
  }

  export type EventAttendeeCreateManyUserInputEnvelope = {
    data: EventAttendeeCreateManyUserInput | EventAttendeeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFollowCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    artisan?: ArtisanCreateNestedOneWithoutFollowersInput
    event?: EventCreateNestedOneWithoutFollowsInput
  }

  export type UserFollowUncheckedCreateWithoutUserInput = {
    id?: string
    artisanId?: string | null
    eventId?: string | null
    createdAt?: Date | string
  }

  export type UserFollowCreateOrConnectWithoutUserInput = {
    where: UserFollowWhereUniqueInput
    create: XOR<UserFollowCreateWithoutUserInput, UserFollowUncheckedCreateWithoutUserInput>
  }

  export type UserFollowCreateManyUserInputEnvelope = {
    data: UserFollowCreateManyUserInput | UserFollowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    favoriteCategories?: UserPreferencesCreatefavoriteCategoriesInput | string[]
    maxDistanceKm?: number | null
    language?: string
    pushEnabled?: boolean
    emailAlerts?: boolean
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    favoriteCategories?: UserPreferencesCreatefavoriteCategoriesInput | string[]
    maxDistanceKm?: number | null
    language?: string
    pushEnabled?: boolean
    emailAlerts?: boolean
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateWithoutRecipientInput = {
    id?: string
    type: string
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutRecipientInput = {
    id?: string
    type: string
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutRecipientInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput>
  }

  export type NotificationCreateManyRecipientInputEnvelope = {
    data: NotificationCreateManyRecipientInput | NotificationCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TownHallUpsertWithoutUserInput = {
    update: XOR<TownHallUpdateWithoutUserInput, TownHallUncheckedUpdateWithoutUserInput>
    create: XOR<TownHallCreateWithoutUserInput, TownHallUncheckedCreateWithoutUserInput>
    where?: TownHallWhereInput
  }

  export type TownHallUpdateToOneWithWhereWithoutUserInput = {
    where?: TownHallWhereInput
    data: XOR<TownHallUpdateWithoutUserInput, TownHallUncheckedUpdateWithoutUserInput>
  }

  export type TownHallUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    events?: EventUpdateManyWithoutTownHallNestedInput
    alerts?: AlertUpdateManyWithoutTownHallNestedInput
  }

  export type TownHallUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    events?: EventUncheckedUpdateManyWithoutTownHallNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTownHallNestedInput
  }

  export type ArtisanUpsertWithoutUserInput = {
    update: XOR<ArtisanUpdateWithoutUserInput, ArtisanUncheckedUpdateWithoutUserInput>
    create: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutUserInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutUserInput, ArtisanUncheckedUpdateWithoutUserInput>
  }

  export type ArtisanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: EventParticipantUpdateManyWithoutArtisanNestedInput
    followers?: UserFollowUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: EventParticipantUncheckedUpdateManyWithoutArtisanNestedInput
    followers?: UserFollowUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type EventAttendeeUpsertWithWhereUniqueWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    update: XOR<EventAttendeeUpdateWithoutUserInput, EventAttendeeUncheckedUpdateWithoutUserInput>
    create: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput>
  }

  export type EventAttendeeUpdateWithWhereUniqueWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    data: XOR<EventAttendeeUpdateWithoutUserInput, EventAttendeeUncheckedUpdateWithoutUserInput>
  }

  export type EventAttendeeUpdateManyWithWhereWithoutUserInput = {
    where: EventAttendeeScalarWhereInput
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyWithoutUserInput>
  }

  export type EventAttendeeScalarWhereInput = {
    AND?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    OR?: EventAttendeeScalarWhereInput[]
    NOT?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    id?: StringFilter<"EventAttendee"> | string
    eventId?: StringFilter<"EventAttendee"> | string
    userId?: StringFilter<"EventAttendee"> | string
    status?: EnumAttendeeStatusFilter<"EventAttendee"> | $Enums.AttendeeStatus
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
  }

  export type UserFollowUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFollowWhereUniqueInput
    update: XOR<UserFollowUpdateWithoutUserInput, UserFollowUncheckedUpdateWithoutUserInput>
    create: XOR<UserFollowCreateWithoutUserInput, UserFollowUncheckedCreateWithoutUserInput>
  }

  export type UserFollowUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFollowWhereUniqueInput
    data: XOR<UserFollowUpdateWithoutUserInput, UserFollowUncheckedUpdateWithoutUserInput>
  }

  export type UserFollowUpdateManyWithWhereWithoutUserInput = {
    where: UserFollowScalarWhereInput
    data: XOR<UserFollowUpdateManyMutationInput, UserFollowUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFollowScalarWhereInput = {
    AND?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
    OR?: UserFollowScalarWhereInput[]
    NOT?: UserFollowScalarWhereInput | UserFollowScalarWhereInput[]
    id?: StringFilter<"UserFollow"> | string
    userId?: StringFilter<"UserFollow"> | string
    artisanId?: StringNullableFilter<"UserFollow"> | string | null
    eventId?: StringNullableFilter<"UserFollow"> | string | null
    createdAt?: DateTimeFilter<"UserFollow"> | Date | string
  }

  export type UserPreferencesUpsertWithoutUserInput = {
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    favoriteCategories?: UserPreferencesUpdatefavoriteCategoriesInput | string[]
    maxDistanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailAlerts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    favoriteCategories?: UserPreferencesUpdatefavoriteCategoriesInput | string[]
    maxDistanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    emailAlerts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutRecipientInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutRecipientInput, NotificationUncheckedUpdateWithoutRecipientInput>
    create: XOR<NotificationCreateWithoutRecipientInput, NotificationUncheckedCreateWithoutRecipientInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutRecipientInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutRecipientInput, NotificationUncheckedUpdateWithoutRecipientInput>
  }

  export type NotificationUpdateManyWithWhereWithoutRecipientInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutRecipientInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    recipientId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    townHall?: TownHallCreateNestedOneWithoutUserInput
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeCreateNestedManyWithoutUserInput
    follows?: UserFollowCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    townHall?: TownHallUncheckedCreateNestedOneWithoutUserInput
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townHall?: TownHallUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUpdateManyWithoutUserNestedInput
    follows?: UserFollowUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townHall?: TownHallUncheckedUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateWithoutTownHallInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeCreateNestedManyWithoutUserInput
    follows?: UserFollowCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutTownHallInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutTownHallInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTownHallInput, UserUncheckedCreateWithoutTownHallInput>
  }

  export type EventCreateWithoutTownHallInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
    venueMap?: VenueMapCreateNestedOneWithoutEventInput
    alerts?: AlertCreateNestedManyWithoutEventInput
    follows?: UserFollowCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTownHallInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    venueMap?: VenueMapUncheckedCreateNestedOneWithoutEventInput
    alerts?: AlertUncheckedCreateNestedManyWithoutEventInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTownHallInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTownHallInput, EventUncheckedCreateWithoutTownHallInput>
  }

  export type EventCreateManyTownHallInputEnvelope = {
    data: EventCreateManyTownHallInput | EventCreateManyTownHallInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutTownHallInput = {
    id?: string
    type: $Enums.AlertType
    title: string
    message: string
    severity?: number
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutTownHallInput = {
    id?: string
    eventId: string
    type: $Enums.AlertType
    title: string
    message: string
    severity?: number
    createdAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutTownHallInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutTownHallInput, AlertUncheckedCreateWithoutTownHallInput>
  }

  export type AlertCreateManyTownHallInputEnvelope = {
    data: AlertCreateManyTownHallInput | AlertCreateManyTownHallInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTownHallInput = {
    update: XOR<UserUpdateWithoutTownHallInput, UserUncheckedUpdateWithoutTownHallInput>
    create: XOR<UserCreateWithoutTownHallInput, UserUncheckedCreateWithoutTownHallInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTownHallInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTownHallInput, UserUncheckedUpdateWithoutTownHallInput>
  }

  export type UserUpdateWithoutTownHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUpdateManyWithoutUserNestedInput
    follows?: UserFollowUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutTownHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutTownHallInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutTownHallInput, EventUncheckedUpdateWithoutTownHallInput>
    create: XOR<EventCreateWithoutTownHallInput, EventUncheckedCreateWithoutTownHallInput>
  }

  export type EventUpdateWithWhereUniqueWithoutTownHallInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutTownHallInput, EventUncheckedUpdateWithoutTownHallInput>
  }

  export type EventUpdateManyWithWhereWithoutTownHallInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutTownHallInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    townHallId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    locationLat?: FloatFilter<"Event"> | number
    locationLng?: FloatFilter<"Event"> | number
    locationAddr?: StringFilter<"Event"> | string
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    categories?: StringNullableListFilter<"Event">
    coverImageUrl?: StringNullableFilter<"Event"> | string | null
    maxAttendees?: IntNullableFilter<"Event"> | number | null
    isTemplate?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutTownHallInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutTownHallInput, AlertUncheckedUpdateWithoutTownHallInput>
    create: XOR<AlertCreateWithoutTownHallInput, AlertUncheckedCreateWithoutTownHallInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutTownHallInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutTownHallInput, AlertUncheckedUpdateWithoutTownHallInput>
  }

  export type AlertUpdateManyWithWhereWithoutTownHallInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutTownHallInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    eventId?: StringFilter<"Alert"> | string
    townHallId?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    severity?: IntFilter<"Alert"> | number
    createdAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type UserCreateWithoutArtisanInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    townHall?: TownHallCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeCreateNestedManyWithoutUserInput
    follows?: UserFollowCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutArtisanInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    townHall?: TownHallUncheckedCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutArtisanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArtisanInput, UserUncheckedCreateWithoutArtisanInput>
  }

  export type EventParticipantCreateWithoutArtisanInput = {
    id?: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutParticipantsInput
    products?: EventProductCreateNestedManyWithoutParticipantInput
  }

  export type EventParticipantUncheckedCreateWithoutArtisanInput = {
    id?: string
    eventId: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    products?: EventProductUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type EventParticipantCreateOrConnectWithoutArtisanInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutArtisanInput, EventParticipantUncheckedCreateWithoutArtisanInput>
  }

  export type EventParticipantCreateManyArtisanInputEnvelope = {
    data: EventParticipantCreateManyArtisanInput | EventParticipantCreateManyArtisanInput[]
    skipDuplicates?: boolean
  }

  export type UserFollowCreateWithoutArtisanInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFollowsInput
    event?: EventCreateNestedOneWithoutFollowsInput
  }

  export type UserFollowUncheckedCreateWithoutArtisanInput = {
    id?: string
    userId: string
    eventId?: string | null
    createdAt?: Date | string
  }

  export type UserFollowCreateOrConnectWithoutArtisanInput = {
    where: UserFollowWhereUniqueInput
    create: XOR<UserFollowCreateWithoutArtisanInput, UserFollowUncheckedCreateWithoutArtisanInput>
  }

  export type UserFollowCreateManyArtisanInputEnvelope = {
    data: UserFollowCreateManyArtisanInput | UserFollowCreateManyArtisanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArtisanInput = {
    update: XOR<UserUpdateWithoutArtisanInput, UserUncheckedUpdateWithoutArtisanInput>
    create: XOR<UserCreateWithoutArtisanInput, UserUncheckedCreateWithoutArtisanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArtisanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArtisanInput, UserUncheckedUpdateWithoutArtisanInput>
  }

  export type UserUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    townHall?: TownHallUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUpdateManyWithoutUserNestedInput
    follows?: UserFollowUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    townHall?: TownHallUncheckedUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutArtisanInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutArtisanInput, EventParticipantUncheckedUpdateWithoutArtisanInput>
    create: XOR<EventParticipantCreateWithoutArtisanInput, EventParticipantUncheckedCreateWithoutArtisanInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutArtisanInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutArtisanInput, EventParticipantUncheckedUpdateWithoutArtisanInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutArtisanInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutArtisanInput>
  }

  export type EventParticipantScalarWhereInput = {
    AND?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    OR?: EventParticipantScalarWhereInput[]
    NOT?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    id?: StringFilter<"EventParticipant"> | string
    eventId?: StringFilter<"EventParticipant"> | string
    artisanId?: StringFilter<"EventParticipant"> | string
    status?: EnumParticipantStatusFilter<"EventParticipant"> | $Enums.ParticipantStatus
    boothCode?: StringNullableFilter<"EventParticipant"> | string | null
    positionX?: FloatNullableFilter<"EventParticipant"> | number | null
    positionY?: FloatNullableFilter<"EventParticipant"> | number | null
    createdAt?: DateTimeFilter<"EventParticipant"> | Date | string
  }

  export type UserFollowUpsertWithWhereUniqueWithoutArtisanInput = {
    where: UserFollowWhereUniqueInput
    update: XOR<UserFollowUpdateWithoutArtisanInput, UserFollowUncheckedUpdateWithoutArtisanInput>
    create: XOR<UserFollowCreateWithoutArtisanInput, UserFollowUncheckedCreateWithoutArtisanInput>
  }

  export type UserFollowUpdateWithWhereUniqueWithoutArtisanInput = {
    where: UserFollowWhereUniqueInput
    data: XOR<UserFollowUpdateWithoutArtisanInput, UserFollowUncheckedUpdateWithoutArtisanInput>
  }

  export type UserFollowUpdateManyWithWhereWithoutArtisanInput = {
    where: UserFollowScalarWhereInput
    data: XOR<UserFollowUpdateManyMutationInput, UserFollowUncheckedUpdateManyWithoutArtisanInput>
  }

  export type TownHallCreateWithoutEventsInput = {
    id?: string
    name: string
    municipality: string
    province: string
    logoUrl?: string | null
    verified?: boolean
    user: UserCreateNestedOneWithoutTownHallInput
    alerts?: AlertCreateNestedManyWithoutTownHallInput
  }

  export type TownHallUncheckedCreateWithoutEventsInput = {
    id?: string
    userId: string
    name: string
    municipality: string
    province: string
    logoUrl?: string | null
    verified?: boolean
    alerts?: AlertUncheckedCreateNestedManyWithoutTownHallInput
  }

  export type TownHallCreateOrConnectWithoutEventsInput = {
    where: TownHallWhereUniqueInput
    create: XOR<TownHallCreateWithoutEventsInput, TownHallUncheckedCreateWithoutEventsInput>
  }

  export type EventParticipantCreateWithoutEventInput = {
    id?: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    artisan: ArtisanCreateNestedOneWithoutParticipantsInput
    products?: EventProductCreateNestedManyWithoutParticipantInput
  }

  export type EventParticipantUncheckedCreateWithoutEventInput = {
    id?: string
    artisanId: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    products?: EventProductUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type EventParticipantCreateOrConnectWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantCreateManyEventInputEnvelope = {
    data: EventParticipantCreateManyEventInput | EventParticipantCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventAttendeeCreateWithoutEventInput = {
    id?: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAttendancesInput
  }

  export type EventAttendeeUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
  }

  export type EventAttendeeCreateOrConnectWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeCreateManyEventInputEnvelope = {
    data: EventAttendeeCreateManyEventInput | EventAttendeeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type VenueMapCreateWithoutEventInput = {
    id?: string
    imageUrl: string
    widthPx: number
    heightPx: number
    zones?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VenueMapUncheckedCreateWithoutEventInput = {
    id?: string
    imageUrl: string
    widthPx: number
    heightPx: number
    zones?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VenueMapCreateOrConnectWithoutEventInput = {
    where: VenueMapWhereUniqueInput
    create: XOR<VenueMapCreateWithoutEventInput, VenueMapUncheckedCreateWithoutEventInput>
  }

  export type AlertCreateWithoutEventInput = {
    id?: string
    type: $Enums.AlertType
    title: string
    message: string
    severity?: number
    createdAt?: Date | string
    townHall: TownHallCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutEventInput = {
    id?: string
    townHallId: string
    type: $Enums.AlertType
    title: string
    message: string
    severity?: number
    createdAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutEventInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutEventInput, AlertUncheckedCreateWithoutEventInput>
  }

  export type AlertCreateManyEventInputEnvelope = {
    data: AlertCreateManyEventInput | AlertCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserFollowCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFollowsInput
    artisan?: ArtisanCreateNestedOneWithoutFollowersInput
  }

  export type UserFollowUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    artisanId?: string | null
    createdAt?: Date | string
  }

  export type UserFollowCreateOrConnectWithoutEventInput = {
    where: UserFollowWhereUniqueInput
    create: XOR<UserFollowCreateWithoutEventInput, UserFollowUncheckedCreateWithoutEventInput>
  }

  export type UserFollowCreateManyEventInputEnvelope = {
    data: UserFollowCreateManyEventInput | UserFollowCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TownHallUpsertWithoutEventsInput = {
    update: XOR<TownHallUpdateWithoutEventsInput, TownHallUncheckedUpdateWithoutEventsInput>
    create: XOR<TownHallCreateWithoutEventsInput, TownHallUncheckedCreateWithoutEventsInput>
    where?: TownHallWhereInput
  }

  export type TownHallUpdateToOneWithWhereWithoutEventsInput = {
    where?: TownHallWhereInput
    data: XOR<TownHallUpdateWithoutEventsInput, TownHallUncheckedUpdateWithoutEventsInput>
  }

  export type TownHallUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTownHallNestedInput
    alerts?: AlertUpdateManyWithoutTownHallNestedInput
  }

  export type TownHallUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    alerts?: AlertUncheckedUpdateManyWithoutTownHallNestedInput
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutEventInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutEventInput>
  }

  export type EventAttendeeUpsertWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    update: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeUpdateWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    data: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
  }

  export type EventAttendeeUpdateManyWithWhereWithoutEventInput = {
    where: EventAttendeeScalarWhereInput
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyWithoutEventInput>
  }

  export type VenueMapUpsertWithoutEventInput = {
    update: XOR<VenueMapUpdateWithoutEventInput, VenueMapUncheckedUpdateWithoutEventInput>
    create: XOR<VenueMapCreateWithoutEventInput, VenueMapUncheckedCreateWithoutEventInput>
    where?: VenueMapWhereInput
  }

  export type VenueMapUpdateToOneWithWhereWithoutEventInput = {
    where?: VenueMapWhereInput
    data: XOR<VenueMapUpdateWithoutEventInput, VenueMapUncheckedUpdateWithoutEventInput>
  }

  export type VenueMapUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VenueMapUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    widthPx?: IntFieldUpdateOperationsInput | number
    heightPx?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AlertUpsertWithWhereUniqueWithoutEventInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutEventInput, AlertUncheckedUpdateWithoutEventInput>
    create: XOR<AlertCreateWithoutEventInput, AlertUncheckedCreateWithoutEventInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutEventInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutEventInput, AlertUncheckedUpdateWithoutEventInput>
  }

  export type AlertUpdateManyWithWhereWithoutEventInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutEventInput>
  }

  export type UserFollowUpsertWithWhereUniqueWithoutEventInput = {
    where: UserFollowWhereUniqueInput
    update: XOR<UserFollowUpdateWithoutEventInput, UserFollowUncheckedUpdateWithoutEventInput>
    create: XOR<UserFollowCreateWithoutEventInput, UserFollowUncheckedCreateWithoutEventInput>
  }

  export type UserFollowUpdateWithWhereUniqueWithoutEventInput = {
    where: UserFollowWhereUniqueInput
    data: XOR<UserFollowUpdateWithoutEventInput, UserFollowUncheckedUpdateWithoutEventInput>
  }

  export type UserFollowUpdateManyWithWhereWithoutEventInput = {
    where: UserFollowScalarWhereInput
    data: XOR<UserFollowUpdateManyMutationInput, UserFollowUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutParticipantsInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    townHall: TownHallCreateNestedOneWithoutEventsInput
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
    venueMap?: VenueMapCreateNestedOneWithoutEventInput
    alerts?: AlertCreateNestedManyWithoutEventInput
    follows?: UserFollowCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutParticipantsInput = {
    id?: string
    townHallId: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    venueMap?: VenueMapUncheckedCreateNestedOneWithoutEventInput
    alerts?: AlertUncheckedCreateNestedManyWithoutEventInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutParticipantsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
  }

  export type ArtisanCreateWithoutParticipantsInput = {
    id?: string
    businessName: string
    description?: string | null
    categories?: ArtisanCreatecategoriesInput | string[]
    km0Certified?: boolean
    verifiedById?: string | null
    logoUrl?: string | null
    websiteUrl?: string | null
    user: UserCreateNestedOneWithoutArtisanInput
    followers?: UserFollowCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutParticipantsInput = {
    id?: string
    userId: string
    businessName: string
    description?: string | null
    categories?: ArtisanCreatecategoriesInput | string[]
    km0Certified?: boolean
    verifiedById?: string | null
    logoUrl?: string | null
    websiteUrl?: string | null
    followers?: UserFollowUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutParticipantsInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutParticipantsInput, ArtisanUncheckedCreateWithoutParticipantsInput>
  }

  export type EventProductCreateWithoutParticipantInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category: string
    km0Certified?: boolean
    imageUrl?: string | null
  }

  export type EventProductUncheckedCreateWithoutParticipantInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category: string
    km0Certified?: boolean
    imageUrl?: string | null
  }

  export type EventProductCreateOrConnectWithoutParticipantInput = {
    where: EventProductWhereUniqueInput
    create: XOR<EventProductCreateWithoutParticipantInput, EventProductUncheckedCreateWithoutParticipantInput>
  }

  export type EventProductCreateManyParticipantInputEnvelope = {
    data: EventProductCreateManyParticipantInput | EventProductCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutParticipantsInput = {
    update: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
  }

  export type EventUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townHall?: TownHallUpdateOneRequiredWithoutEventsNestedInput
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUpdateOneWithoutEventNestedInput
    alerts?: AlertUpdateManyWithoutEventNestedInput
    follows?: UserFollowUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUncheckedUpdateOneWithoutEventNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutEventNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutEventNestedInput
  }

  export type ArtisanUpsertWithoutParticipantsInput = {
    update: XOR<ArtisanUpdateWithoutParticipantsInput, ArtisanUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ArtisanCreateWithoutParticipantsInput, ArtisanUncheckedCreateWithoutParticipantsInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutParticipantsInput, ArtisanUncheckedUpdateWithoutParticipantsInput>
  }

  export type ArtisanUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutArtisanNestedInput
    followers?: UserFollowUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: UserFollowUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type EventProductUpsertWithWhereUniqueWithoutParticipantInput = {
    where: EventProductWhereUniqueInput
    update: XOR<EventProductUpdateWithoutParticipantInput, EventProductUncheckedUpdateWithoutParticipantInput>
    create: XOR<EventProductCreateWithoutParticipantInput, EventProductUncheckedCreateWithoutParticipantInput>
  }

  export type EventProductUpdateWithWhereUniqueWithoutParticipantInput = {
    where: EventProductWhereUniqueInput
    data: XOR<EventProductUpdateWithoutParticipantInput, EventProductUncheckedUpdateWithoutParticipantInput>
  }

  export type EventProductUpdateManyWithWhereWithoutParticipantInput = {
    where: EventProductScalarWhereInput
    data: XOR<EventProductUpdateManyMutationInput, EventProductUncheckedUpdateManyWithoutParticipantInput>
  }

  export type EventProductScalarWhereInput = {
    AND?: EventProductScalarWhereInput | EventProductScalarWhereInput[]
    OR?: EventProductScalarWhereInput[]
    NOT?: EventProductScalarWhereInput | EventProductScalarWhereInput[]
    id?: StringFilter<"EventProduct"> | string
    participantId?: StringFilter<"EventProduct"> | string
    name?: StringFilter<"EventProduct"> | string
    description?: StringNullableFilter<"EventProduct"> | string | null
    price?: FloatNullableFilter<"EventProduct"> | number | null
    category?: StringFilter<"EventProduct"> | string
    km0Certified?: BoolFilter<"EventProduct"> | boolean
    imageUrl?: StringNullableFilter<"EventProduct"> | string | null
  }

  export type EventParticipantCreateWithoutProductsInput = {
    id?: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutParticipantsInput
    artisan: ArtisanCreateNestedOneWithoutParticipantsInput
  }

  export type EventParticipantUncheckedCreateWithoutProductsInput = {
    id?: string
    eventId: string
    artisanId: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
  }

  export type EventParticipantCreateOrConnectWithoutProductsInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutProductsInput, EventParticipantUncheckedCreateWithoutProductsInput>
  }

  export type EventParticipantUpsertWithoutProductsInput = {
    update: XOR<EventParticipantUpdateWithoutProductsInput, EventParticipantUncheckedUpdateWithoutProductsInput>
    create: XOR<EventParticipantCreateWithoutProductsInput, EventParticipantUncheckedCreateWithoutProductsInput>
    where?: EventParticipantWhereInput
  }

  export type EventParticipantUpdateToOneWithWhereWithoutProductsInput = {
    where?: EventParticipantWhereInput
    data: XOR<EventParticipantUpdateWithoutProductsInput, EventParticipantUncheckedUpdateWithoutProductsInput>
  }

  export type EventParticipantUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateWithoutVenueMapInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    townHall: TownHallCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
    alerts?: AlertCreateNestedManyWithoutEventInput
    follows?: UserFollowCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVenueMapInput = {
    id?: string
    townHallId: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    alerts?: AlertUncheckedCreateNestedManyWithoutEventInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVenueMapInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVenueMapInput, EventUncheckedCreateWithoutVenueMapInput>
  }

  export type EventUpsertWithoutVenueMapInput = {
    update: XOR<EventUpdateWithoutVenueMapInput, EventUncheckedUpdateWithoutVenueMapInput>
    create: XOR<EventCreateWithoutVenueMapInput, EventUncheckedCreateWithoutVenueMapInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutVenueMapInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutVenueMapInput, EventUncheckedUpdateWithoutVenueMapInput>
  }

  export type EventUpdateWithoutVenueMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townHall?: TownHallUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
    alerts?: AlertUpdateManyWithoutEventNestedInput
    follows?: UserFollowUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVenueMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutEventNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutAttendeesInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    townHall: TownHallCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    venueMap?: VenueMapCreateNestedOneWithoutEventInput
    alerts?: AlertCreateNestedManyWithoutEventInput
    follows?: UserFollowCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutAttendeesInput = {
    id?: string
    townHallId: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    venueMap?: VenueMapUncheckedCreateNestedOneWithoutEventInput
    alerts?: AlertUncheckedCreateNestedManyWithoutEventInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutAttendeesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
  }

  export type UserCreateWithoutAttendancesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    townHall?: TownHallCreateNestedOneWithoutUserInput
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    follows?: UserFollowCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutAttendancesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    townHall?: TownHallUncheckedCreateNestedOneWithoutUserInput
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
  }

  export type EventUpsertWithoutAttendeesInput = {
    update: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type EventUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townHall?: TownHallUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUpdateOneWithoutEventNestedInput
    alerts?: AlertUpdateManyWithoutEventNestedInput
    follows?: UserFollowUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUncheckedUpdateOneWithoutEventNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutEventNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutAttendancesInput = {
    update: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    townHall?: TownHallUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    follows?: UserFollowUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    townHall?: TownHallUncheckedUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateWithoutFollowsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    townHall?: TownHallCreateNestedOneWithoutUserInput
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutFollowsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    townHall?: TownHallUncheckedCreateNestedOneWithoutUserInput
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutFollowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
  }

  export type ArtisanCreateWithoutFollowersInput = {
    id?: string
    businessName: string
    description?: string | null
    categories?: ArtisanCreatecategoriesInput | string[]
    km0Certified?: boolean
    verifiedById?: string | null
    logoUrl?: string | null
    websiteUrl?: string | null
    user: UserCreateNestedOneWithoutArtisanInput
    participants?: EventParticipantCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutFollowersInput = {
    id?: string
    userId: string
    businessName: string
    description?: string | null
    categories?: ArtisanCreatecategoriesInput | string[]
    km0Certified?: boolean
    verifiedById?: string | null
    logoUrl?: string | null
    websiteUrl?: string | null
    participants?: EventParticipantUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutFollowersInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutFollowersInput, ArtisanUncheckedCreateWithoutFollowersInput>
  }

  export type EventCreateWithoutFollowsInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    townHall: TownHallCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
    venueMap?: VenueMapCreateNestedOneWithoutEventInput
    alerts?: AlertCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFollowsInput = {
    id?: string
    townHallId: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    venueMap?: VenueMapUncheckedCreateNestedOneWithoutEventInput
    alerts?: AlertUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutFollowsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFollowsInput, EventUncheckedCreateWithoutFollowsInput>
  }

  export type UserUpsertWithoutFollowsInput = {
    update: XOR<UserUpdateWithoutFollowsInput, UserUncheckedUpdateWithoutFollowsInput>
    create: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowsInput, UserUncheckedUpdateWithoutFollowsInput>
  }

  export type UserUpdateWithoutFollowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    townHall?: TownHallUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    townHall?: TownHallUncheckedUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type ArtisanUpsertWithoutFollowersInput = {
    update: XOR<ArtisanUpdateWithoutFollowersInput, ArtisanUncheckedUpdateWithoutFollowersInput>
    create: XOR<ArtisanCreateWithoutFollowersInput, ArtisanUncheckedCreateWithoutFollowersInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutFollowersInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutFollowersInput, ArtisanUncheckedUpdateWithoutFollowersInput>
  }

  export type ArtisanUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutArtisanNestedInput
    participants?: EventParticipantUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArtisanUpdatecategoriesInput | string[]
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: EventParticipantUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type EventUpsertWithoutFollowsInput = {
    update: XOR<EventUpdateWithoutFollowsInput, EventUncheckedUpdateWithoutFollowsInput>
    create: XOR<EventCreateWithoutFollowsInput, EventUncheckedCreateWithoutFollowsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFollowsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFollowsInput, EventUncheckedUpdateWithoutFollowsInput>
  }

  export type EventUpdateWithoutFollowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townHall?: TownHallUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUpdateOneWithoutEventNestedInput
    alerts?: AlertUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutFollowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUncheckedUpdateOneWithoutEventNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    townHall?: TownHallCreateNestedOneWithoutUserInput
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeCreateNestedManyWithoutUserInput
    follows?: UserFollowCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    townHall?: TownHallUncheckedCreateNestedOneWithoutUserInput
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    townHall?: TownHallUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUpdateManyWithoutUserNestedInput
    follows?: UserFollowUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    townHall?: TownHallUncheckedUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EventCreateWithoutAlertsInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    townHall: TownHallCreateNestedOneWithoutEventsInput
    participants?: EventParticipantCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
    venueMap?: VenueMapCreateNestedOneWithoutEventInput
    follows?: UserFollowCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutAlertsInput = {
    id?: string
    townHallId: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    venueMap?: VenueMapUncheckedCreateNestedOneWithoutEventInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutAlertsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAlertsInput, EventUncheckedCreateWithoutAlertsInput>
  }

  export type TownHallCreateWithoutAlertsInput = {
    id?: string
    name: string
    municipality: string
    province: string
    logoUrl?: string | null
    verified?: boolean
    user: UserCreateNestedOneWithoutTownHallInput
    events?: EventCreateNestedManyWithoutTownHallInput
  }

  export type TownHallUncheckedCreateWithoutAlertsInput = {
    id?: string
    userId: string
    name: string
    municipality: string
    province: string
    logoUrl?: string | null
    verified?: boolean
    events?: EventUncheckedCreateNestedManyWithoutTownHallInput
  }

  export type TownHallCreateOrConnectWithoutAlertsInput = {
    where: TownHallWhereUniqueInput
    create: XOR<TownHallCreateWithoutAlertsInput, TownHallUncheckedCreateWithoutAlertsInput>
  }

  export type EventUpsertWithoutAlertsInput = {
    update: XOR<EventUpdateWithoutAlertsInput, EventUncheckedUpdateWithoutAlertsInput>
    create: XOR<EventCreateWithoutAlertsInput, EventUncheckedCreateWithoutAlertsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutAlertsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutAlertsInput, EventUncheckedUpdateWithoutAlertsInput>
  }

  export type EventUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townHall?: TownHallUpdateOneRequiredWithoutEventsNestedInput
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUpdateOneWithoutEventNestedInput
    follows?: UserFollowUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUncheckedUpdateOneWithoutEventNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TownHallUpsertWithoutAlertsInput = {
    update: XOR<TownHallUpdateWithoutAlertsInput, TownHallUncheckedUpdateWithoutAlertsInput>
    create: XOR<TownHallCreateWithoutAlertsInput, TownHallUncheckedCreateWithoutAlertsInput>
    where?: TownHallWhereInput
  }

  export type TownHallUpdateToOneWithWhereWithoutAlertsInput = {
    where?: TownHallWhereInput
    data: XOR<TownHallUpdateWithoutAlertsInput, TownHallUncheckedUpdateWithoutAlertsInput>
  }

  export type TownHallUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTownHallNestedInput
    events?: EventUpdateManyWithoutTownHallNestedInput
  }

  export type TownHallUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    municipality?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    events?: EventUncheckedUpdateManyWithoutTownHallNestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    townHall?: TownHallCreateNestedOneWithoutUserInput
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeCreateNestedManyWithoutUserInput
    follows?: UserFollowCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    townHall?: TownHallUncheckedCreateNestedOneWithoutUserInput
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    attendances?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    follows?: UserFollowUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    townHall?: TownHallUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUpdateManyWithoutUserNestedInput
    follows?: UserFollowUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    townHall?: TownHallUncheckedUpdateOneWithoutUserNestedInput
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    attendances?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type EventAttendeeCreateManyUserInput = {
    id?: string
    eventId: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
  }

  export type UserFollowCreateManyUserInput = {
    id?: string
    artisanId?: string | null
    eventId?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateManyRecipientInput = {
    id?: string
    type: string
    title: string
    body: string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: boolean
    createdAt?: Date | string
  }

  export type EventAttendeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type EventAttendeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUpdateOneWithoutFollowersNestedInput
    event?: EventUpdateOneWithoutFollowsNestedInput
  }

  export type UserFollowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyTownHallInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    locationLat: number
    locationLng: number
    locationAddr: string
    status?: $Enums.EventStatus
    categories?: EventCreatecategoriesInput | string[]
    coverImageUrl?: string | null
    maxAttendees?: number | null
    isTemplate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateManyTownHallInput = {
    id?: string
    eventId: string
    type: $Enums.AlertType
    title: string
    message: string
    severity?: number
    createdAt?: Date | string
  }

  export type EventUpdateWithoutTownHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUpdateOneWithoutEventNestedInput
    alerts?: AlertUpdateManyWithoutEventNestedInput
    follows?: UserFollowUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTownHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    venueMap?: VenueMapUncheckedUpdateOneWithoutEventNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutEventNestedInput
    follows?: UserFollowUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutTownHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationLat?: FloatFieldUpdateOperationsInput | number
    locationLng?: FloatFieldUpdateOperationsInput | number
    locationAddr?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    categories?: EventUpdatecategoriesInput | string[]
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutTownHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutTownHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutTownHallInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantCreateManyArtisanInput = {
    id?: string
    eventId: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
  }

  export type UserFollowCreateManyArtisanInput = {
    id?: string
    userId: string
    eventId?: string | null
    createdAt?: Date | string
  }

  export type EventParticipantUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
    products?: EventProductUpdateManyWithoutParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: EventProductUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateManyWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFollowsNestedInput
    event?: EventUpdateOneWithoutFollowsNestedInput
  }

  export type UserFollowUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUncheckedUpdateManyWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantCreateManyEventInput = {
    id?: string
    artisanId: string
    status?: $Enums.ParticipantStatus
    boothCode?: string | null
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
  }

  export type EventAttendeeCreateManyEventInput = {
    id?: string
    userId: string
    status?: $Enums.AttendeeStatus
    createdAt?: Date | string
  }

  export type AlertCreateManyEventInput = {
    id?: string
    townHallId: string
    type: $Enums.AlertType
    title: string
    message: string
    severity?: number
    createdAt?: Date | string
  }

  export type UserFollowCreateManyEventInput = {
    id?: string
    userId: string
    artisanId?: string | null
    createdAt?: Date | string
  }

  export type EventParticipantUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUpdateOneRequiredWithoutParticipantsNestedInput
    products?: EventProductUpdateManyWithoutParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: EventProductUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    boothCode?: NullableStringFieldUpdateOperationsInput | string | null
    positionX?: NullableFloatFieldUpdateOperationsInput | number | null
    positionY?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type EventAttendeeUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumAttendeeStatusFieldUpdateOperationsInput | $Enums.AttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    townHall?: TownHallUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    townHallId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    severity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFollowsNestedInput
    artisan?: ArtisanUpdateOneWithoutFollowersNestedInput
  }

  export type UserFollowUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventProductCreateManyParticipantInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category: string
    km0Certified?: boolean
    imageUrl?: string | null
  }

  export type EventProductUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventProductUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventProductUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    km0Certified?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}