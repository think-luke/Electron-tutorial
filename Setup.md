# Setting up an Electron and Next.js application
<img width="700px" src="https://i.imgur.com/NZfsD1p.png" alt="Screenshot of a basic Electron app with a welcome page that says Electron + Next.js and the Electon logo." />

Follow this markdown to setup boilerplate code. I will be leveraging the [Nextron](https://github.com/saltyshiomix/nextron) starter kit.

## Setup options
The Nextron starter kit provides 
Simple:

    npx create-nextron-app appName

With TypeScript:

    npx create-nextron-app appName --example basic-typescript

With Tailwind CSS:

    npx create-nextron-app appName --example with-tailwindcss

## Steps
In our case, let's incorporate the TypeScript setup and call this app nextron:

    npx create-nextron-app nextron --example basic-typescript

### Install Dependencies

```
$ cd nextron

$ npm install
```

### Use it

Development mode

    $ npm run dev

Production build

    $ npm run build