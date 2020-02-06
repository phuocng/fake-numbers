/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { bic } from '../src';

describe('Generate BIC number', () => {
    it('BIC number', () => {
        const number = bic.fake();
        const result = bic.check(number);
        expect(result.valid).to.be.true;
    });
});
