/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { svnr } from '../src';

describe('SVNR number', () => {
    it('Fake SVNR number', () => {
        const number = svnr.fake();
        const result = svnr.check(number);
        expect(result.valid).to.be.true;
    });

    it('Valid SVNR numbers', () => {
        [
            '1237 010180', '4298021282', '5659081577', '8852041693', '5497042152',
        ].forEach((n) => expect(svnr.check(n).valid).to.be.true);
    });

    it('Invalid SVNR numbers', () => {
        [
            '4298001282', '1508-10-13-50', '1508101051', '4290021282', '21 34 23 12 74',
        ].forEach((n) => expect(svnr.check(n).valid).to.be.false);
    });
});
