/**
 * Generate a fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn, { DoublePosition } from '../utils/luhn';
import randomFromArray from '../utils/randomFromArray';
import randomFromRange from '../utils/randomFromRange';

interface Format {
    length: number[];
    prefix: string[];
}

export enum CardType {
    AmericanExpress,
    Discover,
    Jcb,
    Maestro,
    Master,
    Visa,
    Dankort,
    DinnerClub,
    DinnerClubUs,
    Forbrugsforeningen,
    Laser,
    Solo,
    UnionPay,
    VisaElectron,
}

const formats: Map<CardType, Format> = new Map([
    [
        CardType.AmericanExpress,
        {
            length: [15],
            prefix: ['34', '37'],
        }
    ],
    [
        CardType.Discover,
        {
            length: [16],
            prefix: [
                '6011', '622126', '622127', '622128', '622129', '62213', '62214', '62215', '62216', '62217',
                '62218', '62219', '6222', '6223', '6224', '6225', '6226', '6227', '6228', '62290',
                '62291', '622920', '622921', '622922', '622923', '622924', '622925', '644', '645', '646',
                '647', '648', '649', '65',
            ],
        }
    ],
    [
        CardType.Jcb,
        {
            length: [16],
            prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
        }
    ],
    [
        CardType.Maestro,
        {
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766'],
        }
    ],
    [
        CardType.Master,
        {
            length: [16],
            prefix: ['51', '52', '53', '54', '55'],
        }
    ],
    [
        CardType.Visa,
        {
            length: [16],
            prefix: ['4'],
        }
    ],
    [
        CardType.Dankort,
        {
            length: [16],
            prefix: ['5019'],
        }
    ],
    [
        CardType.DinnerClub,
        {
            length: [14],
            prefix: ['300', '301', '302', '303', '304', '305', '36'],
        }
    ],
    [
        CardType.DinnerClubUs,
        {
            length: [16],
            prefix: [
                '4011', '4312', '4389', '4514', '4573', '4576', '5041', '5066', '5067', '509',
                '6277', '6362', '6363', '650', '6516', '6550',
            ],
        }
    ],
    [
        CardType.Forbrugsforeningen,
        {
            length: [16],
            prefix: ['600722'],
        }
    ],
    [
        CardType.Laser,
        {
            length: [16, 17, 18, 19],
            prefix: ['6304', '6706', '6771', '6709'],
        }
    ],
    [
        CardType.Solo,
        {
            length: [16, 18, 19],
            prefix: ['6334', '6767'],
        }
    ],
    [
        CardType.UnionPay,
        {
            length: [16, 17, 18, 19],
            prefix: [
                '622126', '622127', '622128', '622129', '62213', '62214', '62215', '62216', '62217', '62218',
                '62219', '6222', '6223', '6224', '6225', '6226', '6227', '6228', '62290', '62291',
                '622920', '622921', '622922', '622923', '622924', '622925',
            ],
        }
    ],
    [
        CardType.VisaElectron,
        {
            length: [16],
            prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917'],
        }
    ]
]);

const creditCard = (type: CardType): string => {
    if (!formats.has(type)) {
        return '';
    }
    const format = formats.get(type);
    const length = randomFromArray(format.length);
    const prefix = randomFromArray(format.prefix);
    const prefixLength = prefix.length;

    if (length <= prefixLength) {
        return '';
    }

    const cardNumber = `${prefix}${Array(length - prefixLength - 1).fill(0).map((_, __) => randomFromRange(0, 9)).join('')}`;
    const reversed = cardNumber.split('').map((c) => parseInt(c, 10)).reverse();
    const finalDigit = luhn(reversed, DoublePosition.Even);
    
    return `${cardNumber}${finalDigit}`;
};

export default creditCard;
