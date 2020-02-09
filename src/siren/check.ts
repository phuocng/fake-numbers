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
    if (!/^[12]\d{8}$/.test(input)) {
        return { valid: false };
    }

    const digits = input.split('').map((c) => parseInt(c, 10));
    const last = digits.pop();
    const checkDigit = luhn(digits, DoublePosition.Old);

    return { valid: checkDigit === last };
};

export default check;
