/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { pvm } from '../src';

describe('PVM number', () => {
    it('Fake PVM number', () => {
        const number = pvm.fake();
        const result = pvm.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid PVM numbers', () => {
        [
            '38878381',
            '72241416851',  // Invalid length
            'A41981211',    // Has invalid character (A)
            '624730114',    // Invalid check digits
        ].forEach((n) => expect(pvm.check(n).valid).to.be.false);
    });

    it('Valid PVM numbers', () => {
        [
            '119511515', '100001919017', '100004801610', '173733781616', '463448557118',
            '495168104918', '595388013', '795881613', '488528510', '688818737217',
        ].forEach((n) => expect(pvm.check(n).valid).to.be.true);
    });

    it('Valid PVM numbers with LT prefix', () => {
        [
            'LT313372217', 'LT117371819216', 'LT684486283214', 'LT444469918', 'LT887602513',
            'LT805153817911', 'LT824083012', 'LT753812614', 'LT121215612', 'LT366416714',
        ].forEach((n) => expect(pvm.check(n).valid).to.be.true);
    });
});
