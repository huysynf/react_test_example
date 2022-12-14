
### Start App
`yarn start`
### Test app
`yarn test`

### Build App
`yarn build`
### More information
- [Jest test js](https://jestjs.io/docs/getting-started) 
- [Query get Element](https://testing-library.com/docs/queries/about/)
- [User event](https://testing-library.com/docs/dom-testing-library/api-events)
- [More react Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## setup test
- [setup test](SETUPTEST.md)
- [convention test](CONVENTIONTEST.md)


# all package
```bash 
yarn add @reduxjs/toolkit dotenv react-redux sass plugin:jest-dom/recommended  eslint-config-prettier
 yarn add -D eslint-config-prettier eslint-plugin-jest-dom  husky  msw prettier
```

## testing example 
-   Redux hook : [src/__tests__/user-display.test.tsx](/src/__tests__/user-display.test.tsx)
-  React router: [src/__tests__/test-router.test.tsx](/src/__tests__/test-router.test.tsx)
-  Props Action: [src/__tests__/counter-two.test.tsx](/src/__tests__/counter-two.test.tsx)
- Basic test [src/__tests__/counter.test.tsx](/src/__tests__/counter.test.tsx)

## folder structer
- src: file source
- src/`__tests__`: test file
- src/mocks: mock test
- src/layouts:layout file
- src/pages:pages file
- src/app: reducer set up
- src/utils: utils file
- src/features: reducer feature
- src/components: components

