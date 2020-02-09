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
* [x] 02. CNPJ (_Cadastro Nacional da Pessoa Jurídica_): Brazilian company identifier
* [x] 03. Credit card number
* [x] 04. CUSIP (_Committee on Uniform Security Identification Procedures_)
* [x] 05. CVV (_Card Verification Value_)
* [x] 06. EAN (_International Article Number_)
* [x] 07. IMEI (_International Mobile Equipment Identity_)
* [x] 08. IMO (_International Maritime Organization_)
* [x] 09. ISBN (_International Standard Book Number_)
* [x] 10. ISIN (_International Securities Identification Number_)
* [x] 11. ISMN (_International Standard Music Number_)
* [x] 12. ISSN (_International Standard Serial Number_)
* [x] 13. NIF (_Numéro d'Immatriculation Fiscale_): French tax identification number
* [x] 14. NPI (_National Provider Identifier_)
* [x] 15. NRIC (_Singaporean National Registration Identity Card_)
* [x] 16. RTN (_Routing Transit Number_)
* [x] 17. SEDOL (_Stock Exchange Daily Official List_)
* [x] 18. SIN (_Canadian Social Insurance Number_)
* [x] 19. SIREN
* [x] 20. SIRET (_Système d’Identification du Répertoire des Établissements_)
* [x] 21. SSN (_Social Security number_)
* [x] 22. VIN (_Vehicle Identification Number_): Support US only

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
