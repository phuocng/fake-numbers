/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { rtn } from '../src';

describe('Generate RTN number', () => {
    it('RTN number', () => {
        const number = rtn.fake();
        const result = rtn.check(number);
        expect(result.valid).to.be.true;
    });
});
