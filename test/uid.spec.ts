/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { uid } from '../src';

describe('Generate UID number', () => {
    it('UID number', () => {
        const number = uid.fake();
        const result = uid.check(number);
        expect(result.valid).to.be.true;
    });
});
