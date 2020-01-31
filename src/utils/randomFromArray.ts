/**
 * Generate a fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

function randomFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
};

export default randomFromArray;
