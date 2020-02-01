/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import checkEan from '../../src/check/checkEan';
import fakeEan from '../../src/fake/fakeEan';

describe('Generate EAN number', () => {
    it('EAN number', () => {
        const result = fakeEan();
        expect(checkEan(result)).to.be.true;
    });
});
