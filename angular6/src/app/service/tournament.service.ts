import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Tournament} from '../model/tournament.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TournamentService {

  private tournamentUrl = 'http://localhost:8080/tournaments';

  constructor(private http: HttpClient) {
  }

  // private tournamentUrl = '/api';

  public getTournament() {
    return this.http.get<Tournament[]>(this.tournamentUrl + '/');
  }

  public deleteTournament(id: number) {
    return this.http.delete(this.tournamentUrl + '/' + id);
  }

  public createTournament(tournament) {
    return this.http.post<Tournament>(this.tournamentUrl, tournament);
  }

  public getTournamentById(id: number) {
    return this.http.get<Tournament>(this.tournamentUrl + '/' + id);
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
  updateTournament(tournament: Tournament) {
    return this.http.put(this.tournamentUrl, tournament);
  }
}
