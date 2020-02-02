/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random RTN (Routing Transit Number)
 *
 * @see http://en.wikipedia.org/wiki/Routing_transit_number
 * @return string
 */
const fake = (): string => {
    const numDigits = 8;
    const partial = randomNumbers(numDigits);
    let sum = 0;
    for (let i = 0; i < numDigits; i += 3) {
        sum += partial[i] * 3
            +  partial[i + 1] * 7
            + ((i + 2 < numDigits) ? partial[i + 2] : 0);
    }
    const checkDigit = (10 - sum % 10) % 10;

    return `${partial.join('')}${checkDigit}`;
};

export default fake;
