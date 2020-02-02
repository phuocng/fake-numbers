/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/creditCard/check';
import { CreditCardType } from '../src/creditCard/CreditCardType';
import fake from '../src/creditCard/fake';

describe('Generate credit card number', () => {
    it('American Express card', () => {
        const number = fake(CreditCardType.AmericanExpress);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.AmericanExpress);
    });

    it('Discover card', () => {
        const number = fake(CreditCardType.Discover);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Discover);
    });

    it('Jcb card', () => {
        const number = fake(CreditCardType.Jcb);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Jcb);
    });

    it('Maestro card', () => {
        const number = fake(CreditCardType.Maestro);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Maestro);
    });

    it('Master card', () => {
        const number = fake(CreditCardType.Master);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Master);
    });

    it('Visa card', () => {
        const number = fake(CreditCardType.Visa);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Visa);
    });

    it('Dankort card', () => {
        const number = fake(CreditCardType.Dankort);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Dankort);
    });

    it('Dinner Club card', () => {
        const number = fake(CreditCardType.DinnerClub);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.DinnerClub);
    });

    it('Dinner Club US card', () => {
        const number = fake(CreditCardType.DinnerClubUs);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.DinnerClubUs);
    });

    it('Forbrugsforeningen card', () => {
        const number = fake(CreditCardType.Forbrugsforeningen);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Forbrugsforeningen);
    });

    it('Laser card', () => {
        const number = fake(CreditCardType.Laser);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Laser);
    });

    it('Solo card', () => {
        const number = fake(CreditCardType.Solo);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Solo);
    });

    it('Union Pay card', () => {
        const number = fake(CreditCardType.UnionPay);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.UnionPay);
    });

    it('Visa Electron card', () => {
        const number = fake(CreditCardType.VisaElectron);
        const result = check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.VisaElectron);
    });
});
