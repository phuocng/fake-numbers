/**
 * Generate a fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn, { DoublePosition } from '../utils/luhn';
import randomFromArray from '../utils/randomFromArray';
import randomFromRange from '../utils/randomFromRange';

import { CreditCardMap, CreditCardType } from './CreditCardType';

const fakeCreditCard = (type: CreditCardType): string => {
    if (!CreditCardMap.has(type)) {
        return '';
    }
    const format = CreditCardMap.get(type);
    const length = randomFromArray(format.length);
    const prefix = randomFromArray(format.prefix);
    const prefixLength = prefix.length;

    if (length <= prefixLength) {
        return '';
    }

    const cardNumber = `${prefix}${Array(length - prefixLength - 1).fill(0).map((_, __) => randomFromRange(0, 9)).join('')}`;
    const reversed = cardNumber.split('').map((c) => parseInt(c, 10)).reverse();
    const finalDigit = luhn(reversed, DoublePosition.Even);

    return `${cardNumber}${finalDigit}`;
};

export default fakeCreditCard;
