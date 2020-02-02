/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/sedol/check';
import fake from '../src/sedol/fake';

describe('Generate SEDOL number', () => {
    it('SEDOL number', () => {
        const number = fake();
        const result = check(number);
        expect(result.valid).to.be.true;
    });
});
