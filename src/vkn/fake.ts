/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';
import checkDigits from './checkDigits';

/**
 * Generate a random Turkish tax identification number
 *
 * @returns string
 */
const fake = (): string => {
    const partial = randomNumbers(9);
    const cd = checkDigits(partial);

    return `${partial.join('')}${cd}`;
};

export default fake;
