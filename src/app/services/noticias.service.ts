import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get(`${apiURL}/everything?q=tesla&sortBy=publishedAt&apiKey=${apiKey}`);
  }

  getCategorias (categoria: string) {
    return this.http.get(`${apiURL}/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`);
  }

  getGlobales () {
    return this.http.get(`${apiURL}/everything?domains=wsj.com&apiKey=${apiKey}`);
  }

}
