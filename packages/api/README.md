# Countries GraphQL API Server

The code in this project is based on [trevorblades/countries](https://github.com/trevorblades/countries).

The API serves data about continents, countries, and states. For example the query:

```graphql
{
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
}
```

Returns:

```graphql
{
  "data": {
    "country": {
      "name": "Brazil",
      "native": "Brasil",
      "capital": "Brasília",
      "emoji": "🇧🇷",
      "currency": "BRL",
      "languages": [
        {
          "code": "pt",
          "name": "Portuguese"
        }
      ]
    }
  }
}
```

## Running it

To build the project:

```bash
$ yarn install
```

To run the server

```bash
$ yarn start
```

To run unit tests

```bash
$ yarn start &
$ yarn test
```
## Using the server

Start the server and open a browser at [port 4000](http://localhost:4000). You'll get a dashboard to run queries.

You can also point a GraphQL client to port 4000, or use curl:

```bash
$ curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ country(code: \"BR\") { name native capital emoji currency languages { code name }}}" }' http://localhost:4000

{"data":{"country":{"name":"Brazil","native":"Brasil","capital":"Brasília","emoji":"🇧🇷","currency":"BRL","languages":[{"code":"pt","name":"Portuguese"}]}}}
```
## License

MIT License

Copyright (c) 2021 Rendered Text

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
