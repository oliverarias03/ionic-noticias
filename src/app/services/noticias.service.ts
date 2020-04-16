import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private http: HttpClient) {}

  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>(
      'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0d805765879643aca6d5cc7c1ad8883e'
    );
  }
}
