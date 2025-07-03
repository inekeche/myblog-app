import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";

import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostView from './components/PostView';
import PostForm from './components/PostForm';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api/hello")
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to My Blog MERN App</h1>
        <p>Designed by Felix Ineke: {message}</p>

        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="/edit/:id" element={<PostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
