import { HttpClient } from "@angular/common/http";
import { Injectable, signal, WritableSignal } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Game, SearchResult } from "../models/games.model";

@Injectable({
  providedIn: 'root'
})

export class  GameService {

  $games: WritableSignal<Game[]> = signal([]);

  constructor(private httpClient: HttpClient){
  }

 searchGames(): Observable<SearchResult>{
    return this.httpClient.get<SearchResult>(environment.api + 'games')
  }

  setGames(game: Game[]) : void{
    this.$games.set(game);
  }

  getGameById(id:string){
    return this.httpClient.get<Game>(environment.api + "games/" + id)
  }
}
