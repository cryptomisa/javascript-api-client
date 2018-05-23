# Gitcoin Sdk
Gitcoin Javascript API Client

## Usage

```
// import Api class
import { Api } from 'gitcoin-sdk';
const api = new Api(options);
api.bounties.all();

// import api function
import { api } from 'gitcoin-sdk';
api(options).bounties.all();
```

### Options

| Key | Default | Description
| --- | --- | ---
| network | mainnet | etherium block chain network
| idx_status | open | 
| order_by | -web3_created | 
| limit | None | max number of bounties return per page
| raw_data |
| experience_level | 
| project_length | 
| bounty_type | 
| bounty_owner_address |
| bounty_owner_github_username |
| standard_bounties_id |
| pk__gt | | filter by PK
| started | | filter by who is interested
| is_open | false | filter by is open or not
| github_url | | filter by urls
| fulfiller_github_username | | retrieve all fullfilled bounties by fulfiller_username
| interested_github_username | | retrieve all interested bounties by profile handle


## Develop

1. Clone the repo
  * Run `git clone https://github.com/gitcoinco/javascript-api-client.git`
  * `cd javascript-api-client`
2. Build library
  * Run `yarn install` (recommended) or `npm install` to get the project's dependencies
  * Run `yarn build` or `npm run build` to produce minified version of your library.
3. Development mode
  * Having all the dependencies installed run `yarn dev` or `npm run dev`. This command will generate an non-minified version of your library and will run a watcher so you get the compilation on file change.
4. Running the tests
  * Run `yarn test` or `npm run test`

## Scripts

* `yarn build` or `npm run build` - produces production version of your library under the `lib` folder
* `yarn dev` or `npm run dev` - produces development version of your library and runs a watcher
* `yarn test` or `npm run test` - well ... it runs the tests :)
* `yarn test:watch` or `npm run test:watch` - same as above but in a watch mode