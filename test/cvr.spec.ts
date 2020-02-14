/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { cvr } from '../src';

describe('CVR number', () => {
    it('Fake CVR number', () => {
        const number = cvr.fake();
        const result = cvr.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid CVR numbers', () => {
        [
            '4126869',      // Invalid length
            'A5470571',     // Has invalid character (A)
            '53743880',     // Invalid check digits
        ].forEach((n) => expect(cvr.check(n).valid).to.be.false);
    });

    it('Valid CVR numbers', () => {
        [
            '13585628', '41268697', '45470571', '53743889', '74627021',
        ].forEach((n) => expect(cvr.check(n).valid).to.be.true);
    });

    it('Valid CVR numbers with DK prefix', () => {
        [
            'DK02456133', 'DK15620781', 'DK36342374', 'DK05082420', 'DK73716160'
        ].forEach((n) => expect(cvr.check(n).valid).to.be.true);
    });
});
