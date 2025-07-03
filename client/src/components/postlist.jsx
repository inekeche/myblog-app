import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const api = useApi();

  useEffect(() => {
    api.get('/api/posts').then(setPosts).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Posts</h2>
      {posts.map(post => (
        <div key={post._id} className="mb-4">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <Link to={`/posts/${post._id}`} className="text-blue-500">Read More</Link>
        </div>
      ))}
    </div>
  );
}
