import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {ActualTournamentSponsor} from '../model/actualTournamentSponsor.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ActualTournamentSponsorService {

  private actualTournamentSponsorUrl = 'http://localhost:8080/chessActualTournamentSponsors';

  constructor(private http: HttpClient) {
  }

  // private actualTournamentSponsorUrl = '/api';

  public getActualTournamentSponsor() {
    return this.http.get<ActualTournamentSponsor[]>(this.actualTournamentSponsorUrl + '/');
  }

  public deleteActualTournamentSponsor(id: number) {
    return this.http.delete(this.actualTournamentSponsorUrl + '/' + id);
  }

  public createActualTournamentSponsor(actualTournamentSponsor) {
    return this.http.post<ActualTournamentSponsor>(this.actualTournamentSponsorUrl, actualTournamentSponsor);
  }

  public getActualTournamentSponsorById(id: number) {
    return this.http.get<ActualTournamentSponsor>(this.actualTournamentSponsorUrl + '/' + id);
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
  updateActualTournamentSponsor(actualTournamentSponsor: ActualTournamentSponsor) {
    return this.http.put(this.actualTournamentSponsorUrl, actualTournamentSponsor);
  }
}
