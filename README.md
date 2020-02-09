# Fake Numbers
Generate fake, valid numbers. Check if a given number is valid.

The following piece of code generates a fake, valid credit card number.

~~~ javascript
import { creditCard } from '@phuocng/fake-numbers';

// Generate a fake credit card number
const creditCardNumber = creditCard.fake();

// Check if a given value is a valid credit card nunber
creditCard.check(creditCardNumber).valid;       // returns `true`
~~~

## Supported numbers

* [x] 01. BIC (_Business Identifier Code_)
* [x] 02. Credit card number
* [x] 03. CUSIP (_Committee on Uniform Security Identification Procedures_)
* [x] 04. CVV (_Card Verification Value_)
* [x] 05. EAN (_International Article Number_)
* [x] 06. IMEI (_International Mobile Equipment Identity_)
* [x] 07. IMO (_International Maritime Organization_)
* [x] 08. ISBN (_International Standard Book Number_)
* [x] 09. ISIN (_International Securities Identification Number_)
* [x] 10. ISMN (_International Standard Music Number_)
* [x] 11. ISSN (_International Standard Serial Number_)
* [x] 12. NPI (_National Provider Identifier_)
* [x] 13. NRIC (_Singaporean National Registration Identity Card_)
* [x] 14. RTN (_Routing Transit Number_)
* [x] 15. SEDOL (_Stock Exchange Daily Official List_)
* [x] 16. SIN (_Canadian Social Insurance Number_)
* [x] 17. SIREN
* [x] 18. SSN (_Social Security number_)
* [x] 19. VIN (_Vehicle Identification Number_): Support US only

## About

This project is developed by [Nguyen Huu Phuoc](https://twitter.com/nghuuphuoc).
You might be interesting in my projects:

| Product                                           | Description                                                       |
|---------------------------------------------------|-------------------------------------------------------------------|
| [Blur Page](https://blur.page)                    | A browser extension to hide sensitive information on a web page   |
| [CSS Layout](https://csslayout.io)                | A collection of popular layouts and patterns made with CSS        |
| [Fake Numbers](https://fakenumbers.io)            | Generate fake and valid numbers                                   |
| [Form Validation](https://formvalidation.io)      | The best validation library for JavaScript                        |
| [React PDF Viewer](https://react-pdf-viewer.dev)  | A React component to view a PDF document                          |
