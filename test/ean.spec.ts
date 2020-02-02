/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/ean/check';
import fake from '../src/ean/fake';

describe('Generate EAN number', () => {
    it('EAN number', () => {
        const result = fake();
        expect(check(result).valid).to.be.true;
    });
});
