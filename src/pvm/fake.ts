/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';
import checkDigits from './checkDigits';

/**
 * Generate a random Lithuanian VAT number
 *
 * @returns string
 */
const fake = (): string => {
    const length = randomFromArray([8, 11]);
    // The eighth or eleventh digit must be 1
    const partial = randomNumbers(length - 1).concat([1]);
    const cd = checkDigits(partial);

    return `${partial.join('')}${cd}`;
};

export default fake;
