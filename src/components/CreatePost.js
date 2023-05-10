import React from 'react';
import { collection , addDoc } from 'firebase/firestore';
import {firestore} from '../firebase';
import { useFormInput } from '../hooks';



function CreatePost() {
  const title = useFormInput('');
  const content = useFormInput('');
  const subTitle = useFormInput('');

  async function addPost(){
    try{
      const docRef = await addDoc(collection(firestore , 'posts'),{
        title : title.value,
        content : content.value,
        subTitle : subTitle.value,
        createdAt : new Date()
      });

      title.reIntialize('');
      content.reIntialize('');
      subTitle.reIntialize('');
      // some alert type like the message has been submitted .
      console.log('Documet written with ID', docRef.id);
  
    }catch(e){
      console.error("Error adding document: ", e);
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    addPost();
  }

  return (
    <div className='create-post'>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Title</label>
          <input value={title.value} onChange={title.onChange}/>
        </div>
        
        <div className='form-field'>
          <label>Sub Title</label>
          <input value={subTitle.value} onChange={subTitle.onChange}/>
        </div>
        
        <div className='form-field'>
          <label>Content</label>
          <textarea value={content.value} onChange={content.onChange}></textarea>
        </div>

        <button className='create-post-btn'>Create Post</button>
      </form> 
    </div>
  );
}

export default CreatePost;
