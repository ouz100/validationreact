import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../contexts/PostContext';

const PostList = () => {
  const { posts, loading } = useContext(PostContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;