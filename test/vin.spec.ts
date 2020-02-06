/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { vin } from '../src';

describe('Generate VIN number', () => {
    it('VIN number', () => {
        const number = vin.fake();
        const result = vin.check(number);
        expect(result.valid).to.be.true;
    });
});
