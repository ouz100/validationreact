
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PostProvider } from './contexts/PostContext';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import './App.css';


function App() {
  return (
    <PostProvider>
      <Router>
        <div className="App">
          <h1>Blog Posts</h1>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;