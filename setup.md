## How to setup a new Typescript Express project 

1. 
```
npm init -y
```

2. 
```
npm install -D typescript
```

3. 
```
tsc --init
```

4. 
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "dev" : "npx concurrently --kill-others \"npm run watch\" \"npm start\" "
  },
```

5. Make configuration you want in tsconfig.json

