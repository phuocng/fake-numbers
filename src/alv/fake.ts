/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromRange from '../utils/randomFromRange';
import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random Finnish VAT number
 *
 * @returns string
 */
const fake = (): string => {
    const firstSixth = randomNumbers(6);
    const seventh = randomFromRange(1, 9);
    const partial = firstSixth.concat(seventh);

    const weight = [7, 9, 10, 5, 8, 4, 2];
    const sum = partial.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    const remainder = 11 - sum % 11;

    switch (true) {
        case (remainder === 11):
            return `${partial.join('')}0`;
        case (remainder === 10):
            return `${firstSixth.join('')}${seventh - 1}1`;
        case (remainder < 10):
            return `${partial.join('')}${remainder}`;
    }
};

export default fake;
