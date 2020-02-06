/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { imo } from '../src';

describe('Generate IMO number', () => {
    it('IMO number', () => {
        const number = imo.fake();
        const result = imo.check(number);
        expect(result.valid).to.be.true;
    });
});
