/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import IsbnType from './IsbnType';

export interface Result {
    type: IsbnType;
}

const check = (input: string): CheckResult<Result> => {
    // Groups are separated by a hyphen or a space
    switch (true) {
        case /^\d{9}[\dX]$/.test(input):
        case (input.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(input)):
        case (input.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input)):
            return checkIsbn10(input);

        case /^(978|979)\d{9}[\dX]$/.test(input):
        case (input.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(input)):
        case (input.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input)):
            return checkIsbn13(input);

        default:
            return { valid: false };
    }
};

const checkIsbn10 = (input: string): CheckResult<Result> => {
    // Replace all special characters except digits and X
    const chars = input.replace(/[^0-9X]/gi, '').split('');
    const checkDigit = chars.pop();
    const sum = chars.map((c, i) => parseInt(c, 10) * (10 - i)).reduce((a, b) => a + b, 0);
    let checksum = `${11 - (sum % 11)}`;
    if (checksum === '11') {
        checksum = '0';
    } else if (checksum === '10') {
        checksum = 'X';
    }

    return {
        meta: { type: IsbnType.Isbn10 },
        valid: `${checksum}` === checkDigit,
    };
};

const checkIsbn13 = (input: string): CheckResult<Result> => {
    // Replace all special characters except digits and X
    const chars = input.replace(/[^0-9X]/gi, '').split('');
    const checkDigit = chars.pop();
    const sum = chars.map((c, i) => ((i % 2 === 0) ? parseInt(c, 10) : (parseInt(c, 10) * 3))).reduce((a, b) => a + b, 0);
    let checksum = `${10 - (sum % 10)}`;
    if (checksum === '10') {
        checksum = '0';
    }

    return {
        meta: { type: IsbnType.Isbn13 },
        valid: `${checksum}` === checkDigit,
    };
};

export default check;
