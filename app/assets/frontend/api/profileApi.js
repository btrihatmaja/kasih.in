import _bio from './profile';
import _helps from './helps';

const TIMEOUT = 1000;

export const api = {
  getBio(id) {
    // TODO: Replace this when API is ready.
    const bio = _bio.filter(b => b.id == id);
    return new Promise(resolve => {
      setTimeout(() => resolve(bio[0]), TIMEOUT);
    });
  },
  getFeeds() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_helps), TIMEOUT);
    });
  },
};

