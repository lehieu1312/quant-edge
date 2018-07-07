import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'App demo';
  data: any;
  displayedColumns: string[] = ['code', 'company', 'price', 'value', 'change', '%change'];
  dataSourceGainer: any;
  dataSourceLoser: any;
  constructor(private api: DataService) {
    this.api.getData().subscribe(res => {
      this.data = res.dataTransaction;

      this.dataSourceGainer = this.data.sort((a, b) => a.price * a.volume > b.price * b.volume ? -1 : 1);
      this.dataSourceGainer = this.dataSourceGainer.slice(0, 20);
      this.dataSourceLoser = this.data.sort((a, b) => a.price * a.volume > b.price * b.volume ? 1 : -1);
      this.dataSourceLoser = this.dataSourceLoser.slice(0, 20);
      setInterval(() => {
        this.mathData();
      }, 5000);
    });
  }

  ngOnInit() {

  }

  randomPrice(fPrice: number): number {
    const fivePercent = 5 * fPrice / 100;
    const vValue = Math.random() * (fivePercent - (-fivePercent)) + (-fivePercent);
    return vValue;
  }

  mathData() {

    for (let i = 0; i < this.data.length; i++) {

      this.data[i].volume = this.data[i].volume + Math.random() * (30 - 10) + 10;

      const priceChange = this.randomPrice(this.data[i].price);
      this.data[i].price = this.data[i].price + priceChange;

      const differencePrice = this.data[i].price - this.data[i].referPrice;
      this.data[i].change = differencePrice;
      this.data[i].perChange = differencePrice * 100 / this.data[i].referPrice;

      if (differencePrice < 0) {
        this.data[i].statusUp = -1;
      } else if (differencePrice > 0) {
        this.data[i].statusUp = 1;
      } else {
        this.data[i].statusUp = 0;
      }
    }

    this.dataSourceGainer = this.data.sort((a, b) => a.price * a.volume > b.price * b.volume ? -1 : 1);
    this.dataSourceGainer = this.dataSourceGainer.slice(0, 20);
    this.dataSourceLoser = this.data.sort((a, b) => a.price * a.volume > b.price * b.volume ? 1 : -1);
    this.dataSourceLoser = this.dataSourceLoser.slice(0, 20);
  }

}
