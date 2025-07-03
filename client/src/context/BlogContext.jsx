// src/context/BlogContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import {
  getPosts,
  getCategories,
  createPost,
  updatePost,
  deletePost,
} from "../Api/api";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all posts
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await getPosts();
      setPosts(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Add a post
  const addPost = async (data) => {
    try {
      const res = await createPost(data);
      setPosts((prev) => [res.data, ...prev]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit a post
  const editPost = async (id, data) => {
    try {
      const res = await updatePost(id, data);
      setPosts((prev) =>
        prev.map((post) => (post._id === id ? res.data : post))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a post
  const removePost = async (id) => {
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((post) => post._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        posts,
        categories,
        loading,
        error,
        fetchPosts,
        fetchCategories,
        addPost,
        editPost,
        removePost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
