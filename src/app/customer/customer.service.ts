import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly baseUrl: string = 'http://localhost:58427/api/guest/guest?guestId=0';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCustomerById() {
    const bodyObj = { name: 'jimmy', address: 'KTM', vatNumber: '23df' };
    const httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    const httpParams = new HttpParams().set('id', '1');
    const options = { params: httpParams };

    //For update
    // const options = { params: httpParams ,headers: httpHeaders };
    return this.http.get(this.baseUrl + '/getHotelById', options);
    // for Post
    //return this.http.get(this.baseUrl + '/getHotelById', bodyObj, options);
  }

  // postCustomer() {
  //   const bodyObj = { name: 'jimmy', address: 'KTM', vatNumber: '23df' };
  //   const httpHeaders = new HttpHeaders().set(
  //     'Content-Type',
  //     'application/json'
  //   );
  //   const options = { headers: httpHeaders };
  //   return this.http.get(this.baseUrl + '/getHotelById', bodyObj);
  // }
}
