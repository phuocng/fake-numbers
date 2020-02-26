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
    if (!/^\d{9}(R[C|M|P|T]\d{4})?$/.test(value)) {
        return { valid: false };
    }

    const digits = value.substr(0, 9).split('').map((c) => parseInt(c, 10));
    const lastDigit = digits.pop();

    return {
        valid: lastDigit === luhn(digits, DoublePosition.Old),
    };
};

export default check;
