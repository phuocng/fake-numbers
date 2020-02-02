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
    switch (true) {
        case /^\d{15}$/.test(input):
        case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(input):
        case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(input):
            const converted = input.replace(/[^0-9]/g, '').split('').map((c) => parseInt(c, 10));
            const checkDigit = converted.pop();
            return { valid: luhn(converted, DoublePosition.Old) === checkDigit };

        case /^\d{14}$/.test(input):
        case /^\d{16}$/.test(input):
        case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(input):
        case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(input):
            return { valid: true };

        default:
            return { valid: false };
    }
};

export default check;
