import axios from 'axios';

const baseUrl = 'https://gitcoin.co/api/v2/bounties';

class Api {

  constructor(options = {}) {
    this._bounties = {
      all() {
        return axios.get(baseUrl, { params: options })
          .then(res => res.data);
      }
    };
  }

  get bounties() {
    return this._bounties;
  }
}

function api(options) {
  return new Api(options);
}

export { Api, api };
