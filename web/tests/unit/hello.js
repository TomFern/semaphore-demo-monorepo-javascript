const request = require('supertest');
const { assert } = require('chai');

request('http://localhost:3000')
    .get('/api/hello')
    .set('accept', 'application/json')
    .expect('content-type', "application/json; charset=utf-8")
    .expect(200)
    .then(response => {
        assert.deepEqual(JSON.parse(response.text), { name: 'John Doe' });
    })
    .catch(console.log);

