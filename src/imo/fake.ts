/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random IMO (International Maritime Organization)
 *
 * @see https://en.wikipedia.org/wiki/IMO_number
 * @return string
 */
const fake = (): string => {
    const partial = randomNumbers(6);
    const sum = Array(partial.length)
        .fill(0)
        .map((_, index) => partial[index] * (7 - index))
        .reduce((a, b) => a + b, 0);
    const checkDigit = sum % 10;

    return `IMO ${partial.join('')}${checkDigit}`;
};

export default fake;
