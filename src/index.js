import axios from 'axios';

const baseUrl = 'https://gitcoin.co/api/v0.1/bounties';

class Api {

  constructor(options = {}) {
    const _options = {};

    Object.assign(_options, options);
    this._bounties = {
      all() {
        return this.page();
      },

      page(offset, limit) {
        const params = {};

        Object.assign(params, _options);
        if (limit > 0) params.limit = limit;
        if (offset >= 0) params.offset = offset;
        return axios.get(baseUrl, { params })
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
