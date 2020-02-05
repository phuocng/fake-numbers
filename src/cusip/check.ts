/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    const value = input.toUpperCase();

    // O, I aren't allowed
    if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(value)) {
        return { valid: false };
    }

    // Get the last char
    const chars = value.split('');
    const lastChar = chars.pop();

    const converted = chars.map((c) => {
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

    return { valid: lastChar === `${checkDigit}` };
};

export default check;
