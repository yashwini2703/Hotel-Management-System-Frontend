import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../hotel/class/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseURL = "http://localhost:8080/api/v1/hotels";
  constructor(private httpClient:HttpClient) { }

  getHotelsList():Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}`);
  }

  createHotel(hotel:Hotel):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,hotel);
  }

  getHotelById(hid: number): Observable<Hotel>{
    return this.httpClient.get<Hotel>(`${this.baseURL}/${hid}`);
  }

  updateHotel(hid: number, hotel: Hotel): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${hid}`, hotel);
  }

  deleteHotel(hid: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${hid}`);
  }

  getHotelsByCity(city: string): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/bycity/` + city);
  }
  
}
