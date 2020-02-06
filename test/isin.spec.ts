/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { isin } from '../src';

describe('Generate ISIN number', () => {
    it('ISIN number', () => {
        const number = isin.fake();
        const result = isin.check(number);
        expect(result.valid).to.be.true;
    });
});
