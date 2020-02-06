/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { creditCard } from '../src';

describe('Generate credit card number', () => {
    it('Credit card', () => {
        const number = creditCard.fake();
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
    });

    it('American Express card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.AmericanExpress);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.AmericanExpress);
    });

    it('Discover card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.Discover);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.Discover);
    });

    it('Jcb card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.Jcb);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.Jcb);
    });

    it('Maestro card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.Maestro);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.Maestro);
    });

    it('Master card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.Master);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.Master);
    });

    it('Visa card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.Visa);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.Visa);
    });

    it('Dankort card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.Dankort);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.Dankort);
    });

    it('Dinner Club card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.DinnerClub);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.DinnerClub);
    });

    it('Dinner Club US card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.DinnerClubUs);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.DinnerClubUs);
    });

    it('Forbrugsforeningen card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.Forbrugsforeningen);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.Forbrugsforeningen);
    });

    it('Laser card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.Laser);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.Laser);
    });

    it('Solo card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.Solo);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.Solo);
    });

    it('Union Pay card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.UnionPay);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.UnionPay);
    });

    it('Visa Electron card', () => {
        const number = creditCard.fake(creditCard.CreditCardType.VisaElectron);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(creditCard.CreditCardType.VisaElectron);
    });
});
