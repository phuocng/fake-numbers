/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { sin } from '../src';

describe('Generate SIN number', () => {
    it('SIN number', () => {
        const number = sin.fake();
        const result = sin.check(number);
        expect(result.valid).to.be.true;
    });
});
