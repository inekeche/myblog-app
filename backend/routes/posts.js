import express from 'express';
import Post from '../models/Posts.js';
import { postValidation } from '../validations/postValidation.js';

const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('category');
  res.json(posts);
});

// GET single post
router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id).populate('category');
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// POST new post
router.post('/', async (req, res) => {
  const { error } = postValidation.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const newPost = new Post(req.body);
  const saved = await newPost.save();
  res.status(201).json(saved);
});

// PUT update post
router.put('/:id', async (req, res) => {
  const { error } = postValidation.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: 'Post not found' });
  res.json(updated);
});

// DELETE post
router.delete('/:id', async (req, res) => {
  const deleted = await Post.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Post not found' });
  res.json({ message: 'Post deleted' });
});

export default router;
