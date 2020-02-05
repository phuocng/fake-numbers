/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomString from '../utils/randomString';

/**
 * Generate a random CUSIP
 *
 * @see https://en.wikipedia.org/wiki/CUSIP
 * @return string
 */
const fake = (): string => {
    // O, I aren't allowed
    const partial = randomString(8, '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#');

    const converted = partial.split('')
        .map((c) => {
            const code = c.charCodeAt(0);
            switch (true) {
                case (c === '*'): return 36;
                case (c === '@'): return 37;
                case (c === '#'): return 38;
                // Replace A, B, C, ..., Z with 10, 11, ..., 35
                case (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)): return (code - 'A'.charCodeAt(0) + 10);
                default: return parseInt(c, 10);
            }
        });

    const sum = converted
        .map((v, i) => {
            const double = (i % 2 === 0) ? v : 2 * v;
            return Math.floor(double / 10) + double % 10;
        })
        .reduce((a, b) => a + b, 0);

    const checkDigit = (10 - (sum % 10)) % 10;
    return `${partial}${checkDigit}`;
};

export default fake;
