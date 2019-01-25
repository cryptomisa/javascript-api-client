import { beforeEach } from 'mocha';
import { expect } from 'chai';
import nock from 'nock';

import { Api, api } from '../src/index';
import response from './response';

describe('Get bounties test', () => {
  let inst;
  let options;

  beforeEach(() => {
    nock('https://gitcoin.co')
      .get('/api/v0.1/bounties')
      .query(true)
      .reply(200, response);
    options = { 'network': 'mainnet' };
    inst = new Api(options);
  });

  it('get all bounties', () => {
    return inst.bounties.all().then(res => {
      expect(res.length).to.equal(1);
    });
  });

  it('get page', () => {
    return inst.bounties.page(0).then(res => {
      expect(res.length).to.equal(1);
    });
  });
});
