import axios from 'axios';

// TODO: Cambiar cuando el api este lista
const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'bb707278997365d55abe53fdc7583bd6',
    language: 'en-US'
  }
});

export default API;