import All from './All'
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {CurrentUser} from "../stores/actions"

const CreatePost = () => {
  // test
  

  const [postText, setPostText] = useState();
  
  // if(CurrentUser!== undefined){
  //   console.log(CurrentUser)
  // }
 
  const  id  = CurrentUser.id;
  
  const fetchCreatePost = (e) => {
    e.preventDefault();

    const data = {
      text: postText,
        user: id,
    };

    fetch('http://localhost:1337/posts', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    })
      .then((response) => response.json())
      .then((postdata) => {
        console.log(postdata);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="CreatePost">
   
      <form>
        <input type="text" name="text" placeholder="Put your text here" onChange={(e) => setPostText(e.target.value)} />
        <button type="submit" onClick={fetchCreatePost}id="refresh" >ça part </button>
      </form>
      <All/>
    </div>
  );
};

export default CreatePost;
