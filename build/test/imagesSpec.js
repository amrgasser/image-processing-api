"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const main_1 = __importDefault(require("../main"));
const request = (0, supertest_1.default)(main_1.default);
describe('Test endpoint responses', () => {
    it('get image formating endpoint with correct params', (done) => {
        request.get('/api/images/fjord?height=200&width=200').then((res) => {
            expect(res.status).toBe(200);
            done();
        });
    });
    it('API should throw error', (done) => {
        // expect(() => {
        //     request.get(
        //         '/api/images/SomeRandomName?height=200&width=200'
        //     )
        // }).toThrow(new Error('file not found'));
        // done();
        request.get('/api/images/fjordasdasd?height=200&width=200').then((res) => {
            expect(res.status).toBe(400);
            done();
        });
    });
});
