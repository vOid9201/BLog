import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getDoc , doc} from 'firebase/firestore';
import {firestore} from '../firebase';

function PostDetail() {

  const [post , setPost] = useState({});
  const {postId} = useParams();

  useEffect(()=>{
    async function getPostDetails(){
      const docRef = doc(firestore , 'posts' , postId);
      const docSnap = await getDoc(docRef);
  
      if(docSnap.exists()){
        console.log('doc data' , docSnap.data());
        setPost({
          title : docSnap.data().title,
          content : docSnap.data().content,
        });
      }
      else{
        console.log('No such document');
      }
    }
    getPostDetails();
  },[postId])

  return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
