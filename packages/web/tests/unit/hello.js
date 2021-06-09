// test api endpoint /api/hello

require = require("esm")(module);
const { assert } = require("chai");
const { testApiHandler } = require('next-test-api-route-handler');
const handler = require('../../pages/api/hello');

testApiHandler({handler,   test: async ({ fetch }) => {
    const res = await fetch();
    const data = await res.json();
    assert.deepEqual(data, { name: 'John Doe' });
}});
