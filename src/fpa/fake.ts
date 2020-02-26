/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';
import checkDigit from './checkDigit';

/**
 * Generate a random Greek VAT number
 *
 * @returns string
 */
const fake = (): string => {
    const length = randomFromArray([8, 9]);
    const partial = length === 8 ? [0].concat(randomNumbers(7)) : randomNumbers(8);
    const cd = checkDigit(partial);

    return partial.concat([cd]).join('');
};

export default fake;
