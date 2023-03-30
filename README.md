# GeoFeatures BoundingBox API

### Requirements:

* Node.js (16.x)
* NPM
* TypeScript, Express.js
* Git
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community) optional.

#### 🎁 If you are a big fan of docker, just don't wait and pull the [docker image](https://hub.docker.com/r/sazal/ts-geofeatures-bbox-backend) by following the commands:

```bash
docker pull sazal/ts-geofeatures-bbox-backend:1.0.0.RELEASE
```


Let's clone the repository on your machine.

The application includes the following files and folders.

- `src` - code for the application written in TypeScript, Express.js.
- `cli` - node cli script which can be performed from terminal.
- `__tests__` - to test all the features.
- `.env.example` - a sample of .env which can be helpful for configuration.

```bash
# architecture
# deep drive in src directory
src/
├── controllers/
│   └── geo.controller.ts
├── routes/
│   └── geo.ts
├── services/
│   ├── geo.ts
│   └── openstreetmap.ts
├── dto/
│   └── geo.dto.ts
├── types/
│   └── index.ts
├── lib/
│   └── helpers.ts
├── app.ts
└── index.ts

```


## Installation and Configuration

Let's move to the cloned directory with your terminal.

To install, build, and start the application for the first time, run the following commands in your shell using `makefile` (only for macOS and Linux):

```bash
make install
```

Let's rename from `.env.example` to `.env` and make sure all the necessary information is correct:

```bash
PORT=3000

```

Already done? Cool! You are almost ready to enjoy the app. ⛳️


### Build:
```
make build
```

### Run:
```bash
make start
```

### API Endpoint:

```bash
GET /geo/features?bbox=6.883,51.4243,6.8933,51.4326
# try the api with postman
# port 3000
```
#### A Sample URL:
- `http://localhost:3000/geo/features?bbox=6.883,51.4243,6.8933,51.4326`

### Test:
Oh! You wanna trigger unit testing for the application from terminal
<br>
```bash
make test
make test-unit
```


### lint:
```
make lint
```
### lintfix:
```
make lintfix
```

#### 🎯 I know, you liked it.
To learn more, you can use the following commands: 
```
make help
```

#### At the same time, you can use the default `npm` commands like:
```bash
npm i
npm run build
npm run start
npm run test
```

#### 🥇 Congrats!! You are good to go

#### 🧑‍💻 Stay in touch

- Author - [Sazal Ahamed](https://sazal.vercel.app)

#### tada! 🎉





