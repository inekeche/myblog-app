import express from 'express';
import Category from '../models/Categories.js';
import { categoryValidation } from '../validations/categoryValidation.js';

const router = express.Router();

// GET all categories
router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// POST new category
router.post('/', async (req, res) => {
  const { error } = categoryValidation.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const newCategory = new Category(req.body);
  const saved = await newCategory.save();
  res.status(201).json(saved);
});

export default router;
