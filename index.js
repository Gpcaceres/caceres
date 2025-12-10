const port=4005;
const express=require('express');
const app=express();
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://SrJCBM:bdd2025@cluster0.tjvfmrk.mongodb.net/travel_brain?retryWrites=true&w=majority&appName=Cluster0');

const db=mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('System connected to MongoDb Database'));
app.use(express.json());

const tripRoutes = require('./routes/tripRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/travel-brain/trips', tripRoutes);
app.use('/travel-brain/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
module.exports = app;

mongoose.connect("mongodb+srv://SrJCBM:bdd2025@cluster0.tjvfmrk.mongodb.net/travel_brain")
  .then(() => {
    console.log("Connected to MongoDB - travel_brain");
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
