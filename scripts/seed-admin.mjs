import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { MONGODB_URI, MONGODB_DB_NAME } = process.env;
if (!MONGODB_URI) {
  console.error('MONGODB_URI missing');
  process.exit(1);
}

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  passwordHash: String,
  role: { type: String, default: 'admin' }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function main() {
  await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB_NAME });
  const email = 'fasihh2.0@gmail.com';
  const exists = await User.findOne({ email });
  if (exists) {
    console.log('Admin already exists');
    await mongoose.disconnect();
    return;
  }
  const passwordHash = await bcrypt.hash('123456', 10);
  await User.create({ email, passwordHash, role: 'admin' });
  console.log('Admin user created');
  await mongoose.disconnect();
}

main().catch(async (e) => { console.error(e); try { await mongoose.disconnect(); } catch {} process.exit(1); });
