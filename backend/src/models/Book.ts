import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  userId: mongoose.Types.ObjectId;
  isbn?: string;
  title: string;
  authors: string[];
  coverImage?: string;
  pageCount?: number;
  categories: string[];
  description?: string;
  status: 'wishlist' | 'to_read' | 'reading' | 'completed' | 'abandoned';
  progress: number;
  rating?: number;
  review?: string;
  notes: { content: string; page?: number; createdAt: Date }[];
  quotes: { text: string; page?: number; createdAt: Date }[];
  shelves: string[];
  tags: string[];
  dateAdded: Date;
  dateStarted?: Date;
  dateCompleted?: Date;
}

const BookSchema: Schema<IBook> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isbn: { type: String, trim: true },
    title: { type: String, required: true, trim: true },
    authors: [{ type: String, required: true }],
    coverImage: { type: String },
    pageCount: { type: Number },
    categories: [{ type: String }],
    description: { type: String },
    status: {
      type: String,
      enum: ['wishlist', 'to_read', 'reading', 'completed', 'abandoned'],
      default: 'to_read',
    },
    progress: { type: Number, default: 0, min: 0, max: 100 },
    rating: { type: Number, min: 0, max: 5 },
    review: { type: String },
    notes: [
      {
        content: { type: String, required: true },
        page: { type: Number },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    quotes: [
      {
        text: { type: String, required: true },
        page: { type: Number },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    shelves: [{ type: String }],
    tags: [{ type: String }],
    dateStarted: { type: Date },
    dateCompleted: { type: Date },
  },
  { timestamps: true }
);

// Indexes for better search performance
BookSchema.index({ userId: 1, title: 'text', authors: 'text' });
BookSchema.index({ isbn: 1 });

export default mongoose.model<IBook>('Book', BookSchema);
