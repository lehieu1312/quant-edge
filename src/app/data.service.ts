import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};
const apiUrl = '/api';
@Injectable()
export class DataService {
  result: any;
  constructor(private http: Http) { }
  // Hàm lấy dữ liệu và xử lý dữ liệu từ api server nodejs
  getData(): Observable<any> {
    return this.http.get(apiUrl).pipe(map(result => this.result = result.json()));
  }
}
