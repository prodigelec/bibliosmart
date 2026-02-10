import { User, Book } from '@prisma/client';

export type { User, Book };

export interface UserWithBooks extends User {
  books: Book[];
}