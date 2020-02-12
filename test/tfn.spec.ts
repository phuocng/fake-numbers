/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { tfn } from '../src';

describe('TFN number', () => {
    it('Fake and check TFN number', () => {
        const number = tfn.fake();
        const result = tfn.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid TFN numbers', () => {
        [
            '1234567',      // Invalid length
            'A82126453',    // Invalid character (A)
            '954396731',    // Invalid check digits
        ].forEach((n) => expect(tfn.check(n).valid).to.be.false);
    });

    it('Valid TFN numbers', () => {
        [
            '123456782',
            '782126453',
            '654396731',
            '97122510',
            '83368376',
        ].forEach((n) => expect(tfn.check(n).valid).to.be.true);
    });

    it('Valid TFN numbers with spaces', () => {
        [
            '123 456 782',
            '782   126   453',
            '654   396    731',
        ].forEach((n) => expect(tfn.check(n).valid).to.be.true);
    });
});
