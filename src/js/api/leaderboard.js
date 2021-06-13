import Phaser from 'phaser';
import axios from 'axios';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'KUuGABL1NQkjx9MAmI7c';

const postScore = async (data) => {
  return await axios
    .post(`${baseUrl}games/${gameID}/scores/`, data, { mode: 'cors' })
    .then((response) => response.data)
    .catch((error) => error);
};

const getScores = async () => {
  return await axios
    .get(`${baseUrl}games/${gameID}/scores/`, { mode: 'cors' })
    .then((response) => response.data)
    .catch((error) => error);
};

export default { postScore, getScores };
