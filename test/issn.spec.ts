/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { issn } from '../src';

describe('Generate ISSN number', () => {
    it('ISSN number', () => {
        const number = issn.fake();
        const result = issn.check(number);
        expect(result.valid).to.be.true;
    });
});
