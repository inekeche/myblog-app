import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import useApi from '../hooks/useApi';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  const api = useApi();

  const { posts, addPost, editPost } = useBlog();
  const existingPost = id ? posts.find(p => p._id === id) : null;

  // Load categories and optionally set form fields if editing
  useEffect(() => {
    api.get('/api/categories').then(setCategories).catch(console.error);

    if (existingPost) {
      setTitle(existingPost.title);
      setContent(existingPost.content);
      setCategory(existingPost.category);
    }
  }, [id, existingPost]);

  const validate = () => {
    const errs = {};
    if (!title.trim()) errs.title = 'Title is required';
    if (!content.trim()) errs.content = 'Content is required';
    if (!category) errs.category = 'Category is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = { title, content, category };

    try {
      if (id) {
        await editPost(id, formData);
      } else {
        await addPost(formData);
      }
      navigate('/');
    } catch (err) {
      console.error("Failed to save post:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto mt-6">
      <input
        className="w-full border p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <p className="text-red-500">{errors.title}</p>}

      <textarea
        className="w-full border p-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
      />
      {errors.content && <p className="text-red-500">{errors.content}</p>}

      <select
        className="w-full border p-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select>
      {errors.category && <p className="text-red-500">{errors.category}</p>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        {id ? 'Update' : 'Create'} Post
      </button>
    </form>
  );
}

