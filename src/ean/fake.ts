/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';

const fake = (): string => {
    // It has to be a number with 8, 12 or 13 digits
    const numDigits = randomFromArray([8, 12, 13]) - 1;
    const partial = randomNumbers(numDigits);

    const weight = (numDigits === 7) ? [3, 1] : [1, 3];
    const sum = Array(numDigits)
        .fill(0)
        .map((_, index) => partial[index] * weight[index % 2])
        .reduce((a, b) => a + b, 0);

    const checkDigit = (10 - sum % 10) % 10;
    return `${partial.join('')}${checkDigit}`;
};

export default fake;
