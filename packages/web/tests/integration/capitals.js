const request = require('supertest');
const { assert } = require('chai');
const cheerio = require('cheerio');

request('http://localhost:3000')
    .get('/capitals')
    .set('accept', 'text/html')
    .expect('content-type', "text/html; charset=utf-8")
    .expect(200)
    .then(response => {
        const page = cheerio.load(response.text);
        assert.include(page('li[id=0]').text(), 'Andorra la Vella');
    })
    .catch(console.log);

