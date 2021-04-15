# Monorepo Yarn2 Demo

## Setup monorepo with Yarn workspaces

1. Fork this repo
2. Clone it to your machine
3. Download latest yarn version:
    ```bash
    $ yarn set version berry
    ```
4. Initialize top-level `package.json`
```bash
$ yarn init -w
```
5. Move all projects to workspaces:
```bash
$ git mv api web packages
$ yarn workspaces list
```
6. Install modules
```bash 
$ yarn install
```
7. Add the new files to the repository. This will also commit all dependencies.
```bash
$ git add .yarnrc.yml .yarn .gitattributes .gitignore package.json
$ git commit -m "setup monorepo"
$ git push origin main
```
## Run development version 

```bash
$ yarn workspace api start &
$ yarn workspace web dev
```

## Build static site

```bash
$ yarn workspace api start &
$ yarn workspace web build
$ yarn workspace web export
```

## License

## License

MIT License

Copyright (c) 2021 Rendered Text

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
