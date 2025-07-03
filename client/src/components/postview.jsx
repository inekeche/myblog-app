import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const api = useApi();

  useEffect(() => {
    api.get(`/api/posts/${id}`).then(setPost).catch(console.error);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="my-2">{post.content}</p>
      <p className="text-sm text-gray-500">Category: {post.category?.name}</p>
      <Link to={`/edit/${post._id}`} className="text-blue-500">Edit</Link>
    </div>
  );
}
