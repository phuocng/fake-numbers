/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { acn } from '../src';

describe('ACN number', () => {
    it('Fake ACN number', () => {
        const number = acn.fake();
        const result = acn.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid ACN numbers', () => {
        [
            '24644115',     // Invalid length
            '81331138A',    // Has invalid character (A)
            '298678288',    // Invalid check digits
        ].forEach((n) => expect(acn.check(n).valid).to.be.false);
    });

    it('Valid ACN numbers', () => {
        [
            '246441154', '813311385', '298678289', '782160392', '927565062',
        ].forEach((n) => expect(acn.check(n).valid).to.be.true);
    });

    it('Valid ACN numbers with spaces', () => {
        [
            // https://asic.gov.au/for-business/registering-a-company/steps-to-register-a-company/australian-company-numbers/australian-company-number-digit-check/
            '000 000 019', '000 250 000', '000 500 005', '000 750 005', '001 000 004',
            '001 250 004', '001 500 009', '001 749 999', '001 999 999', '002 249 998',
            '002 499 998', '002 749 993', '002 999 993', '003 249 992', '003 499 992',
            '003 749 988', '003 999 988', '004 249 987', '004 499 987', '004 749 982',
            '004 999 982', '005 249 981', '005 499 981', '005 749 986', '005 999 977',
            '006 249 976', '006 499 976', '006 749 980', '006 999 980', '007 249 989',
            '007 499 989', '007 749 975', '007 999 975', '008 249 974', '008 499 974',
            '008 749 979', '008 999 979', '009 249 969', '009 499 969', '009 749 964',
            '009 999 964', '010 249 966', '010 499 966', '010 749 961',
        ].forEach((n) => expect(acn.check(n).valid).to.be.true);
    });
});
