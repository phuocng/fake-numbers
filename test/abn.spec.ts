/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { abn } from '../src';

describe('ABN number', () => {
    it('Fake ABN number', () => {
        const number = abn.fake();
        const result = abn.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid ABN numbers', () => {
        expect(abn.check('7558041236').valid).to.be.false;  // Invalid length
        expect(abn.check('A4522250218').valid).to.be.false; // Has invalid character (A)
        expect(abn.check('16752104342').valid).to.be.false; // Invalid check digits
    });

    it('Valid ABN numbers', () => {
        expect(abn.check('75580412363').valid).to.be.true;
        expect(abn.check('54522250218').valid).to.be.true;
        expect(abn.check('15752104342').valid).to.be.true;
    });

    it('Valid ABN number with spaces', () => {
        expect(abn.check('75 580 412 363').valid).to.be.true;
        expect(abn.check('54  522  250  218').valid).to.be.true;
        expect(abn.check('15 752   104  342').valid).to.be.true;
    });
});
