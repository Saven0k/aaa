import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Посты</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ margin: '20px', padding: '10px', border: '1px solid #eee' }}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
};

export default PostsPage;