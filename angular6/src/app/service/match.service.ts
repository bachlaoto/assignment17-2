import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Match} from '../model/match.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MatchService {

  private matchUrl = 'http://localhost:8080/matchs';

  constructor(private http: HttpClient) {
  }

  // private matchUrl = '/api';

  public getMatch() {
    return this.http.get<Match[]>(this.matchUrl + '/');
  }

  public deleteMatch(id: number) {
    return this.http.delete(this.matchUrl + '/' + id);
  }

  public createMatch(match) {
    return this.http.post<Match>(this.matchUrl, match);
  }

  public getMatchById(id: number) {
    return this.http.get<Match>(this.matchUrl + '/' + id);
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
  updateMatch(match: Match) {
    return this.http.put(this.matchUrl, match);
  }
}
