/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { svnr } from '../src';

describe('Generate SVNR number', () => {
    it('SVNR number', () => {
        const number = svnr.fake();
        const result = svnr.check(number);
        expect(result.valid).to.be.true;
    });
});
