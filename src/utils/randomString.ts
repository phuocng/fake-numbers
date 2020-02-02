/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from './randomFromArray';

/**
 * Generates a random string from given set of characters
 *
 * @param length The length of string
 * @param charSet The set of characters
 * @returns string
 */
const randomString = (length: number, charSet: string): string => {
    if (length === 0) {
        return '';
    }
    const chars = charSet.split('');
    return Array(length).fill('').map((_) => randomFromArray(chars)).join('');
};

export default randomString;
