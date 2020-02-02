/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/ismn/check';
import fake from '../src/ismn/fake';
import IsmnType from '../src/ismn/IsmnType';

describe('Generate ISMN number', () => {
    it('ISMN number', () => {
        const number = fake();
        const result = check(number);
        expect(result.valid).to.be.true;
    });

    it('ISMN 10 number', () => {
        const number = fake(IsmnType.Ismn10);
        const result = check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(IsmnType.Ismn10);
    });

    it('ISMN 13 number', () => {
        const number = fake(IsmnType.Ismn13);
        const result = check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(IsmnType.Ismn13);
    });
});
