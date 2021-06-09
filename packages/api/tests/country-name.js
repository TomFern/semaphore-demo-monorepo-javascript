const { request } = require('graphql-request');
const { assert } = require('chai');

const query = `{
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }`;
  
request('http://localhost:4000', query).then(data => {
  assert.equal(data.country.name, 'Brazil');
  assert.equal(data.country.capital, 'Brasília');
});