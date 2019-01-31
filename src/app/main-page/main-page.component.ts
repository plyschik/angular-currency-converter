import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Currency } from '../models/Currency';
import currencies from '../currencies';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  loading: boolean;
  availableCurrencies: Object[];
  selectedBaseCurrency: string = 'PLN';
  moneyAmount: number = 1;
  searchPhrase: string;
  rates: Currency[];
  filteredRates: Currency[];
  
  constructor(private APIService: APIService) {}

  ngOnInit() {
    this.initializeAvailableCurrencies();
    this.getRates();
  }

  getRates() {
    this.loading = true;
    this.searchPhrase = '';

    this.APIService.getRates(this.selectedBaseCurrency).subscribe(response => {
      this.rates = [];

      Object.keys(response.rates).forEach(code => {
        this.rates.push({
          'code': code,
          'value': response.rates[code]
        });
      });
      
      this.filteredRates = this.rates;
      this.loading = false;
    });
  }

  searchPhraseChange() {
    this.filteredRates = this.rates.filter(rate => rate.code.toLowerCase().indexOf(this.searchPhrase.toLowerCase()) > -1);
  }

  initializeAvailableCurrencies(): void {
    this.availableCurrencies = currencies;
  }
}