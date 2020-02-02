/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/bic/check';
import fake from '../src/bic/fake';

describe('Generate BIC number', () => {
    it('BIC number', () => {
        const result = fake();
        expect(check(result).valid).to.be.true;
    });
});
