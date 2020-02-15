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
 * Generate a random South African Tax Reference Number
 *
 * @see https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/South-Africa-TIN.pdf
 * @returns string
 */
const fake = (): string => {
    // The first must be 0, 1, 2, 3 or 9
    const first = randomFromArray([0, 1, 2, 3, 9]);
    const partial = [first].concat(randomNumbers(8));

    const cd = luhn(partial, DoublePosition.Even);

    return `${partial.join('')}${cd}`;
};

export default fake;
