/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { cpf } from '../src';

describe('Generate CPF number', () => {
    it('CPF number', () => {
        const number = cpf.fake();
        const result = cpf.check(number);
        expect(result.valid).to.be.true;
    });
});
