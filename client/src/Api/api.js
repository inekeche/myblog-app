import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

export const getPosts = () => API.get('/posts');
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (data) => API.post('/posts', data);
export const updatePost = (id, data) => API.put(`/posts/${id}`, data);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const getCategories = () => API.get('/categories');
export const createCategory = (data) => API.post('/categories', data);
