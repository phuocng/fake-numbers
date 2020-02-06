/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { isbn, IsbnType } from '../src';

describe('Generate ISBN number', () => {
    it('ISBN number', () => {
        const number = isbn.fake();
        const result = isbn.check(number);
        expect(result.valid).to.be.true;
    });

    it('ISBN 10 number', () => {
        const number = isbn.fake(IsbnType.Isbn10);
        const result = isbn.check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(IsbnType.Isbn10);
    });

    it('ISBN 13 number', () => {
        const number = isbn.fake(IsbnType.Isbn13);
        const result = isbn.check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(IsbnType.Isbn13);
    });
});
