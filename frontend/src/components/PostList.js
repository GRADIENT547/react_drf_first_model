import React, { useState, useEffect } from 'react';
import { fetchPosts, createPost } from '../api';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Загрузка данных при монтировании
    fetchPosts()
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ title, content })
      .then(res => {
        setPosts([...posts, res.data]);
        setTitle('');
        setContent('');
      });
  };

  return (
    <div>
      <h1>Посты</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Текст"
        />
        <button type="submit">Создать</button>
      </form>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;