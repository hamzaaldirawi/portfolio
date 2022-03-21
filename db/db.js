const mongoose = require('mongoose');
const URL = process.env.MONGODB_URL;
const dbURL = encodeURI(URL);

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB connected');
    } catch(err) {
        process.exit(1);
    }
}

module.exports = connectDB;