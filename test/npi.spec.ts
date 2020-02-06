/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { npi } from '../src';

describe('Generate NPI number', () => {
    it('NPI number', () => {
        const number = npi.fake();
        const result = npi.check(number);
        expect(result.valid).to.be.true;
    });
});
