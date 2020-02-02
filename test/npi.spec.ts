/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/npi/check';
import fake from '../src/npi/fake';

describe('Generate NPI number', () => {
    it('NPI number', () => {
        const number = fake();
        const result = check(number);
        expect(result.valid).to.be.true;
    });
});