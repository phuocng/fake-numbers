/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { anum } from '../src';

describe('ANUM number', () => {
    it('Fake ANUM number', () => {
        const number = anum.fake();
        const result = anum.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid ANUM numbers', () => {
        [
            '6623986',      // Invalid length
            'A7493094',     // Has invalid character (A)
            '38215891',     // Invalid check digits
        ].forEach((n) => expect(anum.check(n).valid).to.be.false);
    });

    it('Valid ANUM numbers', () => {
        [
            '12892312', '88636296', '60128195', '22745785', '95318806', '36856369',
        ].forEach((n) => expect(anum.check(n).valid).to.be.true);
    });

    it('Valid ANUM numbers with HU prefix', () => {
        [
            'HU81140406', 'HU44455365', 'HU51748661', 'HU56485156', 'HU52143179',
        ].forEach((n) => expect(anum.check(n).valid).to.be.true);
    });
});
