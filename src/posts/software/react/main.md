# Title

## Purpose

Learning React is valuable for developers as it equips them with a powerful and widely-used [javascript] library, enabling the creation of efficient, modular, and interactive user interfaces that are in high demand across the web development industry.

## Concept

### Debug source code

This section describes the steps of how to debug react source code. The main idea is through symlink to link a react client app to react itself on local.

#### Prerequisite

Just clone it, install, and build react app on local.

#### symlink

After we build the app, cd into the build directory; take react-dom as example, we can find it through navigating through the path in react build: `build/node_modules/react`. And then in the client react app, link the repository with the client code through ``

Please refer to https://dev.to/arnabchat90/debugging-react-source-code-with-a-react-client-app-1l7

### Before Development

#### Init Project

* Create react app with following command
  ```bash
  npx create-react-app@latest your-project-name
  cd your-project-name
  yarn start
  ```
* Remove all the files in `/src` and add `index.js` in it with following code:
  ```javascript
  import { createRoot } from 'react-dom/client'
  
  const element = <h1>Hello World</h1>;
  createRoot(document.getElementById('root')).render(
    element
  )
  ```
  * which will create a JS object and render it into the DOM with id = root in the `public/index.html`
* Naming
  * File: There is no strict convention for naming files in React, but **camel case** is more commonly used for component files while snake case is more commonly used for non-component modules or helper functions.

#### Environment

Use `process.env` to get environment variable; for example,

```javascript
import React from 'react';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  // Use the environment variables in your component logic
  // ...

  return (
    <div>
      {/* Render your component */}
    </div>
  );
}

export default App;
```

And use `process.env.NODE_ENV` to know current environment; for example,

```javascript
import React from 'react';

function App() {
  const isProduction = process.env.NODE_ENV === 'production';

  // Use the environment variable in your component logic
  // ...

  return (
    <div>
      {/* Render your component */}
    </div>
  );
}

export default App;
```

### Component

[component](2023-01-27-component)

### Hook

[hook]()

### Routes

React does not have default route settings built in; routing is typically handled by third-party libraries like React Router; for example, let's create a navbar with react router

* Create a component, `Navbar` in `components/navbar.jsx`
* Install library
  ```bash
  yarn add react-router-dom
  ```
* Wrap `App` with `BrowserRouter`
  ```tsx
  import { BrowserRouter } from 'react-router-dom'

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  )
  ```
* Use BrowserRouter, Routes, Route, and Link components to render different components based on the current URL path.
  ```jsx
  import { Routes, Route, Link } from "react-router-dom";
  
  function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/twitter_api">Twitter Api</Link></li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/twitter_api" element={<TwitterApi />}/>
        </Routes>
      </div>
    )
  }
  
  export default Navbar
  ```
* If you want to use anchor tag
  ```jsx
  import { HashLink as Link } from 'react-router-hash-link';
  <Link to="/pathLink#yourAnchorTag">Your link text</Link>
  ```

#### redirect

* Vanilla javascript
  ```javascript
  window.location.href = 'path'
  ```
* Hook, `useNavigate`
  ```JSX
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  
  function LoginLayout() {
    const navigate = useNavigate();
  
    const routeChange = () => {
      let path = '/newPath'; // Correct path format with a leading '/'
      navigate(path);
    }
  
    return (
      <div className="app flex-row align-items-center">
        <Container>
          {/* ... */}
          <Button
            color="primary"
            className="px-4"
            onClick={routeChange}
          >
            Login
          </Button>
          {/* ... */}
        </Container>
      </div>
    );
  }
  ```

### API

[api](/blog/software/react/api).

### Assets

Usually, we `import` the assets; for example,

```javascript
import React from 'react';
import logo from '../assets/logo.png';

const MyComponent = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default MyComponent;
```

### Test

In the root, create a file named jest.config.js and add the following code configuration.

```js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
```

In the `package.json` in the script object add the following scripts

```json
scripts:{
  ... //scripts you already have
  test: "jest",
  coverage: "jest --coverage"
}
```

In your project's root directory, create a folder named `tests`. Inside the `tests` folder, create a test file for your React component. Name the file with the same name as the component you want to test and append `.test.js` or `.spec.js` to it. For example, if you have a component named `MyComponent`, create a test file named `MyComponent.test.js`.

In the test file, you can write your test cases using Jest's testing functions like "test," "describe," and assertions such as "expect."

Here's a basic example of a test file structure:

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent'; // Import your component

