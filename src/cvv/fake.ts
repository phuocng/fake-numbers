/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random CVV (Card Verification Value)
 *
 * @see https://en.wikipedia.org/wiki/Card_security_code
 * @return string
 */
const fake = (): string => {
    const numDigits = randomFromArray([3, 4]);
    return randomNumbers(numDigits).join('');
};

export default fake;
