/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

// Test the type definitions
import { creditCard, CreditCardType } from './index.d';

const creditCardNumber = creditCard.fake(CreditCardType.AmericanExpress);
const valid = creditCard.check(creditCardNumber).valid;
