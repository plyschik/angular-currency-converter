import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { APIService } from '../api.service';
import { LocalStorageService } from '../localstorage.service';
import { Currency } from '../models/Currency';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  loading: boolean = false;
  selectedBaseCurrency: Currency;
  moneyAmount: string;
  
  constructor(
    private currencyService: CurrencyService,
    private APIService: APIService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.moneyAmount = this.localStorageService.getMoneyAmount();
  }

  loadingChange(state: boolean): void {
    this.loading = state;
  }

  selectedBaseCurrencyChange(currency: Currency): void {
    this.selectedBaseCurrency = currency;
  }

  moneyAmountChange(moneyAmount: string): void {
    this.moneyAmount = moneyAmount;
  }
}