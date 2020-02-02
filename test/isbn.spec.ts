/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/isbn/check';
import fake from '../src/isbn/fake';
import IsbnType from '../src/isbn/IsbnType';

describe('Generate ISBN number', () => {
    it('ISBN 10 number', () => {
        const number = fake(IsbnType.Isbn10);
        const result = check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(IsbnType.Isbn10);
    });

    it('ISBN 13 number', () => {
        const number = fake(IsbnType.Isbn13);
        const result = check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(IsbnType.Isbn13);
    });
});
