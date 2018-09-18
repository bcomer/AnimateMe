import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HoganSelectService {

  constructor(private http: Http) { }
}
