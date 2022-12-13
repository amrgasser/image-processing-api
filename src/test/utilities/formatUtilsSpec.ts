import { format } from '../../main/utilities/formatUtils'
import { isThumbExists } from '../../main/utilities/pathUtils';

describe('Testing format utilities', () => {
    it('should return correct response', (done) => {
        format('santamonica', 200, 200).then(() => {
            expect(isThumbExists('santamonica', 200, 200)).toBe(true);
            done();
        })
    })
})
