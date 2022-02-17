import React from 'react';

import CreatePost from '../../Posts/CreatePost';
 
 import All from "../../Posts/All"
const Home = ()=>{
 
return(
  <div>
 <p>
  Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.
</p>
<CreatePost />

  {/* <DisplayAllPosts />    */}
  
  {/* <div className="test">  <All/></div>  */}
 
    </div>
 
)
}
export default Home