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
        [
            '705481783',    // Invalid length
            'A5051470610',  // Has invalid character (A)
            '15564594618',  // Invalid check digits
        ].forEach((n) => expect(abn.check(n).valid).to.be.false);
    });

    it('Valid ABN numbers', () => {
        [
            '83914571673',
            '51824753556',
            '70548178358',
            '25051470610',
            '16564594618',
        ].forEach((n) => expect(abn.check(n).valid).to.be.true);
    });

    it('Valid ABN numbers with spaces', () => {
        [
            '70 548 178 358',
            '25   051   470   610',
            '16  564   594    618',
            '28 043 145 470',
            '65 497 794 289',
            '46 527 394 509',
            '99 070 045 359',
            '98 860 905 153',
            '53 106 288 699',
            '51 008 129 511',
            '43 500 713 236',
            '72 342 387 170',
            '21 188 299 895',
            '55 914 901 347',
            '92 638 328 368',
        ].forEach((n) => expect(abn.check(n).valid).to.be.true);
    });
});
