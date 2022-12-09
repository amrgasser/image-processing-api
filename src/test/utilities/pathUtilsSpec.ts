import { isFullExists, isThumbExists } from '../../main/utilities/pathUtils';

describe('Test suite for path utils functions', () => {
  describe('testing full images paths', () => {
    it('should return true fjord.jpg image exists', () => {
      expect(isFullExists('fjord')).toBeTrue();
    });

    it('should return false given wrong image', () => {
      expect(isFullExists('fjorddd')).toBeFalse();
    });
  });

  describe('testing thumb paths', () => {
    it('should return true fjord.jpg with height 200 and width 200 image exists', () => {
      expect(isThumbExists('fjord', 200, 200)).toBeTrue();
    });

    it('should return false given wrong image name and dimensions', () => {
      expect(isThumbExists('fjorddd', 100, 200)).toBeFalse();
    });
  });
});
