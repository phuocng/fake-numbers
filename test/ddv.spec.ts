/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { ddv } from '../src';

describe('DDV number', () => {
    it('Fake DDV number', () => {
        const number = ddv.fake();
        const result = ddv.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid DDV numbers', () => {
        [
            '4831311',      // Invalid length
            'A8313114',     // Has invalid character (A)
            '48313113',     // Invalid check digits
        ].forEach((n) => expect(ddv.check(n).valid).to.be.false);
    });

    it('Valid DDV numbers', () => {
        [   '50223054', '48313114', '65270304', '37351168', '68323204',
        ].forEach((n) => expect(ddv.check(n).valid).to.be.true);
    });

    it('Valid DDV numbers with SI prefix', () => {
        [
            'SI85377767', 'SI11526874', 'SI65121384', 'SI71631615', 'SI73952818',
        ].forEach((n) => expect(ddv.check(n).valid).to.be.true);
    });
});
