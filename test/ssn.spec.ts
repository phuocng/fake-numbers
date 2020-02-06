/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { ssn } from '../src';

describe('Generate SSN number', () => {
    it('SSN number', () => {
        const number = ssn.fake();
        const result = ssn.check(number);
        expect(result.valid).to.be.true;
    });
});
