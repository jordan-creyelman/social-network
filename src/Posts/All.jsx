import React, {  useState ,useEffect} from 'react';
import Cookies from 'js-cookie';
// import dayjs from 'dayjs';
// import LikePost from './LikePost';
// import {CurrentUser} from "../stores/actions"

const All= ()=>{
  const [arrayPost, setArrayPost] = useState([]);
  useEffect(()=>{
  
    fetch('http://localhost:1337/posts', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((postdata) => {
        console.log(postdata);
        setArrayPost(postdata)
      })
  
},[]);
   
    return(
      <div>
        <p>{arrayPost.map(post=><div key={post.id}>{post.text}</div>)
          }</p>
      </div>
  ) 
  
}

export default All