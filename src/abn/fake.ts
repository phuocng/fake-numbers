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
 * Generate a random Australian Business Number
 *
 * @see https://en.wikipedia.org/wiki/Australian_Business_Number
 * @returns string
 */
const fake = (): string => {
    const partial = randomNumbers(9);
    const remainder = checkDigits(partial);

    const output = `${remainder}${partial.join('')}`;
    return `${output.substr(0, 2)} ${output.substr(2, 3)} ${output.substr(5, 3)} ${output.substr(8)}`;
};

export default fake;
