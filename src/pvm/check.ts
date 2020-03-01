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
    let value = input.replace(/\s/g, '');
    if (value.substr(0, 2) === 'LT') {
        value = value.substr(2);
    }

    if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(value)) {
        return { valid: false };
    }

    const digits = value.split('').map((c) => parseInt(c, 10));
    const lastDigit = digits.pop();

    return { valid: lastDigit === checkDigits(digits) };
};

export default check;
