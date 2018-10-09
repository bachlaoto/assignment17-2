import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Organizer} from '../model/organizer.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class OrganizerService {

  private organizerUrl = 'http://localhost:8080/tournamentOrganizers';

  constructor(private http: HttpClient) {
  }

  // private organizerUrl = '/api';

  public getOrganizer() {
    return this.http.get<Organizer[]>(this.organizerUrl + '/');
  }

  public deleteOrganizer(id: number) {
    return this.http.delete(this.organizerUrl + '/' + id);
  }

  public createOrganizer(organizer) {
    return this.http.post<Organizer>(this.organizerUrl, organizer);
  }

  public getOrganizerById(id: number) {
    return this.http.get<Organizer>(this.organizerUrl + '/' + id);
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
  updateOrganizer(organizer: Organizer) {
    return this.http.put(this.organizerUrl, organizer);
  }
}
