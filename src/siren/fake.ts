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
 * Generate a random SIREN
 *
 * @see https://en.wikipedia.org/wiki/SIREN_code
 * @return string
 */
const fake = (): string => {
    // Start with 1 or 2
    const first = randomFromArray([1, 2]);
    const partial = randomNumbers(7);

    const checkDigit = luhn([first].concat(partial), DoublePosition.Old);
    return `${first}${partial.join('')}${checkDigit}`;
};

export default fake;
