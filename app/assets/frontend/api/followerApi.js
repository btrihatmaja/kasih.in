import _helps from './follower';

const TIMEOUT = 1000;

export const api = {
  getFollower() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_helps), TIMEOUT);
    });
  },
};
