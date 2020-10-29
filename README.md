# Trivia Game

## How to run it

first install dependencies

```
npm i
```

latter run the server

```
npm run dev
```

in my case I run the these tool versions:

```
npm: 7.0.3
node: v15.0.1
```

## Design

### Suspense

This project uses the experimental React Suspense API for data fetching. We take advantage of this technology to kickoff the critical network requests before any JS loads (see `src/criticalClient.js`). The component shown in the `/quiz` route will suspend until the request completes.

## Technologies used

### Tailwind

### Framer Motion

### React 17 JSX Factories

This project is using the [new React 17 JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html). This is an experimental Typescript feature so you may need to enable editor support as described [here](https://code.visualstudio.com/Docs/languages/typescript#_how-can-i-use-the-latest-typescript-beta-with-vs-code).
