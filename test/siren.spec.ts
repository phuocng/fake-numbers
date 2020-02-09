/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { siren } from '../src';

describe('Generate SIREN number', () => {
    it('SIREN number', () => {
        const number = siren.fake();
        const result = siren.check(number);
        expect(result.valid).to.be.true;
    });
});
