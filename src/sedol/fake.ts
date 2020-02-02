/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Digits, UpperCaseLetters } from '../CharSet';
import randomString from '../utils/randomString';

/**
 * Generate a random SEDOL (Stock Exchange Daily Official List) number
 *
 * @see https://en.wikipedia.org/wiki/SEDOL
 * @return string
 */
const fake = (): string => {
    const sedol = randomString(6, `${Digits}${UpperCaseLetters}`);
    const weight = [1, 3, 1, 7, 3, 9];

    const chars = sedol.split('');
    const sum = chars.map((c, i) => parseInt(c, 36) * weight[i]).reduce((a, b) => a + b, 0);
    const checkDigit = (10 - sum % 10) % 10;

    return `${sedol}${checkDigit}`;
};

export default fake;
