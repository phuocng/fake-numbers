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
 * Generate a random SIN (Canadian Social Insurance Number)
 *
 * @see https://en.wikipedia.org/wiki/Social_Insurance_Number
 * @return string
 */
const fake = (): string => {
    // The first digit cannot be 0 or 8
    const first = randomFromArray([1, 2, 3, 4, 5, 6, 7, 9]);
    const partial = randomNumbers(7);
    const checkDigit = luhn([first].concat(partial).concat([0]), DoublePosition.Old);

    return `${first}${partial.join('')}${checkDigit}`;
};

export default fake;
