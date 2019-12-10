import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly baseUrl: string = 'http://localhost:58427/api/hotel';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get(this.baseUrl + '/gethotel');
  }

  getCustomerById() {
    const httpParams = new HttpParams().set('id', '1');
    const options = { params: httpParams };
    return this.http.get(this.baseUrl + '/getHotelById', options);
  }
}
