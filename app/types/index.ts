import { User, Reservation, Listing } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updateAt" | "emailVerified"
> & {
  createdAt: string;
  updateAt: Date;
  emailVerified: (() => string) | null;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};
