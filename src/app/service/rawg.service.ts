import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Games } from '../models/games.model';


@Injectable({
  providedIn: 'root'
})

export class RAWGService {

  private url = environment.api;

  constructor(private http: HttpClient) {

  }
  getGames() {
    return this.http.get<Games[]>(this.url)
  }
}

