/**
 * Generate a fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const randomFromRange = (min: number, max: number) => min + Math.round(Math.random() * (max - min));

export default randomFromRange;
