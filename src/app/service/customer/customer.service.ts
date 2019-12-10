import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly baseUrl: string = 'http://localhost:58427/api/guest';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/guest');
  }
}
