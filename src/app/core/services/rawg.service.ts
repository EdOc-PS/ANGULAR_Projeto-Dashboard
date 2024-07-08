import { HttpClient } from "@angular/common/http";
import { Injectable, signal, WritableSignal } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Game, SearchResult } from "../models/games.model";

@Injectable({
  providedIn: 'root'
})

export class RAWGService {

  $games: WritableSignal<Game[]> = signal([]);

  private url = environment.api;

  constructor(private httpClient: HttpClient){
  }

 searchGames(): Observable<SearchResult>{
    return this.httpClient.get<SearchResult>(this.url + 'games')
  }

  setGames(game: Game[]) : void{
    this.$games.set(game);
  }
}
