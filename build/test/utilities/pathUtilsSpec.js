"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathUtils_1 = require("../../main/utilities/pathUtils");
describe('Test suite for path utils functions', () => {
    describe('testing full images paths', () => {
        it('should return true fjord.jpg image exists', () => {
            expect((0, pathUtils_1.isFullExists)('fjord')).toBeTrue();
        });
        it('should return false given wrong image', () => {
            expect((0, pathUtils_1.isFullExists)('fjorddd')).toBeFalse();
        });
    });
    describe('testing thumb paths', () => {
        it('should return true fjord.jpg with height 200 and width 200 image exists', () => {
            expect((0, pathUtils_1.isThumbExists)('fjord', 200, 200)).toBeTrue();
        });
        it('should return false given wrong image name and dimensions', () => {
            expect((0, pathUtils_1.isThumbExists)('fjorddd', 100, 200)).toBeFalse();
        });
    });
});
