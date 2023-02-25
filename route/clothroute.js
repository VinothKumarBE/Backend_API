const express = require('express');
const  clothController = require('../controller/clothController')

const router = express.Router();


router      
.route('/')
.get(clothController.getAllClothes)
.post(clothController.addClothes);

router
.route('/:id')
.get(clothController.getCloth)

module.exports = router;