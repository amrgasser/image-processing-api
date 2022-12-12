import supertest from 'supertest';
import app from '../main';
import { isThumbExists } from '../main/utilities/pathUtils'

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('it should return status 200', (done) => {
        request.get('/api/images/fjord?height=200&width=200').then((res) => {
            expect(res.status).toBe(200);
            done();
        });
    });
    it('should return true with image formated', (done) => {
        request.get('/api/images/fjord?height=200&width=200').then((res) => {
            expect(isThumbExists('fjord', 200, 200)).toBe(true);
            done();
        });
    });
    it('should return false with incorrect height param', (done) => {
        request.get('/api/images/fjord?height=20s0&width=200').then((res) => {
            expect(isThumbExists('fjord', 200, 200)).toBe(false);
            done();
        });
    });
    it('API should throw error', (done) => {
        request
            .get('/api/images/SomeRandomName?height=200&width=200')
            .then((res) => {
                expect(res.status).toBe(400);
                done();
            });
    });
});
