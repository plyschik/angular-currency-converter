import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from '../models/Currency';

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
  baseCurrency: string = 'PLN';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencies = this.currencyService.getCurrencies();
    this.selectedBaseCurrencyChange.emit(this.currencyService.getCurrencyByCode(this.baseCurrency));
  }

  changeBaseCurrency(): void {
    this.selectedBaseCurrencyChange.emit(this.currencyService.getCurrencyByCode(this.baseCurrency));
    this.loadingChange.emit(true);
  }

  moneyAmountInputChange(): void {
    this.moneyAmountChange.emit(this.moneyAmount);
  }
}