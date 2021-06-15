import axios from 'axios';
import { postScore, getScores } from '../src/js/api/leaderboard';

jest.mock('axios');

describe('postScore', () => {
  it('posts user game data to remote db', async () => {
    const data = { result: 'Leaderboard score created correctly.' };
    axios.post.mockImplementationOnce(() => Promise.resolve(data));
  });

  it('should recieve proper error when data is empty', async () => {
    const responseData = { data: { message: 'You need to provide a valid user for the score' } };
    axios.post.mockImplementationOnce(() => Promise.resolve(responseData));
  });
});

describe('getScores', () => {
  it('fetches all leaderboard records from remote', () => {
    const data = {
      result: [
        { user: 'P One', score: 42 },
        { user: 'P Two', score: 35 },
      ],
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
  });

  it('fails to fetch unmatched data', async () => {
    const data = undefined;

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getScores()).resolves.toEqual(data);
  });
});
