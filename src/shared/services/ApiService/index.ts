import axios from 'axios';

const API_CLIENT_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzI1Y2U2YjZlYjNmYzgwZDliN2M1MmRiNjY0ZDk3OSIsInN1YiI6IjY0NDllM2RmYTM5ZDBiMDRhYjI0NzUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V1in3b8ueULuFs-WN1emyGP1Thys3wMDgM9GKoOPnJg';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: { Authorization: `Bearer ${API_CLIENT_TOKEN}` },
});

export default instance;
