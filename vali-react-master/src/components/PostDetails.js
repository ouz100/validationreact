import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from '../contexts/PostContext';

const PostDetails = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id, posts]);

  if (!post) {
    return <div>Loading post details...</div>;
  }

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/" className="back-link">Back to all posts</Link>
    </div>
  );
};

export default PostDetails;