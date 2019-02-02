import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { CurrencyService } from '../currency.service';
import { Currency } from '../models/Currency';
import { Rate } from '../models/Rate';
import { Country } from '../models/Country';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  loading: boolean;
  availableCurrencies: Currency[];
  rawSelectedBaseCurrency: string = 'PLN';
  selectedBaseCurrency: Currency;
  moneyAmount: string = '1';
  searchPhrase: string;
  rates: Rate[];
  filteredRates: Rate[];
  
  constructor(
    private currencyService: CurrencyService,
    private APIService: APIService
  ) {}

  ngOnInit() {
    this.initializeAvailableCurrencies();
    this.selectedBaseCurrency = this.currencyService.getCurrencyByCode('PLN');
    this.getRates();
  }

  changeBaseCurrency(): void {
    this.selectedBaseCurrency = this.currencyService.getCurrencyByCode(this.rawSelectedBaseCurrency);
    this.getRates();
  }

  getRates(): void {
    this.loading = true;
    this.searchPhrase = '';

    this.APIService.getRates(this.rawSelectedBaseCurrency).subscribe(response => {
      this.rates = this.filteredRates = [];

      Object.keys(response.rates).forEach(code => this.rates.push(new Rate(this.currencyService.getCurrencyByCode(code), response.rates[code])));

      this.filteredRates = this.rates;
      this.loading = false;
    });
  }

  searchPhraseChange(): void {
    this.filteredRates = this.rates.filter(rate => rate.currency[0].code.toLowerCase().indexOf(this.searchPhrase.toLowerCase()) > -1);
  }

  initializeAvailableCurrencies(): void {
    this.availableCurrencies = this.currencyService.getCurrencies();
  }
}