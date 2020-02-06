/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { ean } from '../src';

describe('Generate EAN number', () => {
    it('EAN number', () => {
        const number = ean.fake();
        const result = ean.check(number);
        expect(result.valid).to.be.true;
    });
});
