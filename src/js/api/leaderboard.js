import axios from 'axios';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'KUuGABL1NQkjx9MAmI7c';

async function postScore(data) {
  return axios
    .post(`${baseUrl}games/${gameID}/scores/`, data, { mode: 'cors' })
    .then((response) => response.data)
    .catch((error) => error);
}

async function getScores() {
  return axios
    .get(`${baseUrl}games/${gameID}/scores/`, { mode: 'cors' })
    .then((response) => response.data)
    .catch((error) => error);
}

export default { postScore, getScores };
