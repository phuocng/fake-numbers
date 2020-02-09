/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random Belgian VAT number
 *
 * @return string
 */
const fake = (): string => {
    // At the moment, the number should start with zero
    const arr = [0].concat(randomNumbers(7)).join('');
    const partial = parseInt(arr, 10);

    const divider = (partial - partial % 97) / 97;
    const checkDigits = (divider + 1) * 97 - partial;

    const prefixZero = checkDigits < 10 ? `0${checkDigits}` : `${checkDigits}`;
    return `${arr}${prefixZero}`;
};

export default fake;
