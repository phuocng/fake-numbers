/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn, { DoublePosition } from '../utils/luhn';
import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random Canadian Business Number
 *
 * @returns string
 */
const fake = (): string => {
    const firstEightDigits = randomNumbers(8);
    const ninthDigit = luhn(firstEightDigits, DoublePosition.Old);
    const firstPart = firstEightDigits.concat([ninthDigit]).join('');

    const length = randomFromArray([9, 15]);
    switch (length) {
        case 15:
            const identifier = randomFromArray(['RC', 'RM', 'RP', 'RT']);
            const lastFourDigits = randomNumbers(4).join('');
            return `${firstPart}${identifier}${lastFourDigits}`;

        case 9:
        default:
            return firstPart;
    }
};

export default fake;
