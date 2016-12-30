import _following from './profile';
import _helps from './helps';

const TIMEOUT = 1000;

export const api = {
  getBio() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_following), TIMEOUT);
    });
  },
  getFeeds() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_helps), TIMEOUT);
    });
  },
  //getStats() {
    //return new Promise(resolve => {
      //setTimeout(() => resolve(_stats), TIMEOUT);
    //});
  //},
};

