import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyService } from './currency.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(
    private http: HttpClient,
    private currencyService: CurrencyService
  ) {}

  getRates(currencyCode: string): Observable<any> {
    return this.http.get(`https://api.exchangeratesapi.io/latest?base=${currencyCode}&symbols=${this.getSymbols(currencyCode)}`);
  }

  getSymbols(currencyCode: string): string {
    return this.currencyService.getCurrencies()
      .map(currency => currency.code)
      .filter(currency => currency !== currencyCode)
      .join(',');
  }
}