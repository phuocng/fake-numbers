/**
 * Generate a fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { equal } from 'assert';

import { CreditCardType } from '../../src/fake/CreditCardType';
import checkCreditCard from '../../src/check/checkCreditCard';
import creditCard from '../../src/fake/creditCard';

describe('Generate credit card number', () => {
    it('American Express card', () => {
        const result = creditCard(CreditCardType.AmericanExpress);
        const cardType = checkCreditCard(result);

        equal(cardType, CreditCardType.AmericanExpress);
    });
});
