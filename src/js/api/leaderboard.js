import axios from 'axios';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'KUuGABL1NQkjx9MAmI7c';

async function postScore(data) {
  const response = await axios
    .post(`${baseUrl}games/${gameID}/scores/`, data, { mode: 'cors' })
    .then((response) => response.data)
    .catch((error) => error);
  return response;
}

async function getScores() {
  const response = await axios
    .get(`${baseUrl}games/${gameID}/scores/`, { mode: 'cors' })
    .then((response) => response.data)
    .catch((error) => error);
  return response;
}

export { postScore, getScores };
