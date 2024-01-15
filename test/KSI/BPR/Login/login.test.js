import request from 'supertest';

const apiUrl = 'https://staging--adminbpr.netlify.app/api-v1/';

test('Verify Admin BPR Login', async () => {
  const response = await request(apiUrl)
    .post('authentication/login')
    .send({
      email: 'qa.it+bpr12@komunal.co.id',
      password: `BPR@kom123`,
      user_level: 1
    })
    .set('Accept', 'application/json');
  const { body } = response;
  expect(response.status).toBe(200);
});
