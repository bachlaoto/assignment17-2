import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {TournamentOrganizer} from '../model/tournamentOrganizer.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TournamentOrganizerService {

  private tournamentOrganizerUrl = 'http://localhost:8080/chessTournamentOrganizers';

  constructor(private http: HttpClient) {
  }

  // private tournamentOrganizerUrl = '/api';

  public getTournamentOrganizer() {
    return this.http.get<TournamentOrganizer[]>(this.tournamentOrganizerUrl + '/');
  }

  public deleteTournamentOrganizer(id: number) {
    return this.http.delete(this.tournamentOrganizerUrl + '/' + id);
  }

  public createTournamentOrganizer(tournamentOrganizer) {
    return this.http.post<TournamentOrganizer>(this.tournamentOrganizerUrl, tournamentOrganizer);
  }

  public getTournamentOrganizerById(id: number) {
    return this.http.get<TournamentOrganizer>(this.tournamentOrganizerUrl + '/' + id);
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
  updateTournamentOrganizer(tournamentOrganizer: TournamentOrganizer) {
    return this.http.put(this.tournamentOrganizerUrl, tournamentOrganizer);
  }
}
