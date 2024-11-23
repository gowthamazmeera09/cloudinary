const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    publicId: { type: String, required: true },
});


module.exports = mongoose.model('Image', ImageSchema);
