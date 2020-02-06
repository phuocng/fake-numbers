/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { nric } from '../src';

describe('Generate NRIC number', () => {
    it('NRIC number', () => {
        const number = nric.fake();
        const result = nric.check(number);
        expect(result.valid).to.be.true;
    });
});
