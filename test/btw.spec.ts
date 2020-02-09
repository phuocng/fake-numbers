/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { btw } from '../src';

describe('Generate BTW number', () => {
    it('BTW number', () => {
        const number = btw.fake();
        const result = btw.check(number);
        expect(result.valid).to.be.true;
    });
});
