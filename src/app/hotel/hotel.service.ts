import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private readonly baseUrl = 'http://localhost:58427/api/hotel/hotel';
  constructor(private http: HttpClient) {}

  getHotel(): Observable<any> {
    return this.http.get(this.baseUrl + '/0');
  }

  addHotel(bodyObj): Observable<any> {
    const httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    const options = { headers: httpHeaders };
    return this.http.post(this.baseUrl, bodyObj, options);
  }

  delHotel(id) {
    const httpParams = new HttpParams().set('hotelId', id);
    const options = { params: httpParams };
    return this.http.delete(this.baseUrl, options);
  }

  editHotel(hotel): Observable<any> {
    const httpParams = new HttpParams().set('hotelId', hotel.hotelId);
    const httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    const options = { params: httpParams, headers: httpHeaders };
    return this.http.put(this.baseUrl, hotel, options);
  }
}
