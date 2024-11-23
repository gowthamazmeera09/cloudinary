const express = require('express');
const router = express.Router();
const { upload, uploadImage, getAllImages } = require('../controller/imageController');

router.post('/upload', upload.single('image'), uploadImage);
router.get('/images', getAllImages);

module.exports = router;
