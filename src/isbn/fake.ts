/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';
import IsbnType from './IsbnType';

/**
 * Generate a random ISBN (International Standard Book Number)
 *
 * @see https://en.wikipedia.org/wiki/International_Standard_Book_Number
 * @return string
 */
const fake = (type?: IsbnType): string => {
    const tpe = type || randomFromArray(Object.values(IsbnType));
    switch (tpe) {
        case IsbnType.Isbn10:
            return fakeIsbn10();
        case IsbnType.Isbn13:
        default:
            return fakeIsbn13();
    }
};

const fakeIsbn10 = (): string => {
    const partial = randomNumbers(9);
    const sum = partial.map((v, index) => v * (index + 1)).reduce((a, b) => a + b, 0);
    const remainder = sum % 11;
    const check = remainder === 10 ? 'X' : `${remainder}`;

    return `${partial.join('')}${check}`;
};

const fakeIsbn13 = (): string => {
    // The prefix can be 978 or 979
    const prefix = [9, 7].concat(randomFromArray([8, 9]));
    const partial = prefix.concat(randomNumbers(9));
    const sum = partial.map((v, index) => v * (index % 2 === 0 ? 1 : 3)).reduce((a, b) => a + b, 0);
    const check = (10 - sum % 10) % 10;

    return `${partial.join('')}${check}`;
};

export default fake;
