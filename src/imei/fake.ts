/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn, { DoublePosition } from '../utils/luhn';
import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random IMEI
 *
 * @see https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity
 * @return string
 */
const fake = (): string => {
    // The first two digits are Reporting Body Identifier
    // See https://en.wikipedia.org/wiki/Reporting_Body_Identifier
    const rbi = [
        '01',
        '10',
        '30', '33', '35',
        '44', '45', '49',
        '50', '51', '52', '53', '54',
        '86',
        '91', '98', '99',
    ];

    const firstTwo = randomFromArray(rbi);
    const first = parseInt(firstTwo.charAt(0), 10);
    const second = parseInt(firstTwo.charAt(1), 10);
    const partial = randomNumbers(12);
    const arr = [first, second].concat(partial);

    // Calculate the check digit
    const checkDigit = luhn(arr, DoublePosition.Old);

    return arr.concat(checkDigit).join('');
};

export default fake;
