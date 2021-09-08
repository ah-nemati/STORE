import mongoose from "mongoose";

const ConnectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected.");
    return;
  }
  mongoose.connect(process.env.MOBGODB_URL, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
    (err) => {
      if (err) throw err;
      console.log("connected to mongodb.");
    });
};

export default ConnectDB;
