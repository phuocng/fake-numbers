/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/imo/check';
import fake from '../src/imo/fake';

describe('Generate IMO number', () => {
    it('IMO number', () => {
        const number = fake();
        const result = check(number);
        expect(result.valid).to.be.true;
    });
});
