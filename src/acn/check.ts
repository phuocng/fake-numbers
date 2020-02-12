/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import checkDigits from './checkDigits';

const check = (input: string): CheckResult<{}> => {
    const value = input.replace(/\s/g, '');
    if (!/^\d{9}$/.test(value)) {
        return { valid: false };
    }

    const digits = value.split('').map((c) => parseInt(c, 10));
    const lastDigit = digits.pop();

    return { valid: lastDigit === checkDigits(digits) };
}

export default check;
