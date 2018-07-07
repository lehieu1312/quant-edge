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
  // Định danh các cột cho table
  displayedColumns: string[] = ['code', 'company', 'price', 'value', 'change', '%change'];
  dataSourceGainer: any;
  dataSourceLoser: any;

  constructor(private api: DataService) {

    // Lấy dữ liệu và xử lý dữ liệu từ api trả về
    this.api.getData().subscribe(res => {
      this.data = res.dataTransaction;
      // Sắp xếp ghi có value = price*volume lớn nhất
      this.dataSourceGainer = this.data.sort((a, b) => a.price * a.volume > b.price * b.volume ? -1 : 1);
      // Lấy 20 bản ghi có value lớn nhất
      this.dataSourceGainer = this.dataSourceGainer.slice(0, 20);
      // Sắp xếp  bản ghi có value = price*volume nhỏ nhất
      this.dataSourceLoser = this.data.sort((a, b) => a.price * a.volume > b.price * b.volume ? 1 : -1);
      // Lấy 20 bản ghi có value nhỏ nhất
      this.dataSourceLoser = this.dataSourceLoser.slice(0, 20);
      // Hàm set thời gian sau 5s sẽ tự động thay đổi giá và volume để hiện thị lên table
      setInterval(() => {
        this.mathData();
      }, 5000);
    });

  }

  ngOnInit() {

  }

  // Hàm lấy ngẫu nhiên giá trong khoảng từ -5% -> +5% của giá hiện tại
  randomPrice(fPrice: number): number {
    const fivePercent = 5 * fPrice / 100;
    const vValue = Math.random() * (fivePercent - (-fivePercent)) + (-fivePercent);
    return vValue;
  }

  // Hàm thay đổi giá và khối lượng, sau đó sẽ tính lại giá thay đổi và % giá đã thay đổi cũng như value của các bản ghi
  mathData() {

    for (let i = 0; i < this.data.length; i++) {
      // Tăng volume ngẫu nhiên trong khoảng từ 10->30
      this.data[i].volume = this.data[i].volume + Math.random() * (30 - 10) + 10;
      // Thay đổi giá từ hàm cho trước
      const priceChange = this.randomPrice(this.data[i].price);
      this.data[i].price = this.data[i].price + priceChange;
      // Tính giá thay đổi so với giá tham chiếu ban đầu
      const differencePrice = this.data[i].price - this.data[i].referPrice;
      this.data[i].change = differencePrice;
      // Tính phần trăm giá thay đổi so với giá tham chiếu ban đầu
      this.data[i].perChange = differencePrice * 100 / this.data[i].referPrice;

      // Check trạng thái của bản ghi thay đổi theo chiều tăng, giảm hoặc không
      if (differencePrice < 0) {
        this.data[i].statusUp = -1;
      } else if (differencePrice > 0) {
        this.data[i].statusUp = 1;
      } else {
        this.data[i].statusUp = 0;
      }
    }
    // Sắp xếp các bản ghi giảm dần sau khi dữ liệu thay đổi
    this.dataSourceGainer = this.data.sort((a, b) => a.price * a.volume > b.price * b.volume ? -1 : 1);
    // Lấy top 20 bản ghi có value cao nhất
    this.dataSourceGainer = this.dataSourceGainer.slice(0, 20);
    // Sắp xếp các bản ghi tăng dần sau khi dữ liệu thay đổi
    this.dataSourceLoser = this.data.sort((a, b) => a.price * a.volume > b.price * b.volume ? 1 : -1);
    // Lấy top 20 bản ghi có value nhỏ nhất
    this.dataSourceLoser = this.dataSourceLoser.slice(0, 20);
  }

}
