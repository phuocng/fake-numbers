/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { bn } from '../src';

describe('BN number', () => {
    it('Fake BN number', () => {
        const number = bn.fake();
        const result = bn.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid BN numbers', () => {
        [
            '78741698',      // Invalid length
            '784970527A',    // Has invalid character (A)
            '153536579',     // Invalid check digit
        ].forEach((n) => expect(bn.check(n).valid).to.be.false);
    });

    it('Valid BN numbers', () => {
        [
            '123026635', '787416981', '784970527', '536582737', '153536578',
        ].forEach((n) => expect(bn.check(n).valid).to.be.true);
    });

    it('Valid BN numbers with 15 characters', () => {
        [
            '123026635RC0001', '789585213RP2887', '101403863RT8341', '772832101RM7992', '060772712RT4538',
        ].forEach((n) => expect(bn.check(n).valid).to.be.true);
    });
});
