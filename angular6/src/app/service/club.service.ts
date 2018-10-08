import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Club} from '../model/club.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ClubService {

  private clubUrl = 'http://localhost:8080/chessClubs';

  constructor(private http: HttpClient) {
  }

  // private clubUrl = '/api';

  public getClub() {
    return this.http.get<Club[]>(this.clubUrl + '/');
  }

  public deleteClub(id: number) {
    return this.http.delete(this.clubUrl + '/' + id);
  }

  public createClub(club) {
    return this.http.post<Club>(this.clubUrl, club);
  }

  public getClubById(id: number) {
    return this.http.get<Club>(this.clubUrl + '/' + id);
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
  updateClub(club: Club) {
    return this.http.put(this.clubUrl, club);
  }
}
