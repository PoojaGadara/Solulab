const express = require('express');
const mongoose = require('mongoose');
const { createCategory , updateCategory , getCategoryDetails , deleteCategory , listCategory} = require('../Controller/categoryController');
const router = express.Router();

router.route('/category/create').post(createCategory)
router.route('/category/readAll').get(listCategory)
router.route('/category/update/:id').put(updateCategory)
router.route('/category/delete/:id').delete(deleteCategory)
router.route('/category/read/:id').get(getCategoryDetails)

module.exports = router; 