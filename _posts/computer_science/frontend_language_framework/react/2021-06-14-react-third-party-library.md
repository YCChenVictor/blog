---
layout: post
title: (react) third party library
description:
date: '2021-06-14'
categories: react
note: 要把 how 以下的 code 整理一下，之前寫的模式沒什麼用，整理 fontawesome 跟 mui 怎麼安裝即可
---

## Introduction

1. tailwind
2. fontawesome
3. mui

## Why

I need to know it to build an app.

## How

### tailwind

Follow the official guidance: [tailwind](https://tailwindcss.com/docs/guides/create-react-app) and then use [How to Setup Tailwind CSS in React](https://www.youtube.com/watch?v=aseGmc3jldM)

install tailwind

```bash
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npx tailwindcss init -p
```

install craco

```bash
npm install @craco/craco
```

take a look at `package.json` and replace the following:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

to

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "craco eject"
}
```

add a new file `craco.config.js` in the root and input the following:

```js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

input the following to `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### add react for framework

### add third party library: fontawesome, mui

### add tailwind for CSS style

* [react](https://reactjs.org/docs/create-a-new-react-app.html) for SPA (Single Page Application)
* [fontawesome](https://codesandbox.io/s/b6vxt?file=/src/components/AnimatingIcons.js:384-390) for icon
* [mui](https://mui.com/getting-started/installation/) for react components

After the setup, I am going to build a boring website with title and cards just like youtbe for basic setting practice. Create two component, title and card in component folder as follow:

<img src="/assets/img/react_basic_layout.png" alt="react_basic_layout" width=300>

Then add the following components in `components` folder

#### Header.js

```javascript
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCircleNotch,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Logo from './images/logo.jpg'

function Header() {
  return (
    <header className="bg-white divide-y ml-18 border-b fixed inset-x-0">
      <div className="flex justify-between items-center h-14 mx-4">
        <div className="-ml-3">
          <img src={Logo} className="w-20 h-12" />
        </div>
        <div className="flex items-center justify-center flex-grow">
          <input type="text" placeholder="Search" className="border border-gray-400 h-8  px-1 py-2 focus:outline-none focus:border-blue-600 w-3/5" />
          <button className="bg-gray-200 flex items-center justify-center h-8 w-16 border border-gray-400 border-l-0 hover:bg-gray-300">
              <i className="material-icons">search</i>
          </button>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="flex items-center justify-center">
            <FontAwesomeIcon icon={faVideo} spin />
          </button>
          <button className="flex items-center justify-center">
            <FontAwesomeIcon icon={faCircleNotch} spin />
          </button>
          <button className="flex items-center justify-center">
            <FontAwesomeIcon icon={faCog} spin />
          </button>
          <button>
            <div className="h-8 w-8 rounded-full bg-blue-300 overflow-hidden object-cover">
              <img className="object-cover" src="https://images.unsplash.com/photo-1570724061670-86a53c509dee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="" />
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

```

#### Aside.js

```javascript
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faFire,
  faClipboard,
  faBook
} from "@fortawesome/free-solid-svg-icons";

function Aside() {
  return (
    <aside className="fixed top-0 w-18 h-screen bg-white flex items-center flex-col mt-14 text-gray-700">
      <div className="mt-6 w-full">
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4 text-red-600">
          <FontAwesomeIcon icon={faHome} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4">
          <FontAwesomeIcon icon={faFire} />
          <span className="text-xs">Trending</span>
        </button>
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4">
          <FontAwesomeIcon icon={faClipboard} />
          <span className="text-xs">Subscriptions</span>
        </button>
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4">
          <FontAwesomeIcon icon={faBook} />
          <span className="text-xs">Library</span>
        </button>
      </div>
    </aside>
  )
}

export default Aside
```

#### Card.js

```javascript
import React from 'react'

function Card() {
  return (
    <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center" >
      <div className="bg-white rounded-lg mt-5">
        <img
          src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
          className="h-40 rounded-md"
          alt=""
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
        <div className="py-5 px-5">
          <span className="font-bold text-gray-800 text-lg">Geek Pizza</span>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 font-light">
              Size : Regular
            </div>
            <div className="text-2xl text-red-600 font-bold">
              $ 8.00
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
```

#### App.js

```javascript
import Header from './components/Header.js';
import Card from './components/Card.js';
import Aside from './components/Aside.js';

function App() {
  return (
    <div className="bg-gray-100 font-Roboto antialised">
      <Header />
      <Aside />
      <main className="ml-24 pt-16">
        <div className="grid grid-cols-4 row-gap-10 col-gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
```

#### Index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## What

As you can see, the basic concept of react is to decompose the website into lots of components.
<img src="/assets/img/react_basic_layout_what.png" alt="react_basic_layout_what">

## reference

[React JS - React Tutorial for Beginners](https://www.youtube.com/watch?v=Ke90Tje7VS0)
