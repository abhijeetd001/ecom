const mongoose = require('mongoose');

const connectDB = async (uri) => {
    console.log("🚀 ~ file: connect.js:10 ~ connectDB ~ connectDB:")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
module.exports = connectDB;