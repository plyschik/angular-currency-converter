import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { APIService } from '../api.service';
import { Currency } from '../models/Currency';
import { Rate } from '../models/Rate';

@Component({
  selector: 'app-converter-result',
  templateUrl: './converter-result.component.html',
  styleUrls: ['./converter-result.component.css']
})
export class ConverterResultComponent {
  @Input() loading: boolean;
  @Output() loadingChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() selectedBaseCurrency: Currency
  @Input() moneyAmount: string;

  rates: Rate[];
  filteredRates: Rate[];
  searchPhrase: string;

  constructor(
    private currencyService: CurrencyService,
    private APIService: APIService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('selectedBaseCurrency')) {
      this.getRates();
    }
  }

  getRates(): void {
    this.loadingChange.emit(true);
    this.searchPhrase = '';

    this.APIService.getRates(this.selectedBaseCurrency[0].code).subscribe(response => {
      this.rates = this.filteredRates = [];      

      Object.keys(response.rates).forEach(code => this.rates.push(new Rate(this.currencyService.getCurrencyByCode(code), response.rates[code])));

      this.filteredRates = this.rates;

      this.loadingChange.emit(false);
    });
  }

  searchPhraseChange(): void {
    this.filteredRates = this.rates.filter(rate => (
      rate.currency[0].code.toLowerCase().indexOf(this.searchPhrase.toLowerCase()) > -1
      ||
      rate.currency[0].name.toLowerCase().indexOf(this.searchPhrase.toLowerCase()) > -1      
    ));
  }
}