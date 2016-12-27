import _helps from './following';

const TIMEOUT = 1000;

export const api = {
  getFollowing() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_helps), TIMEOUT);
    });
  },
};
