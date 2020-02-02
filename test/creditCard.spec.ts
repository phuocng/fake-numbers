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
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.AmericanExpress);
    });

    it('Discover card', () => {
        const result = fake(CreditCardType.Discover);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.Discover);
    });

    it('Jcb card', () => {
        const result = fake(CreditCardType.Jcb);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.Jcb);
    });

    it('Maestro card', () => {
        const result = fake(CreditCardType.Maestro);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.Maestro);
    });

    it('Master card', () => {
        const result = fake(CreditCardType.Master);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.Master);
    });

    it('Visa card', () => {
        const result = fake(CreditCardType.Visa);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.Visa);
    });

    it('Dankort card', () => {
        const result = fake(CreditCardType.Dankort);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.Dankort);
    });

    it('Dinner Club card', () => {
        const result = fake(CreditCardType.DinnerClub);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.DinnerClub);
    });

    it('Dinner Club US card', () => {
        const result = fake(CreditCardType.DinnerClubUs);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.DinnerClubUs);
    });

    it('Forbrugsforeningen card', () => {
        const result = fake(CreditCardType.Forbrugsforeningen);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.Forbrugsforeningen);
    });

    it('Laser card', () => {
        const result = fake(CreditCardType.Laser);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.Laser);
    });

    it('Solo card', () => {
        const result = fake(CreditCardType.Solo);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.Solo);
    });

    it('Union Pay card', () => {
        const result = fake(CreditCardType.UnionPay);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.UnionPay);
    });

    it('Visa Electron card', () => {
        const result = fake(CreditCardType.VisaElectron);
        const checkResult = check(result);

        expect(checkResult.valid).to.be.true;
        expect(checkResult.meta).to.include(CreditCardType.VisaElectron);
    });
});
