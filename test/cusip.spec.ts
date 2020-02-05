/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/cusip/check';
import fake from '../src/cusip/fake';

describe('Generate CUSIP number', () => {
    it('CUSIP number', () => {
        const number = fake();
        console.log(number);
        const result = check(number);
        expect(result.valid).to.be.true;
    });
});
