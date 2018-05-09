## Intro

Yarn browser-sync tool to creat a localhost browser

For a camera web app, it has to run on a localhost browser.

## Getting started

#### install yarn

##### macOS
```
brew install yarn
```


#### Prepare
Just create a folder and copy all necessary web app files into it.

Here we use index.html as start page.

## Development
#### enter the project to init environment.
```
yarn init -y
```

#### Let yarn install browser-sync.
```
yarn add browser-sync
```

#### To create a script named start, edit `package.json` as follows
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

#### Run
```
yarn start
```

## To run https locally:
https is required to get camera permissions to work when not working with `localhost`

1. Generate Keys
```
openssl genrsa -out server.key 2048
openssl req -new -x509 -sha256 -key server.key -out server.cer -days 365 -subj /CN=YOUR_IP
```
2. Use `yarn run watch-https`
3. Go to `https://YOUR_IP:3000`, then accept the insecure privacy notice, and proceed.



