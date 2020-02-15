/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { trn } from '../src';

describe('TRN number', () => {
    it('Fake TRN number', () => {
        const number = trn.fake();
        const result = trn.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid TRN numbers', () => {
        [
            '184417687',    // Invalid length
            '4279747808',   // Invalid first digit
            // Invalid check digit
            '9253812343', '9224178626', '3264511994', '9423556192', '0782638937',
            '3317946817', '2068831152', '1673367875', '0491325289', '1465284817',
        ].forEach((n) => expect(trn.check(n).valid).to.be.false);
    });

    it('Valid TRN numbers', () => {
        [
            '0001339050', '0843089848', '1452848656', '0574132858', '0936717479',
            '3189538907', '0416172401', '3861406498', '3345131233', '1514472735',
        ].forEach((n) => expect(trn.check(n).valid).to.be.true);
    });
});
