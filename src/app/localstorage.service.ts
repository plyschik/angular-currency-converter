import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  getBaseCurrency(): string {
    return localStorage.getItem('baseCurrency') || 'PLN';
  }

  setBaseCurrency(currencyCode: string): void {
    localStorage.setItem('baseCurrency', currencyCode);
  }

  getMoneyAmount(): string {
    return localStorage.getItem('moneyAmount') || '1000';
  }

  setMoneyAmount(moneyAmount: string): void {
    localStorage.setItem('moneyAmount', moneyAmount);
  }
}