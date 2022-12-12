import supertest from 'supertest';
import app from '../main';
import { isFullExists, isThumbExists } from '../main/utilities/pathUtils';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('it should return status 200', (done) => {
    request.get('/api/images/fjord?height=200&width=200').then((res) => {
      expect(res.status).toBe(200);
      done();
    });
  });
  it('should return true with image formated', (done) => {
    request
      .get('/api/images/icelandwaterfall?height=200&width=200')
      .then((res) => {
        expect(isThumbExists('icelandwaterfall', 200, 200)).toBe(true);
        done();
      });
  });
  it('API should throw error incorrect height param', (done) => {
    request.get('/api/images/palmtunnel?height=20s0&width=200').then((res) => {
      expect(res.text).toBe('Invalid format for height or width');
      done();
    });
  });
  it('API should throw error file not found', (done) => {
    const randomName = 'SomeRandomName';
    request
      .get(`/api/images/${randomName}?height=200&width=200`)
      .then((res) => {
        expect(res.text).toBe('file not found');
        done();
      });
  });
});
