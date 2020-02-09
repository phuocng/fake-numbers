/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { siret } from '../src';

describe('Generate SIRET number', () => {
    it('SIRET number', () => {
        const number = siret.fake();
        const result = siret.check(number);
        expect(result.valid).to.be.true;
    });
});
