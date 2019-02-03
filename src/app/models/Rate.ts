import { Currency } from './Currency';

export class Rate {
  currency: Currency;
  value: number;
  
  constructor(currency?: Currency, value?: number) {
    this.currency = currency;
    this.value = value;
  }
  
  getCurrency(): Currency {
    return this.currency;
  }
  
  setCurrency(currency: Currency): Rate {
    this.currency = currency;
    
    return this;
  }
  
  getValue(): number {
    return this.value;
  }
  
  setValue(value: number): Rate {
    this.value = value;
    
    return this;
  }
}