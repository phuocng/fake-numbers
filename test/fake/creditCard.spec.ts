/**
 * Generate a fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import checkCreditCard from '../../src/check/checkCreditCard';
import { CreditCardType } from '../../src/fake/CreditCardType';
import fakeCreditCard from '../../src/fake/fakeCreditCard';

describe('Generate credit card number', () => {
    it('American Express card', () => {
        const result = fakeCreditCard(CreditCardType.AmericanExpress);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.AmericanExpress);
    });

    it('Discover card', () => {
        const result = fakeCreditCard(CreditCardType.Discover);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.Discover);
    });

    it('Jcb card', () => {
        const result = fakeCreditCard(CreditCardType.Jcb);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.Jcb);
    });

    it('Maestro card', () => {
        const result = fakeCreditCard(CreditCardType.Maestro);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.Maestro);
    });

    it('Master card', () => {
        const result = fakeCreditCard(CreditCardType.Master);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.Master);
    });

    it('Visa card', () => {
        const result = fakeCreditCard(CreditCardType.Visa);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.Visa);
    });

    it('Dankort card', () => {
        const result = fakeCreditCard(CreditCardType.Dankort);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.Dankort);
    });

    it('Dinner Club card', () => {
        const result = fakeCreditCard(CreditCardType.DinnerClub);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.DinnerClub);
    });

    it('Dinner Club US card', () => {
        const result = fakeCreditCard(CreditCardType.DinnerClubUs);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.DinnerClubUs);
    });

    it('Forbrugsforeningen card', () => {
        const result = fakeCreditCard(CreditCardType.Forbrugsforeningen);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.Forbrugsforeningen);
    });

    it('Laser card', () => {
        const result = fakeCreditCard(CreditCardType.Laser);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.Laser);
    });

    it('Solo card', () => {
        const result = fakeCreditCard(CreditCardType.Solo);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.Solo);
    });

    it('Union Pay card', () => {
        const result = fakeCreditCard(CreditCardType.UnionPay);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.UnionPay);
    });

    it('Visa Electron card', () => {
        const result = fakeCreditCard(CreditCardType.VisaElectron);
        const cardType = checkCreditCard(result);

        expect(cardType).to.include(CreditCardType.VisaElectron);
    });
});
