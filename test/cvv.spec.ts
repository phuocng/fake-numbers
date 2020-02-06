/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { cvv } from '../src';

describe('Generate CVV number', () => {
    it('CVV number', () => {
        const number = cvv.fake();
        const result = cvv.check(number);
        expect(result.valid).to.be.true;
    });
});