test('it renders correctly', () => {
  render(<MyComponent />);
  const element = screen.getByText('Some Text'); // Replace with your component's text
  expect(element).toBeInTheDocument();
});
```

// Add more test cases as needed
Make sure to replace "MyComponent" and the test case content with your component's name and the actual test logic.

This is a simple setup for creating Jest test files in a React project. You can add more advanced configurations and testing libraries based on your project's needs.

**run test by running npm run test**

### Typescript

#### Install

* Step 1: Create a new React app

  ```bash
  npx create-react-app my-react-app
  ```

* Step 2: Install TypeScript dependencies

```bash
yarn add --save typescript @types/node @types/react @types/react-dom @types/jest
```

* Step 3: Rename files to TypeScript extensions
Rename your src/index.js file to src/index.tsx and src/App.js to src/App.tsx.

* Step 4: Update tsconfig.json
Create a tsconfig.json file in the root of your project and configure it with the necessary TypeScript options. Here's a basic example:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

* Step 5: Update your tsconfig.json with additional settings for React
Update your tsconfig.json to include the following settings for React:

```json
{
  // ... other settings

  "compilerOptions": {
    // ... existing options

    "jsx": "react",
    "declaration": true,
    "sourceMap": true,
    "outDir": "./dist",
  },
  "include": ["src/**/*.tsx", "src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

* Step 6: Start your React app

```bash
npm start
```

Now, you can use TypeScript in your React project. You can create components with .tsx extension, and TypeScript will provide you with static type checking.

Remember to install any additional TypeScript typings if you are using third-party libraries that don't include them by default:

```json
npm install --save @types/library-name
```

#### Example

For example, from

```js
import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

to

```ts
import React, { useState } from 'react';

interface CounterProps {
  initialCount: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

### Layout

#### Modal

Create Modal Component

```jsx
// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
```

Use Modal Component in Parent Component

```jsx
// ParentComponent.js
import React, { useState } from 'react';
import Modal from './Modal';

const ParentComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default ParentComponent;
```

## Example

### sign up and login mechanism

[sign up and login mechanism]

### Markdown

* Install
  ```bash
  npm i react-markdown
  ```
* Code Example: It will import the markdown file and render it with `ReactMarkdown`
  ```javascript
  import React, { useState, useEffect } from 'react';
  import ReactMarkdown from 'react-markdown'
  import file from '../posts/self/software.md'
  
  const Article = () => {
    const [markdownContent, setMarkdownContent] = useState('');
  
    useEffect(() => {
      fetch(file).then((res) => res.text()).then(text => setMarkdownContent(text))
    }, []);
  
    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    )
  }
  
  export default Article
  ```

#### Image

* In md file
  ```HTML
  ![radio states coverage](assets/img/radio_states_coverage)
  ```
* In `ReactMarkdown`, add img
  ```javascript
  <ReactMarkdown
    ...
    components={{
      ...
      img: ({ node, ...props }) => (
        RenderImage(props)
      )
    }}
    ...
  >
    {markdownContent}
  </ReactMarkdown>
  ```
* RenderImage
  ```javascript
  ...
  const RenderImage = (props) => {
    const [image, setImage] = useState('')
    useEffect(() => {
      const fetchImage = async () => {
        const imgModule = await import(`../${props.src}.png`)
        setImage(imgModule.default)
      }
      fetchImage()
    }, []);
  
    return (
      <img src={image}></img>
    )
  }
  
  export default RenderImage
  ```

#### Code Block

* Install package
  ```bash
  npm i react-syntax-highlighter
  ```
* In the md file, add a code block
  ```bash
  This is a code block
  ```
* In `ReactMarkdown`, add `code`
  ```jsx
  ...
  <ReactMarkdown
    components={{
      ...
      code: ({ node, ...props }) => (
        RenderCodeBlock(props)
      )
    }}
    ...
  >
    {markdownContent}
  </ReactMarkdown>
  ```
* RenderCodeBlock

#### Mermaid

The concept is turn it into svg first and then render the svg.

* In `ReactMarkdown`, add code
  ```jsx
  <ReactMarkdown
    components={{
      ...
      code: ({ node, ...props }) => {
        if (props.className === 'language-mermaid') {
          return RenderMermaid(props)
        } else {
          return RenderCodeBlock(props)
        }
      }
    }}
    ...
  >
    {markdownContent}
  </ReactMarkdown>
  ```
* MermaidJS
  ```javascript
  const RenderMermaid = (props) => {
    const markId = useRef(`mark${Math.floor((Math.random() * 100000) + 1)}`)
    const [svg, setSvg] = useState('')
    useEffect(() => {
      const renderMermaid = async () => {
        const svg = await mermaid.render(markId.current, props.children[0])
        setSvg(svg.svg)
      }
      renderMermaid()
    }, [])
    return (
      <div dangerouslySetInnerHTML={{ __html: svg }}></div>
    )
  }
  ```

#### mathjax

add remarkMath, rehypeKatex

```javascript
<ReactMarkdown
  components={{
    ...
  }}
  remarkPlugins={[remarkGfm, remarkMath]}
  rehypePlugins={[rehypeKatex]}
>
  {markdownContent}
</ReactMarkdown>
```

### Turn ito Typescript

* install
  ```bash
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```
* Rename the File: Change the file extension from .jsx to .tsx. For example, if you have a file named MyComponent.jsx, rename it to MyComponent.tsx.
* Update Imports: Change the imports of that jsx file to tsx file.
  ```ts
  // from
  import xxx from 'xxx';
  // to
  import xxx from 'xxx.tsx'
  ```
* Type Annotations: In your TSX file, you may want to add type annotations for your props and state, like so:
  ```ts
  import React, { ReactNode } from 'react';

  interface MyComponentProps {
    message: string;
    children: ReactNode;
  }

  function MyComponent({ message, children }: MyComponentProps) {
    return (
      <div>
        <p>{message}</p>
        {children}
      </div>
    );
  }

  export default MyComponent;
  ```
  * Here, we've defined an interface MyComponentProps to describe the expected props for MyComponent. You can add type annotations as needed for your components.
* Type Checking: TypeScript will automatically check your code for type errors and provide feedback during development, helping you catch potential issues early.

### Other Issues

#### Package Management

* Update npm/yarn
* Remove unused package manually: walk through `package.json` and just remove the lines
* Detect bundle size of packages
  * Install `webpack-bundle-analyzer`
    ```bash
    npm install --save-dev webpack-bundle-analyzer
    # or
    yarn add --dev webpack-bundle-analyzer
    ```
  * Modify `webpack.config.js`
    ```javascript
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

    module.exports = {
      // ...your existing webpack configuration...
      plugins: [
        new BundleAnalyzerPlugin(),
        // ...other plugins...
      ],
    };
    ```
* ESLint can detect unused imports
  * Install
    ```bash
    npm install --save-dev eslint-plugin-unused-imports
    # or
    yarn add --dev eslint-plugin-unused-imports
    ```
  * config (.eslintrc)
    ```JSON
    {
      "plugins": ["unused-imports"],
      "rules": {
        "unused-imports/no-unused-imports": "error"
      }
    }
    ```
* Enable tree shaking in webpack configuration. It can detect installed but unused packages.
  * If we use react, then this is already enabled.
  * For example, if you use a utility library like Lodash but only utilize a couple of methods from it, tree-shaking will ensure that only those specific methods are included in the bundle, not the entire library.
  * However, if you have installed packages via npm or yarn but haven't imported or used any of their exports in your code, the tree-shaking process won't automatically remove those packages from your node_modules directory.
* Use `depcheck`
  * Install
    ```bash
    npm install -g depcheck
    ```
  * Use it
    ```bash
    depcheck
    ```
  * Then you can upm uninstall the unused package it lists

#### Deploy

##### Github

* install `gh-pages`
  ```bash
  npm install gh-pages --save-dev
  ```
* In `package.json`, add
  ```JSON
  ...
  "homepage": "http://{github-username}.github.io/{repo-name}",
  ...
  "scripts": {
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build",
  }
  ```
* In directory, run
  ```bash
  npm run deploy
  ```

Note: If you cannot deploy successfully, just build it and then push it to gh-pages branch. Or use Netlify.

##### Netlify

* install
  ```bash
  npm install netlify-cli -g
  ```
* build
  ```bash
  npm run build
  ```
* deploy
  ```bash
  netlify deploy
  ```
* cd on github
* CD: Just setup it in netlify

#### Tailwind

* Install: `yarn add tailwind`
* And then follow [Official guide](https://tailwindcss.com/docs/guides/create-react-app)
* And import it in `index.js` or `index.tsx` with
  ```javascript
  import './index.css';
  ```
* For the basic css concept, please refer to [CSS]

#### fontawesome

* [react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) for icon
* [fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) for icon

## Reference

[React JS - React Tutorial for Beginners](https://www.youtube.com/watch?v=Ke90Tje7VS0)

[Build a 3D World in React with ThreeJS and React Three Fiber](https://www.youtube.com/watch?v=9ZEjSxDRIik)

[【React教學】一個範例讓你搞懂useState, useRef, useEffect, 5分鐘快速教學](https://www.youtube.com/watch?v=q0C5g4WIrKU&t=132s)

[Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

[React useRef Hook](https://www.w3schools.com/react/react_useref.asp)

[react-sidebar-menu-medium](https://codesandbox.io/s/78ize)

[AJAX and APIs](https://reactjs.org/docs/faq-ajax.html)

[markdown to jsx](https://www.google.com/search?q=how+to+load+markdown+file+inreact&oq=how+to+load+markdown+file+inreact&aqs=chrome..69i57j33i10i160l3j33i22i29i30.10981j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_rc-vZNq5B4bz-Qa_oorIAQ_31)

[Using Dynamic Anchor Links in React Markdown](https://spin.atomicobject.com/2022/11/17/dynamic-anchor-tags/)

[react-markdown的使用](https://www.cnblogs.com/mbbk/p/react-markdown.html)

[How to Integrate Next, React, Mermaid, and Markdown](https://www.andynanopoulos.com/blog/how-to-integrate-next-react-mermaid-markdown)

[Debugging React Source Code with a React Client App](https://dev.to/arnabchat90/debugging-react-source-code-with-a-react-client-app-1l7)
