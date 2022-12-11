## setup package
```bash
# if use yarn 
yarn add -D eslint-config-prettier  eslint-plugin-jest-dom husky msw prettier
```
### set up command 
- Lint test and format add to package.json in scrtip
```bash
"lint": "eslint  --ignore-path .gitignore .",
"format": "prettier  --ignore-path .gitignore --write \"**/*.{ts,tsc,css,scss}\"",
"coverage": "react-scripts test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{type,stories,constants,test,spec}.{ts,tsx}'",
```
- in package.json in eslintConfig add

```bash
 "plugin:jest-dom/recommended",
 "eslint-config-prettier"
```
### set up husky
#### in ./husky/pre-commit file add
```bash 
npx lint-staged
```

### set up mock API use 
- moreInfo in: [MSWJS](https://mswjs.io/)
- Create file src/mocks/server.ts: set up server
```ts
// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
```

- create file src/mocks/handlers.ts: set up api mock
```ts
import { rest } from 'msw';

export const handlers = [
    // mock api example
  rest.get('https://jsonplaceholder.typicode.com/users', (rq, rs, ct) => {
    return rs(
      ct.status(200),
      ct.json([
        {
          name: 'tes api',
        },
        {
          name: 'test api',
        },
      ])
    );
  }),
];

```

## in the src/setupTest.ts add 
```ts
import { server } from './mocks/server';
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
```