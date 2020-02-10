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
 * Generate a random SVNR number (Austrian social insurance number)
 *
 * @see https://de.wikipedia.org/wiki/Sozialversicherungsnummer
 * @return string
 */
const fake = (): string => {
    // First 3 digits, can't start with zero
    const serial = [randomFromRange(1, 9)].concat(randomNumbers(2)).join('');

    // The last 6 digits indicate the date of birth
    const month = randomFromRange(1, 12);
    const monthWithPrefix = month > 10 ? `${month}` : `0${month}`;

    const date = randomFromRange(0, 28);
    const dateWithPrefix = date > 10 ? `${date}` : `0${date}`;

    const year = randomNumbers(2).join('');
    const dob = `${monthWithPrefix}${dateWithPrefix}${year}`;

    const weight = [3, 7, 9, 5, 8, 4, 2, 1, 6];
    const checkDigit = (input: string) => {
        return input.split('').map((c, i) => parseInt(c, 10) * weight[i]).reduce((a, b) => a + b, 0) % 11;
    };

    let sequence = parseInt(serial, 10);
    let cd = checkDigit(`${serial}${dob}`);
    while (cd === 10) {
        sequence += 1;
        cd = checkDigit(`${sequence}${dob}`);
    }

    return `${sequence}${cd} ${dob}`;
};

export default fake;
