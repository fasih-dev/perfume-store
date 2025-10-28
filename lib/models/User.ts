import { Schema, model, models } from 'mongoose';

export type UserRole = 'admin' | 'user';

const UserSchema = new Schema(
	{
		name: { type: String },
		email: { type: String, required: true, unique: true, index: true },
		passwordHash: { type: String, required: true },
		role: { type: String, enum: ['admin', 'user'], default: 'user', index: true },
	},
	{ timestamps: true }
);

export const User = models.User || model('User', UserSchema);
