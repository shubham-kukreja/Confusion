import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Dish } from '../shared/dish';
import { baseURL } from '../shared/baseurl';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }
  putFeedback(feedback): Observable<Feedback>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Feedback>(baseURL + 'feedback' , feedback, httpOptions);
  }
}
