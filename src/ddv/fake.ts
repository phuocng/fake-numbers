/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromRange from '../utils/randomFromRange';
import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random Slovenian VAT number
 *
 * @returns string
 */
const fake = (): string => {
    // The first digit can't be zero
    const partial = [randomFromRange(1, 9)].concat(randomNumbers(5));

    const weight = [8, 7, 6, 5, 4, 3];
    const sum = partial.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);
    const remainder = sum % 11;

    // remainder + 2 * a6 + a7 % 11 === 0

    const s = 11 * randomFromRange(1, 2) - remainder;
    const minOfSeventh = Math.max(0, Math.floor((s - 10) / 2) + 1);
    const maxOfSeventh = Math.min(9, Math.floor((s - 1) / 2));

    const seventh = randomFromRange(minOfSeventh, maxOfSeventh);
    const last = s - 2 * seventh;

    return `${partial.join('')}${seventh}${last}`;
};

export default fake;
