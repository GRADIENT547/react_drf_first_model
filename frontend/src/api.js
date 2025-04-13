import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/',  // URL вашего Django-сервера
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchPosts = () => API.get('/posts/');
export const createPost = (post) => API.post('/posts/', post);