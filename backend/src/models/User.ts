import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  pseudo: string;
  name: string;
  avatar?: string;
  password: string;
  googleId?: string;
  twoFactorEnabled: boolean;
  twoFactorSecret?: string;
  language: 'fr' | 'en';
  preferences: {
    favoriteGenres: string[];
    readingGoal: number;
    theme: 'light' | 'dark' | 'auto';
  };
  stats: {
    totalBooksRead: number;
    currentStreak: number;
  };
  createdAt: Date;
  lastLogin: Date;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    pseudo: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true },
    avatar: { type: String },
    password: { type: String, required: function(this: IUser) { return !this.googleId; } },
    googleId: { type: String },
    twoFactorEnabled: { type: Boolean, default: false },
    twoFactorSecret: { type: String },
    language: { type: String, enum: ['fr', 'en'], default: 'fr' },
    preferences: {
      favoriteGenres: [{ type: String }],
      readingGoal: { type: Number, default: 0 },
      theme: { type: String, enum: ['light', 'dark', 'auto'], default: 'auto' },
    },
    stats: {
      totalBooksRead: { type: Number, default: 0 },
      currentStreak: { type: Number, default: 0 },
    },
    lastLogin: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre('save', async function(this: IUser, next: any) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err: any) {
    next(err);
  }
});

// Method to compare password
UserSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);
