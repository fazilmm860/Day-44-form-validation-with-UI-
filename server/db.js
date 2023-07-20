const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DB)
		mongoose.set('strictQuery', true);
		console.log(`MongoDB Connected: ${conn.connection}`);
	}
	catch (error) {
		console.log(`Error: ${error}`);
	}
}
module.exports = connectDB