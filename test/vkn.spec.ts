/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { vkn } from '../src';

describe('VKN number', () => {
    it('Fake VKN number', () => {
        const number = vkn.fake();
        const result = vkn.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid VKN numbers', () => {
        [
            '729837365',    // Invalid length
            'A734531122',   // Has invalid character (A)
            // Invalid check digit
            '2467878518', '0556170787', '1268513152', '6401133577', '0540865487',
        ].forEach((n) => expect(vkn.check(n).valid).to.be.false);
    });

    it('Valid VKN numbers', () => {
        [
            '0182736450', '4540536920', '1743465722', '1188879150', '2827078826',
            '4173286336', '3552763447', '5324286250', '3703269697', '6499177904',
        ].forEach((n) => expect(vkn.check(n).valid).to.be.true);
    });
});
