import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';
import { Leader } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor( private http: HttpClient ) { }
  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion>( baseURL  + 'promotions/?featured=true').pipe(map(dishes => dishes[0]));
  }
}
