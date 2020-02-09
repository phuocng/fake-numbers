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
    const v = input.substr(0, 2) === 'AT' ? input.substr(2) : input;
    if (!/^U\d{8}$/.test(v)) {
        return { valid: false };
    }

    const digits = v.substr(1).split('').map((c) => parseInt(c, 10));
    const lastDigit = digits.pop();
    const checkDigit = (luhn(digits, DoublePosition.Old) + 6) % 10;

    return { valid: checkDigit === lastDigit };
};

export default check;
