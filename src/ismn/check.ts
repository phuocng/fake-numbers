/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import IsmnType from './IsmnType';

export interface Result {
    type: IsmnType;
}

const check = (input: string): CheckResult<Result> => {
    // Groups are separated by a hyphen or a space
    switch (true) {
        case /^M\d{9}$/.test(input):
        case /^M-\d{4}-\d{4}-\d{1}$/.test(input):
        case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(input):
            return checkIsmn(`9790${input.substr(1)}`, IsmnType.Ismn10);

        case /^9790\d{9}$/.test(input):
        case /^979-0-\d{4}-\d{4}-\d{1}$/.test(input):
        case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(input):
            return checkIsmn(input, IsmnType.Ismn13);

        default:
            return { valid: false };
    }
};

const checkIsmn = (input: string, type: IsmnType): CheckResult<Result> => {
    // Replace all special characters except digits
    const v = input.replace(/[^0-9]/gi, '');
    const chars = v.split('');
    const lastChar = chars.pop();

    const weight = [1, 3];
    const sum = chars.map((c, i) => parseInt(c, 10) * weight[i % 2]).reduce((a, b) => a + b, 0);
    const checkDigit = (10 - sum % 10) % 10;
    return {
        meta: { type },
        valid: `${checkDigit}` === lastChar,
    };
};

export default check;
