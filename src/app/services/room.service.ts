import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Room } from '../room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  baseUrl = 'http://localhost:8887';
  
  constructor(private readonly http: HttpClient) { }
  
  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRoom(room: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, room);
  }

  updateRoom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRoomsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
