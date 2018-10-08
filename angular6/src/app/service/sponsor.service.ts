import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Sponsor} from '../model/sponsor.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SponsorService {

  private sponsorUrl = 'http://localhost:8080/chessSponsors';

  constructor(private http: HttpClient) {
  }

  // private sponsorUrl = '/api';

  public getSponsor() {
    return this.http.get<Sponsor[]>(this.sponsorUrl + '/');
  }

  public deleteSponsor(id: number) {
    return this.http.delete(this.sponsorUrl + '/' + id);
  }

  public createSponsor(sponsor) {
    return this.http.post<Sponsor>(this.sponsorUrl, sponsor);
  }

  public getSponsorById(id: number) {
    return this.http.get<Sponsor>(this.sponsorUrl + '/' + id);
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
  updateSponsor(sponsor: Sponsor) {
    return this.http.put(this.sponsorUrl, sponsor);
  }
}
