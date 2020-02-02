/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    // Groups are separated by a hyphen or a space
    if (!/^\d{4}\-\d{3}[\dX]$/.test(input)) {
        return { valid: false };
    }

    // Replace all special characters except digits and X
    const chars = input.replace(/[^0-9X]/gi, '').split('');
    if (chars[7] === 'X') {
        chars[7] = '10';
    }

    const sum = chars.map((c, i) => parseInt(c, 10) * (8 - i)).reduce((a, b) => a + b, 0);
    return { valid: (sum % 11 === 0) };
};

export default check;
