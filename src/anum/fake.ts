/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random Hungarian VAT number
 *
 * @returns string
 */
const fake = (): string => {
    const partial = randomNumbers(7);

    const weight = [9, 7, 3, 1, 9, 7, 3];
    const sum = partial.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    const remainder = sum % 10;
    const lastDigit = remainder === 0 ? 0 : 10 - remainder;

    return partial.concat([lastDigit]).join('');
};

export default fake;
