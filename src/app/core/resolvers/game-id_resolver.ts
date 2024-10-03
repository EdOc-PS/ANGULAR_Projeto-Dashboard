import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GameDetails } from "../models/gamesDetails.model";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { GameDetailsService } from "../services/gameDetail.service";

@Injectable({providedIn: 'root'})
export class GameIdResolver implements Resolve<Observable<GameDetails>>{
  constructor(private gameService: GameDetailsService){}

  resolve(route: ActivatedRouteSnapshot):Observable<GameDetails>{
    return this.gameService.getGameById(route.params["id"])
  }
}
