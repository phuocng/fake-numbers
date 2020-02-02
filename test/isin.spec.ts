/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/isin/check';
import fake from '../src/isin/fake';

describe('Generate ISIN number', () => {
    it('ISIN number', () => {
        const number = fake();
        const result = check(number);
        expect(result.valid).to.be.true;
    });
});
