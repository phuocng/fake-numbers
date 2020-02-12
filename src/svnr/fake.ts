/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromRange from '../utils/randomFromRange';
import randomNumbers from '../utils/randomNumbers';
import checkDigit from './checkDigit';

/**
 * Generate a random SVNR number (Austrian social insurance number)
 *
 * @see https://de.wikipedia.org/wiki/Sozialversicherungsnummer
 * @return string
 */
const fake = (): string => {
    // First 3 digits, can't start with zero
    const serial = parseInt(`${randomFromRange(1, 9)}${randomNumbers(2).join('')}`, 10);

    // The last 6 digits indicate the date of birth
    const month = randomFromRange(1, 12);
    const monthWithPrefix = month >= 10 ? `${month}` : `0${month}`;

    const date = randomFromRange(0, 28);
    const dateWithPrefix = date >= 10 ? `${date}` : `0${date}`;

    const year = randomNumbers(2).join('');
    const dob = `${monthWithPrefix}${dateWithPrefix}${year}`;

    const cd = checkDigit(serial, dob);
    return `${cd.sequence}${cd.checkDigit} ${dob}`;
};

export default fake;
