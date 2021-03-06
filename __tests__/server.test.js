'use strict';

const server = require('../server.js');

const superTest = require('supertest');
const serverRequest = superTest(server.app);

describe('Testing Server', () => {
    it('handles not found routes', async() => {
        let response = await serverRequest.get('/not-found-route');
        expect(response.status).toEqual(404);
    });

    it('handles errors', async() => {
        let response = await serverRequest.get('/bad-request');
        expect(response.status).toEqual(500);
    });
    it('handle home route', async() => {
        let response = await serverRequest.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello world');
    });
});