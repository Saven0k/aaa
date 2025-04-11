import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getPosts } from '../services/workWithBd';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts())
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} style={{ margin: '20px', padding: '10px', border: '1px solid #eee' }}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <h5>{post.date_created}</h5>
        </div>
      ))} 
    </div>
  );
};

export default PostsPage;