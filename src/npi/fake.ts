/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn, { DoublePosition } from '../utils/luhn';
import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random NPI (National Provider Identifier)
 *
 * @see https://en.wikipedia.org/wiki/National_Provider_Identifier
 * @see https://www.eclaims.com/articles/how-to-calculate-the-npi-check-digit/
 * @return string
 */
const fake = (): string => {
    const first = [8, 0, 8, 4, 0];
    const partial = randomNumbers(9);
    const body = first.concat(partial).reverse();
    const checkDigit = luhn(body, DoublePosition.Even);

    return `${partial.join('')}${checkDigit}`;
};

export default fake;
