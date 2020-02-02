/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn, { DoublePosition } from '../utils/luhn';
import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    if (!/^\d{10}$/.test(input)) {
        return { valid: false };
    }

    const first = [8, 0, 8, 4, 0];
    const digits = input.split('').map((c) => parseInt(c, 10));
    const lastDigit = digits.pop();

    const checkDigit = luhn(first.concat(digits).reverse(), DoublePosition.Even);
    return { valid: checkDigit === lastDigit };
};

export default check;
