/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { nif } from '../src';

describe('Generate NIF number', () => {
    it('NIF number', () => {
        const number = nif.fake();
        const result = nif.check(number);
        expect(result.valid).to.be.true;
    });
});
