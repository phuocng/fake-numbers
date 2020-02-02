/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import luhn, { DoublePosition } from '../utils/luhn';

const check = (input: string): CheckResult<{}> => {
    if (!/^\d{9}$/.test(input)) {
        return { valid: false };
    }

    // The first digit cannot be 0 or 8
    const digits = input.split('').map((c) => parseInt(c, 10));
    const first = digits[0];
    if (first === 0 || first === 8) {
        return { valid: false };
    }

    const lastDigit = digits.pop();
    const checkDigit = luhn([first].concat(digits.slice(1)).concat([0]), DoublePosition.Old);

    return { valid: checkDigit === lastDigit };
};

export default check;
