import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {collection ,getDocs} from 'firebase/firestore';
import {firestore } from '../firebase';


function Home() {
  const [posts , setPosts] = useState([]);

  async function getData(){
    const querySnapshot = await getDocs(collection(firestore,'posts'));
    const newPosts = querySnapshot.docs.map((doc)=>{
      return {
        id : doc.id,
        ...doc.data()
      }
    });
    setPosts(newPosts);
  }

  useEffect(()=>{
    getData();
  },[])
  return (
    <div className='home'>
      <h1>Tech Blog</h1>
      <div id='blog-by'>Sarthak</div>

      {posts.map((post, index)=>(
        <div className='post' key ={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}

    </div>
  );
}

export default Home;
