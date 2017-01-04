import _bio from './profile';
import _helps from './helps';
import _stats from './stats';
import collection from 'lodash/collection';

const TIMEOUT = 1000;

export const api = {
  getBio(username) {
    // TODO: Replace this when API is ready.
    const bio = collection.filter(_bio, { username });
    return new Promise(resolve => {
      setTimeout(() => resolve(bio[0]), TIMEOUT);
    });
  },
  getFeeds(username) {
    // TODO: Replace this when API is ready.
    const helps = collection.filter(_helps, { username });
    return new Promise(resolve => {
      setTimeout(() => resolve(helps), TIMEOUT);
    });
  },
  getStats(username) {
    // TODO: Replace this when API is ready.
    const stats = collection.filter(_stats, { username });
    return new Promise(resolve => {
      setTimeout(() => resolve(stats[0]), TIMEOUT);
    });
  },
};

