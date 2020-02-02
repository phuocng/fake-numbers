/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export const Digits = '0123456789';
export const LowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
export const UpperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const Letters = `${LowerCaseLetters}${UpperCaseLetters}`;
export const Hex = `${Digits}ABCDEF`;
export const Words = `${LowerCaseLetters}${UpperCaseLetters}${Digits}`;
