import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { GameDetails } from "../models/gamesDetails.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class GameDetailsService {

  constructor(private httpClient: HttpClient) { }

  getGameById(id: number): Observable<GameDetails> {
    return this.httpClient.get<GameDetails>(environment.api + "games/" + id)
  }
}
