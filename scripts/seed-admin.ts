import { hash } from 'bcrypt';
import { connectToDatabase } from '../lib/mongodb';
import { User } from '../lib/models/User';

async function seedAdmin() {
	try {
		await connectToDatabase();
		const exists = await User.findOne({ email: 'fasihh2.0@gmail.com' });
		if (exists) {
			console.log('Admin user already exists');
			process.exit(0);
		}
		const passwordHash = await hash('123456', 10);
		await User.create({
			email: 'fasihh2.0@gmail.com',
			passwordHash,
			role: 'admin',
		});
		console.log('Admin user created successfully');
		process.exit(0);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}

seedAdmin();

