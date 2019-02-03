import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyService } from './currency.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(
    private http: HttpClient,
    private currencyService: CurrencyService
  ) {}

  getRates(currencyCode: string): Observable<any> {
    let minDelay = 1000;
    let maxDelay = 2000;

    return this.http.get(`https://api.exchangeratesapi.io/latest?base=${currencyCode}&symbols=${this.getSymbols(currencyCode)}`).pipe(delay(Math.random() * (maxDelay - minDelay) + minDelay));
  }

  getSymbols(currencyCode: string): string {
    return this.currencyService.getCurrencies()
      .map(currency => currency.code)
      .filter(currency => currency !== currencyCode)
      .join(',');
  }
}