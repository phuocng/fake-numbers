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
        const result = fake(CreditCardType.AmericanExpress);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.AmericanExpress);
    });

    it('Discover card', () => {
        const result = fake(CreditCardType.Discover);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.Discover);
    });

    it('Jcb card', () => {
        const result = fake(CreditCardType.Jcb);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.Jcb);
    });

    it('Maestro card', () => {
        const result = fake(CreditCardType.Maestro);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.Maestro);
    });

    it('Master card', () => {
        const result = fake(CreditCardType.Master);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.Master);
    });

    it('Visa card', () => {
        const result = fake(CreditCardType.Visa);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.Visa);
    });

    it('Dankort card', () => {
        const result = fake(CreditCardType.Dankort);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.Dankort);
    });

    it('Dinner Club card', () => {
        const result = fake(CreditCardType.DinnerClub);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.DinnerClub);
    });

    it('Dinner Club US card', () => {
        const result = fake(CreditCardType.DinnerClubUs);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.DinnerClubUs);
    });

    it('Forbrugsforeningen card', () => {
        const result = fake(CreditCardType.Forbrugsforeningen);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.Forbrugsforeningen);
    });

    it('Laser card', () => {
        const result = fake(CreditCardType.Laser);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.Laser);
    });

    it('Solo card', () => {
        const result = fake(CreditCardType.Solo);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.Solo);
    });

    it('Union Pay card', () => {
        const result = fake(CreditCardType.UnionPay);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.UnionPay);
    });

    it('Visa Electron card', () => {
        const result = fake(CreditCardType.VisaElectron);
        const cardType = check(result);

        expect(cardType).to.include(CreditCardType.VisaElectron);
    });
});
