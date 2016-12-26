import _messages from './messages';

const TIMEOUT = 1000;

export const api = {
  getMessages() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_messages), TIMEOUT);
    });
  },
};

// TODO: Write for post once we have the backend
