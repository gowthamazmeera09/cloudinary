const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 7000;

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("Failed to connect to MongoDB", error);
    });

app.use('/api', imageRoutes);

app.listen(PORT, () => {
    console.log(`Server started and running at ${PORT}`);
});

app.use('/', (req, res) => {
    res.send("<h1>Hello Gowtham, how are you?</h1>");
});
