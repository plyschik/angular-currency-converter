import { Injectable } from '@angular/core';
import { Currency } from '../models/Currency';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private currencies: Currency[] = [
    new Currency('PLN', 'Złoty polski', new Country('pl', 'Polska')),
    new Currency('EUR', 'Euro', new Country('eu', 'UE')),
    new Currency('USD', 'Dolar amerykański', new Country('us', 'Stany Zjednoczone')),
    new Currency('GBP', 'Funt brytyjski', new Country('gb', 'Wielka Brytania')),
    new Currency('RUB', 'Rubel', new Country('ru', 'Rosja')),
    new Currency('CHF', 'Frank szwajcarski', new Country('ch', 'Szwajcaria')),
    new Currency('NOK', 'Korona norweska', new Country('no', 'Norwegia')),
    new Currency('SEK', 'Korona szwecka', new Country('se', 'Szwecja'))
  ];

  constructor() {}

  getCurrencyByCode(code: string): any {
    return this.currencies.filter(currency => currency.getCode() == code);
  }

  getCurrencies(): Currency[] {
    return this.currencies;
  }
}