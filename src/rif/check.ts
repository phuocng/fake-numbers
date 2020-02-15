/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import checkDigits from './checkDigits';
import { CompanyType } from './CompanyType';

export interface Result {
    type: CompanyType;
}

const check = (input: string): CheckResult<Result> => {
    let value = input.replace(/\s/g, '');
    if (/^VE[VEJPG][0-9]{9}$/.test(value)) {
        value = value.substr(2);
    }
    if (!/^[VEJPG][0-9]{9}$/.test(value)) {
        return { valid: false };
    }

    // Get the company type
    const type = value.substr(0, 1) as CompanyType;

    const digits = value.substr(1).split('').map((c) => parseInt(c, 10));
    const lastDigit = digits.pop();

    return {
        meta: { type },
        valid: lastDigit === checkDigits(type, digits),
    };
}

export default check;
