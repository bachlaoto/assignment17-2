import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {RefResultCode} from '../model/refResultCode.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class RefResultCodeService {

  private refResultCodeUrl = 'http://localhost:8080/chessRefResultCodes';

  constructor(private http: HttpClient) {
  }

  // private refResultCodeUrl = '/api';

  public getRefResultCode() {
    return this.http.get<RefResultCode[]>(this.refResultCodeUrl + '/');
  }

  public deleteRefResultCode(id: number) {
    return this.http.delete(this.refResultCodeUrl + '/' + id);
  }

  public createRefResultCode(refResultCode) {
    return this.http.post<RefResultCode>(this.refResultCodeUrl, refResultCode);
  }

  public getRefResultCodeById(id: number) {
    return this.http.get<RefResultCode>(this.refResultCodeUrl + '/' + id);
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
  updateRefResultCode(refResultCode: RefResultCode) {
    return this.http.put(this.refResultCodeUrl, refResultCode);
  }
}
