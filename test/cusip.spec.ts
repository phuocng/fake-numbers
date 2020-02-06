/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { cusip } from '../src';

describe('Generate CUSIP number', () => {
    it('CUSIP number', () => {
        const number = cusip.fake();
        const result = cusip.check(number);
        expect(result.valid).to.be.true;
    });
});
