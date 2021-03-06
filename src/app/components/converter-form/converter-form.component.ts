import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { LocalStorageService } from '../../services/localstorage.service';
import { Currency } from '../../models/Currency';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent implements OnInit {
  @Input() loading: boolean;
  @Output() loadingChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectedBaseCurrencyChange: EventEmitter<Currency> = new EventEmitter<Currency>();
  @Input() moneyAmount: string;
  @Output() moneyAmountChange: EventEmitter<string> = new EventEmitter<string>();

  currencies: Currency[];
  baseCurrency: string;

  constructor(
    private currencyService: CurrencyService,
    private localStorageService: LocalStorageService  
  ) {}

  ngOnInit(): void {
    this.currencies = this.currencyService.getCurrencies();
    this.baseCurrency = this.localStorageService.getBaseCurrency();
    this.selectedBaseCurrencyChange.emit(this.currencyService.getCurrencyByCode(this.baseCurrency));
  }

  changeBaseCurrency(): void {
    this.selectedBaseCurrencyChange.emit(this.currencyService.getCurrencyByCode(this.baseCurrency));
    this.loadingChange.emit(true);
    this.localStorageService.setBaseCurrency(this.baseCurrency);
  }

  moneyAmountInputChange(): void {
    this.moneyAmountChange.emit(this.moneyAmount);
    this.localStorageService.setMoneyAmount(this.moneyAmount);
  }
}