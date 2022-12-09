import supertest from 'supertest';
import app from '../main'

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('get image formating endpoint with correct params', (done) => {
        request.get(
            '/api/images/fjord?height=200&width=200'
        ).then((res) => {
            expect(res.status).toBe(200);
            done();
        })
    });
    it('API should throw error', (done) => {
        // expect(() => {
        //     request.get(
        //         '/api/images/SomeRandomName?height=200&width=200'
        //     )
        // }).toThrow(new Error('file not found'));
        // done();

        request.get(
            '/api/images/fjordasdasd?height=200&width=200'
        ).then((res) => {
            expect(res.status).toBe(400);
            done();
        })
    });
});
