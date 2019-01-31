import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import currencies from './currencies';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) {}

  getRates(baseCurrency: string): Observable<any> {
    return this.http.get(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}&symbols=${this.getSymbols(baseCurrency)}`);
  }

  getSymbols(baseCurrency: string): string {
    return currencies.map(currency => currency.code)
      .filter(currency => currency !== baseCurrency)
      .join(',');
  }
}