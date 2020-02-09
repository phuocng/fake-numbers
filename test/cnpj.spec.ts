/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { cnpj } from '../src';

describe('Generate CNPJ number', () => {
    it('CNPJ number', () => {
        const number = cnpj.fake();
        const result = cnpj.check(number);
        expect(result.valid).to.be.true;
    });
});
