/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';
import randomString from '../utils/randomString';

/**
 * Generate a random SSN (Social Security number)
 *
 * @see https://en.wikipedia.org/wiki/Social_Security_number
 * @return string
 */
const fake = (): string => {
    // A SSN is ###-##-#### and can't be one of the following
    // 000-##-####
    // ###-00-####
    // ###-##-0000
    // 666-##-####
    // 9##-##-####

    const first = `${randomString(1, '1234578')}${randomNumbers(2).join('')}`;
    const middle = `${randomString(1, '123456789')}${randomNumbers(1).join('')}`;
    const last = `${randomString(1, '123456789')}${randomNumbers(3).join('')}`;

    return `${first}-${middle}-${last}`;
};

export default fake;
