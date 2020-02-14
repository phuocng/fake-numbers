/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { alv } from '../src';

describe('ALV number', () => {
    it('Fake ALV number', () => {
        const number = alv.fake();
        const result = alv.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid ALV numbers', () => {
        [
            '1572860',      // Invalid length
            '1572860A',     // Has invalid character (A)
            '07375463',     // Invalid check digits
            '165731710',    // remainder = 10
        ].forEach((n) => expect(alv.check(n).valid).to.be.false);
    });

    it('Valid ALV numbers', () => {
        [
            '20774740', '15728600', '07375462', '27297254', '10416157',
        ].forEach((n) => expect(alv.check(n).valid).to.be.true);
    });

    it('Valid ALV numbers with FI prefix', () => {
        [
            'FI72647209', 'FI86262369', 'FI52822321', 'FI02280456', 'FI21278423',
        ].forEach((n) => expect(alv.check(n).valid).to.be.true);
    });
});
