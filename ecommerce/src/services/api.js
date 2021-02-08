import axios from 'axios';

const api = axios.create({
  baseURL: 'https://601d5c21be5f340017a19933.mockapi.io/api/v1/',
});

export default api;
