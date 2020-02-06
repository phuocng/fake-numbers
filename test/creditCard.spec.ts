/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { creditCard, CreditCardType } from '../src';

describe('Generate credit card number', () => {
    it('Credit card', () => {
        const number = creditCard.fake();
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
    });

    it('American Express card', () => {
        const number = creditCard.fake(CreditCardType.AmericanExpress);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.AmericanExpress);
    });

    it('Discover card', () => {
        const number = creditCard.fake(CreditCardType.Discover);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Discover);
    });

    it('Jcb card', () => {
        const number = creditCard.fake(CreditCardType.Jcb);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Jcb);
    });

    it('Maestro card', () => {
        const number = creditCard.fake(CreditCardType.Maestro);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Maestro);
    });

    it('Master card', () => {
        const number = creditCard.fake(CreditCardType.Master);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Master);
    });

    it('Visa card', () => {
        const number = creditCard.fake(CreditCardType.Visa);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Visa);
    });

    it('Dankort card', () => {
        const number = creditCard.fake(CreditCardType.Dankort);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Dankort);
    });

    it('Dinner Club card', () => {
        const number = creditCard.fake(CreditCardType.DinnerClub);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.DinnerClub);
    });

    it('Dinner Club US card', () => {
        const number = creditCard.fake(CreditCardType.DinnerClubUs);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.DinnerClubUs);
    });

    it('Forbrugsforeningen card', () => {
        const number = creditCard.fake(CreditCardType.Forbrugsforeningen);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Forbrugsforeningen);
    });

    it('Laser card', () => {
        const number = creditCard.fake(CreditCardType.Laser);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Laser);
    });

    it('Solo card', () => {
        const number = creditCard.fake(CreditCardType.Solo);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.Solo);
    });

    it('Union Pay card', () => {
        const number = creditCard.fake(CreditCardType.UnionPay);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.UnionPay);
    });

    it('Visa Electron card', () => {
        const number = creditCard.fake(CreditCardType.VisaElectron);
        const result = creditCard.check(number);

        expect(result.valid).to.be.true;
        expect(result.meta).to.include(CreditCardType.VisaElectron);
    });
});
