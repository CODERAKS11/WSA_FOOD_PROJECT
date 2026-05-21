const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_LOCAL_URI, {
      dbName: "Internship",
    });

    console.log(
      `MongoDB Database connected with HOST: ${conn.connection.host}`
    );
    console.log(`Database Name: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;