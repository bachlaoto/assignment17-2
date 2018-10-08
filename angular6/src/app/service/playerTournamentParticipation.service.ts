import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {PlayerTournamentParticipation} from '../model/playerTournamentParticipation.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PlayerTournamentParticipationService {

  private playerTournamentParticipationUrl = 'http://localhost:8080/chessPlayerTournamentParticipations';

  constructor(private http: HttpClient) {
  }

  // private playerTournamentParticipationUrl = '/api';

  public getPlayerTournamentParticipation() {
    return this.http.get<PlayerTournamentParticipation[]>(this.playerTournamentParticipationUrl + '/');
  }

  public deletePlayerTournamentParticipation(id: number) {
    return this.http.delete(this.playerTournamentParticipationUrl + '/' + id);
  }

  public createPlayerTournamentParticipation(playerTournamentParticipation) {
    return this.http.post<PlayerTournamentParticipation>(this.playerTournamentParticipationUrl, playerTournamentParticipation);
  }

  public getPlayerTournamentParticipationById(id: number) {
    return this.http.get<PlayerTournamentParticipation>(this.playerTournamentParticipationUrl + '/' + id);
  }

  // save(car: any): Observable<any> {
  //   let result: Observable<Object>;
  //   if (car['href']) {
  //     result = this.http.put(car.href, car);
  //   } else {
  //     result = this.http.post(this.CAR_API, car);
  //   }
  //   return result;
  // }
  updatePlayerTournamentParticipation(playerTournamentParticipation: PlayerTournamentParticipation) {
    return this.http.put(this.playerTournamentParticipationUrl, playerTournamentParticipation);
  }
}
