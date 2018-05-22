import { beforeEach } from 'mocha';
import { expect } from 'chai';
import nock from 'nock';

import { Api, api } from '../src/index';
import response from './response';

describe('Get bounties test', () => {
  let inst;

  beforeEach(() => {
    nock('https://gitcoin.co')
      .get('/api/v2/bounties')
      .query(true)
      .reply(200, response);
    inst = new Api();
  });

  it('get all bounties', () => {
    return inst.bounties.all().then(res => {
      expect(res.length).to.equal(1);
    });
  });
});
