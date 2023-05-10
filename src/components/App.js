import React from 'react';
import { Routes , Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:postId' element={<PostDetail/>} />
        <Route path='/create-post' element={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
