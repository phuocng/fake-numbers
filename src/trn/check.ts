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
    const value = input.replace(/\s/g, '');

    // The first must be 0, 1, 2, 3 or 9
    if (!/^[0-39]\d{9}$/.test(value)) {
        return { valid: false };
    }

    const digits = value.split('').map((c) => parseInt(c, 10));
    const lastDigit = digits.pop();

    return { valid: lastDigit === luhn(digits, DoublePosition.Even) };
};

export default check;
