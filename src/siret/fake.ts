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
 * Generate a random SIRET
 *
 * @see https://en.wikipedia.org/wiki/SIRET_code
 * @return string
 */
const fake = (): string => {
    const partial = randomNumbers(13);

    const checkDigit = luhn(partial, DoublePosition.Even);
    return `${partial.join('')}${checkDigit}`;
};

export default fake;
