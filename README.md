## Intro

Yarn browser-sync tool to creat a localhost browser

For a camera web app, it has to run on a localhost browser.

## Getting started

install yarn

### macOS
```brew install yarn```


## Prepare
Just create a folder and copy all necessary web app files into it.

Here we use index.html as start page.

## Create

1. enter the project to init environment.      ```yarn init -y```
2. Let yarn install browser-sync.    ```yarn add browser-sync```
3. To create a script named start, edit `package.json` as follows

```jason
{
  "name": "camera",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start" : "./node_modules/.bin/browser-sync start --server --no-notify --files='index.html, *.css, *.js'"
  }
}
```

4. Run. ```yarn start```

