import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dry-brushlands-83719.herokuapp.com/',
  // baseURL: 'http://localhost:3333/',
});
