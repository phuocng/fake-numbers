/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { sedol } from '../src';

describe('Generate SEDOL number', () => {
    it('SEDOL number', () => {
        const number = sedol.fake();
        const result = sedol.check(number);
        expect(result.valid).to.be.true;
    });
});
