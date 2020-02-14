/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn, { DoublePosition } from '../utils/luhn';
import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random UID number (Austrian VAT number)
 *
 * @see https://en.wikipedia.org/wiki/VAT_identification_number
 * @return string
 */
const fake = (): string => {
    const partial = randomNumbers(7);
    const checkDigit = luhn(partial, DoublePosition.Old);
    const remainder = (checkDigit + 6) % 10;

    return `U${partial.join('')}${remainder}`;
};

export default fake;
