import axios from 'axios';

const movieDB = axios.create(
    {baseURL: 'https://api.themoviedb.org/3/movie',
params: {
    api_key: 'd9c924efc75ff02f5037c0a0a1d481aa',
    language: 'ex-ES'
}}   
);

export default movieDB;