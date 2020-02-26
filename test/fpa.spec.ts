/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { fpa } from '../src';

describe('FPA number', () => {
    it('Fake FPA number', () => {
        const number = fpa.fake();
        const result = fpa.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid FPA numbers', () => {
        [
            '5852982501',   // Invalid length
            'A41380028',    // Has invalid character (A)
            '075544358',    // Invalid check digits
        ].forEach((n) => expect(fpa.check(n).valid).to.be.false);
    });

    it('Valid FPA numbers', () => {
        [
            '94259216', '094259216', '452317272', '133873851', '349708115',
        ].forEach((n) => expect(fpa.check(n).valid).to.be.true);
    });

    it('Valid FPA numbers with GR/EL prefix', () => {
        [
            'GR94259216', 'EL094259216', 'GR644264834', 'EL070681562', 'GR724852275',
        ].forEach((n) => expect(fpa.check(n).valid).to.be.true);
    });
});
