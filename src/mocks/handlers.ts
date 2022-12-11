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
