/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { ismn } from '../src';

describe('Generate ISMN number', () => {
    it('ISMN number', () => {
        const number = ismn.fake();
        const result = ismn.check(number);
        expect(result.valid).to.be.true;
    });

    it('ISMN 10 number', () => {
        const number = ismn.fake(ismn.IsmnType.Ismn10);
        const result = ismn.check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(ismn.IsmnType.Ismn10);
    });

    it('ISMN 13 number', () => {
        const number = ismn.fake(ismn.IsmnType.Ismn13);
        const result = ismn.check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(ismn.IsmnType.Ismn13);
    });
});
