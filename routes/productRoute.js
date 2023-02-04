const express = require('express');
const mongoose = require('mongoose');
const {  createproduct, updateproduct, deleteproduct, getproductDetails , listProduct ,lookupTabel} = require('../Controller/productController');
const router = express.Router();

router.route('/product/create').post(createproduct)
router.route('/product/readAll').get(listProduct)
router.route('/product/update/:id').put(updateproduct)
router.route('/product/delete/:id').delete(deleteproduct)
router.route('/product/read/:id').get(getproductDetails)
router.route('/lookupTable').get(lookupTabel)

module.exports = router; 