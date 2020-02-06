/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export interface CreditCardFormat {
    length: number[];
    prefix: string[];
}

export enum CreditCardType {
    AmericanExpress = 'AmericanExpress',
    Discover = 'Discover',
    Jcb = 'Jcb',
    Maestro = 'Maestro',
    Master = 'Master',
    Visa = 'Visa',
    Dankort = 'Dankort',
    DinnerClub = 'DinnerClub',
    DinnerClubUs = 'DinnerClubUs',
    Forbrugsforeningen = 'Forbrugsforeningen',
    Laser = 'Laser',
    Solo = 'Solo',
    UnionPay = 'UnionPay',
    VisaElectron = 'VisaElectron',
}

export const CreditCardMap: Map<CreditCardType, CreditCardFormat> = new Map([
    [
        CreditCardType.AmericanExpress,
        {
            length: [15],
            prefix: ['34', '37'],
        }
    ],
    [
        CreditCardType.Discover,
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
        CreditCardType.Jcb,
        {
            length: [16],
            prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
        }
    ],
    [
        CreditCardType.Maestro,
        {
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            prefix: [
                '5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766',
            ],
        }
    ],
    [
        CreditCardType.Master,
        {
            length: [16],
            prefix: ['51', '52', '53', '54', '55'],
        }
    ],
    [
        CreditCardType.Visa,
        {
            length: [16],
            prefix: ['4'],
        }
    ],
    [
        CreditCardType.Dankort,
        {
            length: [16],
            prefix: ['5019'],
        }
    ],
    [
        CreditCardType.DinnerClub,
        {
            length: [14],
            prefix: ['300', '301', '302', '303', '304', '305', '36'],
        }
    ],
    [
        CreditCardType.DinnerClubUs,
        {
            length: [16],
            prefix: [
                '4011', '4312', '4389', '4514', '4573', '4576', '5041', '5066', '5067', '509',
                '6277', '6362', '6363', '650', '6516', '6550',
            ],
        }
    ],
    [
        CreditCardType.Forbrugsforeningen,
        {
            length: [16],
            prefix: ['600722'],
        }
    ],
    [
        CreditCardType.Laser,
        {
            length: [16, 17, 18, 19],
            prefix: ['6304', '6706', '6771', '6709'],
        }
    ],
    [
        CreditCardType.Solo,
        {
            length: [16, 18, 19],
            prefix: ['6334', '6767'],
        }
    ],
    [
        CreditCardType.UnionPay,
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
        CreditCardType.VisaElectron,
        {
            length: [16],
            prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917'],
        }
    ]
]);
